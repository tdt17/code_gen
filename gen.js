import { readFileSync, writeFileSync } from 'fs'
const script = readFileSync('war3map_6.0.j','utf8')
const blocks = []
script.split('\n').forEach(line => {
    const [, keyword, name] = line.match(/^(\w+)(?: (\w+))?/) || []
    if(keyword && !keyword.startsWith('end')) {
        blocks.push({
            keyword,
            name,
            lines: []
        })
    }
    blocks[blocks.length - 1].lines.push(line)
})

const findFnBlock = (fn) => blocks.find(({keyword, name}) => keyword === 'function' && name === fn)

const TYPES = [
    'integer',
    'boolean',
    'string',
    'real',
    'dialog',
    'force',
    'handle',
    'timer',
    'rect',
    'camerasetup',
    'sound',
    'trigger',
    'group',
    'unit',
    'button',
    'location',
    'player',
    'hashtable',
    'item',
    'texttag',
    'timerdialog'
]

const REPLACES = (isGlobal = false) => [
    [/ForForce\(.*, function (.*)\)/, '$1()'],
    [') then', ') {'],
    ['else', '} else {'],
    ['endif', '}'],
    [/function ((\w)+).*/, 'export function $1() {'],
    ['endfunction', '}'],
    ['set ', ''],
    ['call ', ''],
    ['local ', ''],
    ['not(', '!('],
    ['not ', '! '],
    [/=\((.+)\/(.+)\)/, '=~~($1/$2)'],
    ...TYPES.map(type => [`	${type} `, isGlobal ? 'export let ' : 'let ']),
    [/array (\w+)/, '$1 = []'],
    ['endloop', '}'],
    ['loop', 'while(true) {'],
    [/exitwhen\((.+)\)/, 'if($1) break'],
    [/exitwhen (.+)/, 'if($1) break'],
    [/GetForLoopIndexA\(\)/g, 'bj_forLoopAIndex'],
    ['ConditionalTriggerExecute(gg_trg_Variable_Tabellen)', 'Trig_Variable_Tabellen_Actions()'],
    ['ConditionalTriggerExecute(gg_trg_Variable_Tabellen_1k)', 'Trig_Variable_Tabellen_1k_Actions()']
]

const rewrite = (line, isGlobal) => {
    const newLine = REPLACES(isGlobal).reduce((current, replaceOptions) => current.replace(...replaceOptions), line)
    const [, directCall] = newLine.match(/([A-Z][\w]*)\(.*\)/) || []
    if(directCall) {
        const block = findFnBlock(directCall);
        const isFill = FILLS.some(fn => fn.name === directCall)
        if(block || isFill) {
            if(!isFill && !dep.includes(block)) {
                dep.push(block)
            }
        } else {
            console.log('error new line: ' + newLine)
            console.log('error line: ' + line)
            throw Error(`can not find directCall ${directCall}`)
        }
    }
    return newLine
}

const FITLERS = [
    'CreateForce',
    'DialogCreate',
    'DestroyTrigger',
    'CreateTimer',
    'CreateGroup',
    'globals',
    'endglobals',
    'udg_Current_Host'
]

const FILLS = [
    'let bj_forLoopAIndex = 0, bj_forLoopAIndexEnd = 0, playerName = \'TdT\'',
    function GetConvertedPlayerId(i) { return i + 1 },
    function ConvertedPlayer(i) { return i - 1 },
    function GetEnumPlayer() { return 0 },
    function S2I(s) { return Number.parseInt(s, 10) },
    function I2S(i) { return String(i) },
    function SubStringBJ(str, start, end) { return str.substring(start - 1, end) },
    function StringLength(str) { return str.length },
    function StringCase(str) { return str.toLowerCase() },
    function GetPlayerName() { return playerName },
    function getCode(xp, name) {
        InitGlobals()
        playerName = name
        udg_xp_spielerlevel[1] = xp
        Trig_Fixe_Tabellen_Actions()
        Trig_SN_Encoder_Actions()
        Trig_Encoder_Actions()

        return udg_xp_encoded_code[1]
    }
]
let extractJS = FILLS.map(fn => 'export ' + fn.toString()).join('\n') + '\n\n'
const dep = [
    blocks[0], 
    findFnBlock("InitGlobals"),
    findFnBlock('Trig_Fixe_Tabellen_Actions'),
    findFnBlock("Trig_Encoder_Actions"),
    findFnBlock('Trig_Encoder_Game_Actions'),
    findFnBlock('Trig_SN_Encoder_Actions')
]
let block
let i = 0
while(block = dep[i++]) {
    extractJS += block.lines
        .filter((line) => !FITLERS.some(filter => line.match(filter)))
        .map(line => rewrite(line, i === 1))
        .join('\n')
}

extractJS += '\n\nconsole.log(getCode(1000, \'tdt\'))'

writeFileSync('output.js', extractJS, 'utf8')

await import('./output.js')
