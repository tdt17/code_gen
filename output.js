export let bj_forLoopAIndex = 0, bj_forLoopAIndexEnd = 0, playerName = "Test"
export function GetConvertedPlayerId(i) { return i + 1 }
export function ConvertedPlayer(i) { return i - 1 }
export function GetEnumPlayer() { return 0 }
export function S2I(s) { return Number.parseInt(s, 10) }
export function I2S(i) { return String(i) }
export function SubStringBJ(str, start, end) { return str.substring(start - 1, end) }
export function StringLength(str) { return str.length }
export function StringCase(str) { return str.toLowerCase() }
export function GetPlayerName() { return playerName }
export function getCode(xp, name) {
        InitGlobals()
        playerName = name
        udg_xp_spielerlevel[1] = xp
        Trig_Fixe_Tabellen_Actions()
        Trig_SN_Encoder_Actions()
        Trig_Encoder_Func001A()

        console.log(
            udg_xp_encoded_code[1]
        )
    }

export let udg_Monster_Amount = 0
export let udg_Monster_Type = []
export let udg_Lives = 0
export let udg_NoLivesLost = false
export let udg_verteidiger = null
export let udg_DiffDialog = null
export let udg_dia_sehr_einfach = null
export let udg_Normal = null
export let udg_Hard = null
export let udg_Perfection = null
export let udg_Spielerzahl = 0
export let udg_colortext = []
export let udg_Lebensbalken
export let udg_VariVari = []
export let udg_SpielerMultiPlatz = []
export let udg_auszeichnungen = []
export let udg_Konto = []
export let udg_IstBank = []
export let udg_Lives_Lost_Tmp = 0
export let udg_Kills_Rangliste = []
export let udg_Platzierung = []
export let udg_Platzierung_Reverse = []
export let udg_Towerzahl = []
export let udg_IstKino = []
export let udg_DiffCounter = []
export let udg_IstObi = []
export let udg_IstBeate = []
export let udg_stopflags = []
export let udg_bonus_typ = []
export let udg_Level_Run = false
export let udg_handicap_pl12 = 0
export let udg_balance_gold_total = 0
export let udg_KickDialog = null
export let udg_KickPlayerChoose = []
export let udg_ausz_egoist = []
export let udg_Spendenkonto_gtotal = []
export let udg_ausz_unentschl = []
export let udg_ausz_banker = []
export let udg_ausz_wette = []
export let udg_copydialog = null
export let udg_dia_copy_ja = null
export let udg_dia_copy_Nein = null
export let udg_copy_ziel = []
export let udg_IstHM = []
export let udg_IstTUI = []
export let udg_IstA0K = []
export let udg_lp_tab = []
export let udg_aok_killcounter = 0
export let udg_Lebensbalken_Counter = 0
export let udg_Items_Speicher = []
export let udg_IstIkea = []
export let udg_TUI_Upgradegeld = []
export let udg_IstPost = []
export let udg_Easy = null
export let udg_ModusDialog = null
export let udg_Modus_Wahl = []
export let udg_Modus_STD_G = false
export let udg_Modus_STD_L = false
export let udg_Modus_KILL_Menge = 0
export let udg_creep_counter = 0
export let udg_KillsTemp_Total = 0
export let udg_Killbalken
export let udg_Killbalken_Counter = 0
export let udg_Modus_MASSAKER = false
export let udg_Modus_KILL222 = false
export let udg_Kick = false
export let udg_floating_text = []
export let udg_floating_displayTMP
export let udg_punkte_string
export let udg_punkte = 0
export let udg_punkte_string_2
export let udg_punkte_pruefstring
export let udg_punkte_spielerzahl = []
export let udg_spiel_laeuft = false
export let udg_spezial_typ_wahl = 0
export let udg_IstAldi = []
export let udg_IstMediaMarkt = []
export let udg_IstTanteEmma = []
export let udg_IstPorsche = []
export let udg_IstAral = []
export let udg_IstMcD = []
export let udg_IstCopyShop = []
export let udg_IstGarten = []
export let udg_Modus_Auge = false
export let udg_anabolika_geld = 0
export let udg_IstFitness = []
export let udg_goldstring
export let udg_goldamount_pp = []
export let udg_time_total
export let udg_timer_parts = []
export let udg_unit_switch_1 = 0
export let udg_unit_switch_2 = 0
export let udg_xp = []
export let udg_xp_diff_faktor = 0
export let udg_xp_spielerlevel = []
export let udg_xp_scr1A = []
export let udg_xp_scr2A = []
export let udg_xp_encoded_sn1 = []
export let udg_xp_encoded_sn2 = []
export let udg_xp_encoded_sn3 = []
export let udg_xp_encoded_cp1 = []
export let udg_xp_encoded_cp2 = []
export let udg_xp_encoded_cp3 = []
export let udg_xp_encoded_cp4 = []
export let udg_xp_encoded_code = []
export let udg_xp_entered_code = []
export let udg_xp_decoded_1 = []
export let udg_xp_decoded_2 = []
export let udg_xp_decoded_4 = []
export let udg_xp_decoded_3 = []
export let udg_xp_encoded_cp5 = []
export let udg_xp_decoded_5 = []
export let udg_xp_spielerlevel_tmp = []
export let udg_xp_retry = []
export let udg_VariReal = 0
export let udg_gold_multi_ppl = []
export let udg_IstBI = []
export let udg_rassen_std = []
export let udg_rassen_pro = []
export let udg_xp_keycode = 0
export let udg_xp_encoded_sn4_2 = []
export let udg_xp_scr3N = []
export let udg_xp_scr1N1 = []
export let udg_Modus_PWR_NEW = false
export let udg_IstBoss = false
export let udg_Next_Level_POWER = null
export let udg_sound = false
export let udg_SubModusDialog = null
export let udg_SubModus_Wahl = []
export let udg_Sub_Geldteilen = false
export let udg_Sub_KXP = false
export let udg_Host = null
export let udg_xp_scr1N2 = []
export let udg_xp_scr2N_KEY = []
export let udg_Sub_UNIQUE = false
export let udg_Typ_Std_pp = []
export let udg_Typ_Pro_pp = []
export let udg_geldteilen = 0
export let udg_KillsTemp = []
export let udg_KillsTotal = []
export let udg_id_gezeigt = false
export let udg_version
export let udg_Sub_AR = false
export let udg_xp_o_fake2 = []
export let udg_xp_o3 = []
export let udg_builder = []
export let udg_xp_encoded_sn2_2 = []
export let udg_autodeposit = []
export let udg_floating_counter_BI = 0
export let udg_floating_displayTMP_BI
export let udg_floating_text_BI = []
export let udg_floating_unit_BI = []
export let udg_temp_point = null
export let udg_auswahl_getroffen = []
export let udg_aktuelles_level = 0
export let udg_Gesamtwert = []
export let udg_hauptgebaeude = []
export let udg_Monstertype_Selector = 0
export let udg_Diff_CorrMaster = 0
export let udg_player_region = []
export let udg_color_ppl_red = []
export let udg_color_ppl_blue = []
export let udg_color_ppl_green = []
export let udg_Gold_Amount = 0
export let udg_temp_point2 = null
export let udg_typ_air = false
export let udg_typ_boss = false
export let udg_typ_normal = false
export let udg_Diff_Autobalance = 0
export let udg_last_lptab = 0
export let udg_diff_min = 0
export let udg_diff_max = 0
export let udg_Diff_Autobalance_Speicher = []
export let udg_gebiet_leer = []
export let udg_penalty = 0
export let udg_penalty_temp = 0
export let udg_defeat = false
export let udg_Next_Level = null
export let udg_XpDialog = []
export let udg_camdistance = []
export let udg_teampunkte = []
export let udg_player_ger = null
export let udg_spiel_ID
export let udg_NextLevelTW = null
export let udg_Lifes_Left = 0
export let udg_Lifes_Total = 0
export let udg_punkteanpassung = 0
export let udg_filialnamen_ger = []
export let udg_filialnamen_ger_PRO = []
export let udg_wpspot = []
export let udg_wegpunkte = []
export let udg_spez_ger = []
export let udg_Minipet_Art = []
export let udg_Datas = null
export let udg_xp_test = []
export let udg_alarm = 0
export let udg_temp_group = null
export let udg_tempp = null
export let udg_fever = []
export let udg_LCTimer = []
export let udg_LCTTW = []
export let udg_temp_group2 = null
export let udg_LC = []
export let udg_temp_unit = []
export let udg_birdeye = []
export let udg_VariVari2 = []
export let udg_Creeps = null
export let udg_nosfx = false
export let udg_Spezialtyp = []
export let udg_floating_gold = 0
export let udg_floating_owner = null
export let udg_Upgradegeld = []
export let udg_worth_flag = []
export let udg_rabatt = []
export let udg_temp_string_1
export let udg_interpunktieren = []
export let udg_Minipet = []
export let udg_temp_point_save = []
export let udg_DronesG = null
export let udg_Drones = []
export let udg_VariVari_SS = []
export let udg_dialog = null
export let udg_IstWeap = []
export let udg_enter_debug = false
export let udg_tbool = false
export let udg_tempu = null
export let udg_tempint = 0
export let udg_noobie_mode = false
export let udg_Sub_NoSpecial = false
export let udg_xpert = []
export let udg_vari_string
export let udg_vari_bool = false
export let udg_Lifes_Lost = 0
export let udg_Lifes_Lost_Tmp = 0
export let udg_creeps_k_m = []
export let udg_KillsTotal_Power = []
export let udg_Sub_Sandbox = false
export let udg_leftround = []
export let udg_allow = []
export let udg_ausz_bau = []
export let udg_DiffSmart = 0
export let udg_DiffCounterSmart = 0
export let udg_diff_add = 0
export let udg_ausz_autobalance = []
export let udg_diff_adjust = 0
export let udg_Playerbusy = []
export let udg_ausz_leben = []
export let udg_ausz_bank = 0
export let udg_punktemultiplikator = 0
export let udg_PlayerPunkteMultiplikator = 0
export let udg_securtiy_decoded = []
export let udg_xp_clear = []
export let udg_xp_encoded_cp6 = []
export let udg_tempint3 = 0
export let udg_temp_string_3
export let udg_xp_flag = []
export let udg_xp_decoded_6 = []
export let udg_xp_scrMP = []
export let udg_ueberweisung_laeuft = []
export let udg_AbhebTimer = []
export let udg_AbhebTTW = []
export let udg_vari_string2
export let udg_dialog_pp = []
export let udg_team = []
export let udg_ap = null
export let udg_button_ja = []
export let udg_button_nein = []
export let udg_RamboSouls = []
export let udg_MyMulti = []
export let udg_IstEbay = []
export let udg_CanSell = []
export let udg_SpecialEffekt = []
export let udg_RundenGold = []
export let udg_Impossible = null
export let udg_RestDiff = 0
export let udg_LPtoAdd = 0
export let udg_anabolik = false
export let udg_txtP = []
export let udg_h = null
export let udg_goldBonusRunde = 0
export let udg_ObiKills = []
export let udg_TPUse = []
export let udg_VariReal2 = []
export let udg_treal = 0
export let udg_Maxlife = 0
export let udg_spawn = null
export let udg_IstSpiel = []
export let udg_leaver = null
export let udg_LeaverMoney = []
export let udg_xp_decoded_7 = []
export let udg_xp_encoded_cp7 = []
export let udg_Spieler = []
export let udg_GradEinheit = 0
export let udg_Gartensystem = null
export let udg_Supply = null
export let udg_tmp = 0
export let udg_tmpBool = false
export let udg_tmp2 = 0
export let udg_p1 = null
export let udg_p2 = null
export let udg_TransferRate = 0
export let udg_t = []
export let udg_Transferd = []
export let udg_Verbunden = 0
export let udg_test = null
export let udg_Wassertanks = null
export let udg_p1_Kopieren = null
export let udg_p2_Kopieren = null
export let udg_tmp_Kopieren = 0
export let udg_tmp2_Kopieren = 0
export let udg_TransferRate_Kopieren = 0
export let udg_Transferd_Kopieren = []
export let udg_t_Kopieren = []
export let udg_Manadiffer = 0
export let udg_brunnen = null
export let udg_MPja = []
export let udg_Wassertankrest = 0
export let gg_rct_Ende = null
export let gg_rct_Ende_Kopieren = null
export let gg_rct_Move_Mitte = null
export let gg_rct_Move_Mitte_Links = null
export let gg_rct_Move_Mitte_Links_Oben = null
export let gg_rct_Move_Mitte_Links_Unten = null
export let gg_rct_Move_Mitte_Rechts = null
export let gg_rct_Move_Mitte_Rechts_Oben = null
export let gg_rct_Move_Mitte_Rechts_Unten = null
export let gg_rct_Order_Mitte = null
export let gg_rct_Order_Mitte_Links = null
export let gg_rct_Order_Mitte_Links_Oben = null
export let gg_rct_Order_Mitte_Links_Unten = null
export let gg_rct_Order_Mitte_Rechts = null
export let gg_rct_Order_Mitte_Rechts_Oben = null
export let gg_rct_Order_Mitte_Rechts_Unten = null
export let gg_rct_Player1 = null
export let gg_rct_Player10 = null
export let gg_rct_Player11 = null
export let gg_rct_Player2 = null
export let gg_rct_Player3 = null
export let gg_rct_Player4 = null
export let gg_rct_Player5 = null
export let gg_rct_Player6 = null
export let gg_rct_Player7 = null
export let gg_rct_Player8 = null
export let gg_rct_Player9 = null
export let gg_rct_Spawn1 = null
export let gg_rct_Spawn11 = null
export let gg_rct_Spawn12 = null
export let gg_rct_Spawn2 = null
export let gg_rct_Spawn3 = null
export let gg_rct_Spawn4 = null
export let gg_rct_Spawn8 = null
export let gg_rct_Spawn9 = null
export let gg_rct_Startup_Oben_Links = null
export let gg_rct_Startup_Oben_Rechts = null
export let gg_rct_Spawn13 = null
export let gg_rct_Spawn14 = null
export let gg_rct_Startup_Unten_Links = null
export let gg_rct_Spawn15 = null
export let gg_rct_Spawn16 = null
export let gg_rct_Startup_Unten_Rechts = null
export let gg_rct_Move_TMitteL_Oben = null
export let gg_rct_Order_TMitteL_Oben = null
export let gg_rct_Move_TMitteL_Unten = null
export let gg_rct_Order_TMitteL_Unten = null
export let gg_rct_Move_TMitteR_Oben = null
export let gg_rct_Order_TMitteR_Oben = null
export let gg_rct_Move_TMitteR_Unten = null
export let gg_rct_Order_TMitteR_Unten = null
export let gg_rct_Move_TMitteR = null
export let gg_rct_Gateopener = null
export let gg_rct_Remover = null
export let gg_rct_Move_Tele_RD = null
export let gg_rct_Move_Tele_RU = null
export let gg_rct_Move_Tele_LU = null
export let gg_rct_Move_Tele_LD = null
export let gg_rct_Debug1 = null
export let gg_rct_Debug2 = null
export let gg_rct_Move_Tele_MRD = null
export let gg_rct_Move_Tele_MRU = null
export let gg_rct_Move_Tele_MLU = null
export let gg_rct_Move_Tele_MLD = null
export let gg_rct_Move_TMitteL = null
export let gg_rct_XtraMP1 = null
export let gg_rct_XtraMP2 = null
export let gg_rct_XtraMP3 = null
export let gg_rct_XtraMP4 = null
export let gg_rct_StartupMitteLinks = null
export let gg_rct_StartupMitteRechts = null
export let gg_rct_Blockgebietrot1 = null
export let gg_rct_Blockgebietrot2 = null
export let gg_rct_Blockgebietrot3 = null
export let gg_rct_Blockgebietblau1 = null
export let gg_rct_Blockgebietblau2 = null
export let gg_rct_Blockgebietblau3 = null
export let gg_rct_Blockgebietpink3 = null
export let gg_rct_Blockgebietpink2 = null
export let gg_rct_Blockgebietpink1 = null
export let gg_rct_Blockgebietlila1 = null
export let gg_rct_Blockgebietlila2 = null
export let gg_rct_Blockgebietlila3 = null
export let gg_rct_Blockgebietorang1 = null
export let gg_rct_Blockgebietorang2 = null
export let gg_rct_Blockgebietorang3 = null
export let gg_rct_Blockgebiethellblau1 = null
export let gg_rct_Blockgebiethellblau2 = null
export let gg_rct_Blockgebiethellblau3 = null
export let gg_rct_Blockgebietteal1 = null
export let gg_rct_Blockgebietteal2 = null
export let gg_rct_Blockgebietteal3 = null
export let gg_rct_Blockgebietgelb1 = null
export let gg_rct_Blockgebietgelb2 = null
export let gg_rct_Blockgebietgelb3 = null
export let gg_rct_Blockgebietgruen1 = null
export let gg_rct_Blockgebietgruen2 = null
export let gg_rct_Blockgebietgruen3 = null
export let gg_rct_Blockgebietdunkel1 = null
export let gg_rct_Blockgebietdunkel2 = null
export let gg_rct_Blockgebietdunkel3 = null
export let gg_rct_Blockgebietgrau1 = null
export let gg_rct_Blockgebietgrau2 = null
export let gg_rct_Blockgebietgrau3 = null
export let gg_cam_Camera_001 = null
export let gg_snd_MageTowerWhat1 = null
export let gg_snd_Loading = null
export let gg_snd_GoodJob = null
export let gg_snd_AutoCastButtonClick1 = null
export let gg_snd_BlueFireBurst = null
export let gg_snd_Switch = null
export let gg_snd_ArrangedTeamInvitation = null
export let gg_snd_SecretFound = null
export let gg_snd_Warning = null
export let gg_snd_TheHornOfCenarius = null
export let gg_snd_SargerasLaugh = null
export let gg_snd_ItemReceived = null
export let gg_snd_SecretFound01 = null
export let gg_snd_HoofSteps1 = null
export let gg_snd_Hint = null
export let gg_snd_Bonus = null
export let gg_snd_SargerasRoar = null
export let gg_snd_SP_Ich_tue_mein_Bestes = null
export let gg_snd_SP_Gute_Idee = null
export let gg_snd_SP_Sofort = null
export let gg_snd_SP_Peng = null
export let gg_snd_SP_Natuerlich = null
export let gg_snd_SP_Gleich_zeig_ich_euch_mal_wie_man_spielt = null
export let gg_snd_SP_Voll_der_Hammer = null
export let gg_snd_SP_Sauer = null
export let gg_snd_SP_Hallo = null
export let gg_snd_SP_Sehr_gut = null
export let gg_snd_SP_Das_ist_sonderbar = null
export let gg_snd_SP_Hoert_sich_gut_an = null
export let gg_snd_SP_Nein_ist_das_euer_letztes_Wort = null
export let gg_snd_SP_Genial = null
export let gg_snd_SP_Blut = null
export let gg_snd_SP_Bleibt_mir_vom_Leib = null
export let gg_snd_SP_Was_braucht_ihr = null
export let gg_snd_SP_lasst_mich_ma_ran = null
export let gg_snd_SP_Seht_zu_und_lernt = null
export let gg_snd_SP_Ich_bin_gespannt = null
export let gg_snd_SP_Kein_Wort_mehr = null
export let gg_snd_SP_Da_hab_ich_was_fuer_euch = null
export let gg_snd_SP_Gute_Wahl = null
export let gg_snd_load_new = null
export let gg_snd_generic = null
export let gg_snd_SP_lol = null
export let gg_snd_Domination = null
export let gg_snd_Generic = null
export let gg_snd_Menu = null
export let gg_snd_SP2_Hunger = null
export let gg_snd_SP2_fertig = null
export let gg_snd_SP2_wtf = null
export let gg_snd_SP2_nerv = null
export let gg_snd_SP2_fuck = null
export let gg_snd_SP2_betrunken = null
export let gg_snd_LC = null
export let gg_snd_Alarm = null
export let gg_trg_Int = null
export let gg_trg_Startsequenz = null
export let gg_trg_Spieler_und_Starteinstellung = null
export let gg_trg_Builder_erstellen = null
export let gg_trg_Hauptkonstanten = null
export let gg_trg_Gegnertypen = null
export let gg_trg_Dekonstruktor = null
export let gg_trg_Zufallsrasse_STD = null
export let gg_trg_Zufallsrasse_PRO = null
export let gg_trg_Zufallsrasse_PRO_STD = null
export let gg_trg_Auswahl_getroffen = null
export let gg_trg_Auto_wahl = null
export let gg_trg_Funktionen_aktivieren = null
export let gg_trg_Neues_Level = null
export let gg_trg_Power_Trigger = null
export let gg_trg_Modi_Gegnermenge = null
export let gg_trg_Spezialrunden_Wahl = null
export let gg_trg_Blockgebiete_aus_ein = null
export let gg_trg_Gegner_Group = null
export let gg_trg_Gegner_Line = null
export let gg_trg_Leere_Gebiete_finden = null
export let gg_trg_kill_autodebug = null
export let gg_trg_Level_Vorbei = null
export let gg_trg_Level_Vorbei_2 = null
export let gg_trg_Creepwahl = null
export let gg_trg_Aral_Downgrade_Kopieren = null
export let gg_trg_Gold_und_Tips_und_Re= null
export let gg_trg_Zinsen_und_Specials = null
export let gg_trg_Gegner_betritt_Spiel = null
export let gg_trg_Leichen_entfernen = null
export let gg_trg_Angriff_verhindern = null
export let gg_trg_Spielereinheiten_betreten = null
export let gg_trg_Towerlimit_u_andres = null
export let gg_trg_Towerzahl = null
export let gg_trg_Autobalance = null
export let gg_trg_Lebenspunkte_anpassen = null
export let gg_trg_Sieg = null
export let gg_trg_SiegPower = null
export let gg_trg_Niederlage = null
export let gg_trg_Destructor = null
export let gg_trg_defeat_player = null
export let gg_trg_Bonusrunden_vorbei = null
export let gg_trg_victory_player = null
export let gg_trg_Auszeichnungen_Sortieren = null
export let gg_trg_Ehrungen = null
export let gg_trg_Hall_of_Fame = null
export let gg_trg_XP_und_Ulti_Tower_freigeben = null
export let gg_trg_Check = null
export let gg_trg_jeder_sek_auf_max_hp = null
export let gg_trg_Chuck_bauen = null
export let gg_trg_Held_Chuck_Level = null
export let gg_trg_ausbau_chuck_bonuis = null
export let gg_trg_Chuck_Norris = null
export let gg_trg_Rambo = null
export let gg_trg_Rambo_soul_collector = null
export let gg_trg_Staic_Noise_Burning = null
export let gg_trg_Staic_Plan_B_up = null
export let gg_trg_Unzuverlaessig_2 = null
export let gg_trg_Unzuverlaessig_1 = null
export let gg_trg_Food_Upgrade = null
export let gg_trg_Alarm = null
export let gg_trg_Creepfaerbung_und_Casts_und_SECURE = null
export let gg_trg_Altersheim = null
export let gg_trg_Markieren = null
export let gg_trg_Tote_Helden_entfernen = null
export let gg_trg_Klassifikation_aendern = null
export let gg_trg_Sammelpunkt_und_Farbe = null
export let gg_trg_LC_aktiviren = null
export let gg_trg_LC_aktiviren_text = null
export let gg_trg_LC_entfernen = null
export let gg_trg_LC_Timer_weg = null
export let gg_trg_Zoom_Einstellung_UND_HOLZ = null
export let gg_trg_Tipps_GER = null
export let gg_trg_Floating_Gold = null
export let gg_trg_Upgrades_Goldcounter = null
export let gg_trg_Rabatt_Tower = null
export let gg_trg_Info = null
export let gg_trg_Tausendertrenner = null
export let gg_trg_Minipet_Teleport = null
export let gg_trg_Bonusgegner = null
export let gg_trg_Verkauf = null
export let gg_trg_Egoist = null
export let gg_trg_TUI_Upgrades = null
export let gg_trg_Items_Drop_Kopieren = null
export let gg_trg_Itemwert = null
export let gg_trg_Ikea_Combo = null
export let gg_trg_Items_Entfernen = null
export let gg_trg_Items_Not_Buyable = null
export let gg_trg_Rabatt = null
export let gg_trg_G_camomileimbau = null
export let gg_trg_G_Neu = null
export let gg_trg_G_Neu_Tank = null
export let gg_trg_G_Abbruch = null
export let gg_trg_G_Refresh = null
export let gg_trg_G_Activate = null
export let gg_trg_Geld_fuer_Anabolika = null
export let gg_trg_F_Held_AutoAufstieg = null
export let gg_trg_F_Item_Upgrades = null
export let gg_trg_F_Autoblocker = null
export let gg_trg_F_Autoblocker_stoppt = null
export let gg_trg_F_Trainer = null
export let gg_trg_C_Tower_copy_Dialog = null
export let gg_trg_Tower_copy_Ja = null
export let gg_trg_Tower_copy_Nein = null
export let gg_trg_B_Creator = null
export let gg_trg_B_Destroyer = null
export let gg_trg_B_Activate = null
export let gg_trg_B_Darkness_AN = null
export let gg_trg_B_Darkness_AUS = null
export let gg_trg_B_Ladezustand_Anzeige = null
export let gg_trg_B_Anzeige_Refresh = null
export let gg_trg_Filialwert = null
export let gg_trg_P_Tausch = null
export let gg_trg_P_Autotransfer = null
export let gg_trg_W_Verbrauch = null
export let gg_trg_W_Keine_Doppelten = null
export let gg_trg_W_Begrenzung_auf_5 = null
export let gg_trg_W_Freezer = null
export let gg_trg_I_Item = null
export let gg_trg_I_Item_2 = null
export let gg_trg_Change_target = null
export let gg_trg_Aibo_und_Reactor_Dummys = null
export let gg_trg_Chuck_Norris_bonus = null
export let gg_trg_Kill_units = null
export let gg_trg_Cactuzz_Size_CHanging = null
export let gg_trg_Sheep_explode = null
export let gg_trg_El_Shadow = null
export let gg_trg_Death = null
export let gg_trg_Downgrade = null
export let gg_trg_A_Large_Supplier_autocast = null
export let gg_trg_A_Large_Supplier_autocast_2 = null
export let gg_trg_A_Large_Supplier = null
export let gg_trg_Bau = null
export let gg_trg_Add = null
export let gg_trg_Remove = null
export let gg_trg_Supply = null
export let gg_trg_Wassertanks = null
export let gg_trg_aktualisierung = null
export let gg_trg_aktualisierungtank = null
export let gg_trg_Bonus_Upgrade = null
export let gg_trg_Bonus_Ja = null
export let gg_trg_Bonus_Nein = null
export let gg_trg_Allspark = null
export let gg_trg_FirePanda = null
export let gg_trg_Autocast_TREX = null
export let gg_trg_Autocast_Lassie = null
export let gg_trg_Activate_Autocast_Aldi = null
export let gg_trg_Autocast_Cinemaxx = null
export let gg_trg_Autocast_Chain_Lightning = null
export let gg_trg_Autocast_Shockwave = null
export let gg_trg_Autocast_Thunder = null
export let gg_trg_Autocast_AirZap = null
export let gg_trg_Autocast_Ensnare = null
export let gg_trg_Autocast_Erotic = null
export let gg_trg_Autocast_slow = null
export let gg_trg_TP = null
export let gg_trg_allow = null
export let gg_trg_disallow = null
export let gg_trg_zoom = null
export let gg_trg_fuckoff_NC = null
export let gg_trg_ccol = null
export let gg_trg_give_Kopieren = null
export let gg_trg_give_all = null
export let gg_trg_autodeposit = null
export let gg_trg_birdeye = null
export let gg_trg_da = null
export let gg_trg_wa = null
export let gg_trg_wa_destroy_timer = null
export let gg_trg_sa = null
export let gg_trg_showboard = null
export let gg_trg_special = null
export let gg_trg_recreateboard = null
export let gg_trg_nosfx_ein = null
export let gg_trg_nosfx_aus = null
export let gg_trg_color_und_colorall = null
export let gg_trg_black_Kopieren = null
export let gg_trg_ghost_Kopieren = null
export let gg_trg_uncolor = null
export let gg_trg_code = null
export let gg_trg_code_end = null
export let gg_trg_Host = null
export let gg_trg_diff = null
export let gg_trg_SP1 = null
export let gg_trg_SP2 = null
export let gg_trg_SP3 = null
export let gg_trg_SP4 = null
export let gg_trg_SP5 = null
export let gg_trg_SP6 = null
export let gg_trg_SP7 = null
export let gg_trg_SP8 = null
export let gg_trg_SP9 = null
export let gg_trg_SP10 = null
export let gg_trg_SP11 = null
export let gg_trg_SP12 = null
export let gg_trg_SP13 = null
export let gg_trg_SP14 = null
export let gg_trg_SP15 = null
export let gg_trg_SP17 = null
export let gg_trg_SP18 = null
export let gg_trg_SP19 = null
export let gg_trg_SP20 = null
export let gg_trg_SP21 = null
export let gg_trg_SP22 = null
export let gg_trg_SP23 = null
export let gg_trg_SP24 = null
export let gg_trg_SP25 = null
export let gg_trg_SP27 = null
export let gg_trg_SP28 = null
export let gg_trg_SP29 = null
export let gg_trg_Stop = null
export let gg_trg_XP_Add_und_Test = null
export let gg_trg_Freischalten = null
export let gg_trg_Fixe_Tabellen = null
export let gg_trg_Variable_Tabellen = null
export let gg_trg_Variable_Tabellen_1k = null
export let gg_trg_SN_Encoder = null
export let gg_trg_Encoder_Game = null
export let gg_trg_Decoder_V2_Teil1 = null
export let gg_trg_Decoder_V3_Teil1 = null
export let gg_trg_Decoder_V5_Teil1 = null
export let gg_trg_Decoder_V5_Teil2 = null
export let gg_trg_Decoder_V6_Teil1 = null
export let gg_trg_Decoder_V6_Teil2 = null
export let gg_trg_Decoder_V6_Teil1_1k = null
export let gg_trg_Decoder_V6_Teil2_1k = null
export let gg_trg_Encoder = null
export let gg_trg_mp_hero = null
export let gg_trg_Startup_Oben_Links = null
export let gg_trg_Startup_Oben_Rechts = null
export let gg_trg_Startup_Mitte_Links = null
export let gg_trg_Startup_Mitte_Rechts = null
export let gg_trg_Startup_Unten_Links = null
export let gg_trg_Startup_Unten_Rechts = null
export let gg_trg_Normal_moving = null
export let gg_trg_Mitte_Links_Oben = null
export let gg_trg_Mitte_Links_Unten = null
export let gg_trg_Teiler_Links = null
export let gg_trg_Mitte_Links_MitteU = null
export let gg_trg_Mitte_Links_MitteD = null
export let gg_trg_Mitte_Links_Tele = null
export let gg_trg_Mitte_Rechts_Oben = null
export let gg_trg_Mitte_Rechts_Unten = null
export let gg_trg_Teiler_Rechts = null
export let gg_trg_Mitte_Rechts_MitteU = null
export let gg_trg_Mitte_Rechts_MitteD = null
export let gg_trg_Mitte_Rechts_Tele = null
export let gg_trg_Links_und_Rechts_zu_Mitte = null
export let gg_trg_M_zu_Ende = null
export let gg_trg_Ende = null
export let gg_trg_Entfernen = null
export let gg_trg_Kollison_AUS_Allgemein = null
export let gg_trg_Kollision_AN1 = null
export let gg_trg_Kollision_AN2 = null
export let gg_trg_Kollision_AN3 = null
export let gg_trg_Kollision_AN4 = null
export let gg_trg_Kollision_AN5 = null
export let gg_trg_Kollision_AN6 = null
export let gg_trg_Kollision_AN7 = null
export let gg_trg_Kollision_AN8 = null
export let gg_trg_Kollision_AN9 = null
export let gg_trg_Kollision_AN10 = null
export let gg_trg_Kollision_AN11 = null
export let gg_trg_D1 = null
export let gg_trg_D2 = null
export let gg_trg_D3 = null
export let gg_trg_D4 = null
export let gg_trg_Seite = null
export let gg_trg_Seite_2 = null
export let gg_trg_BRot = null
export let gg_trg_BBlau = null
export let gg_trg_BTeal = null
export let gg_trg_BLila = null
export let gg_trg_BGelb = null
export let gg_trg_BOrange = null
export let gg_trg_BGruen = null
export let gg_trg_BPink = null
export let gg_trg_BGrau = null
export let gg_trg_BHellblau = null
export let gg_trg_BDunkelgruen = null
export let gg_trg_Block_und_Stuck = null
export let gg_trg_Blink_NC = null
export let gg_trg_Blink_Berechnen = null
export let gg_trg_Kickchooser = null
export let gg_trg_KickExec = null
export let gg_trg_KickExecAbbruch = null
export let gg_trg_Spielmodus = null
export let gg_trg_Standard_Group = null
export let gg_trg_Standard_Line = null
export let gg_trg_Power = null
export let gg_trg_Kill = null
export let gg_trg_Auge_um_Auge = null
export let gg_trg_Massaker = null
export let gg_trg_Submodus = null
export let gg_trg_Submodus_ASchliessen = null
export let gg_trg_Geldteilen = null
export let gg_trg_Ohne_XP = null
export let gg_trg_Jede_Filiale_Einmal = null
export let gg_trg_Zufaellige_Filialen = null
export let gg_trg_Sandbox = null
export let gg_trg_Submodus_Beenden = null
export let gg_trg_Einstellung_und_Hinweise = null
export let gg_trg_Schwierigkeit = null
export let gg_trg_Sehr_Einfach = null
export let gg_trg_Einfach = null
export let gg_trg_Normal = null
export let gg_trg_Schwer = null
export let gg_trg_sehr_schwer = null
export let gg_trg_Impossible = null
export let gg_trg_MB_Setup = null
export let gg_trg_Icons = null
export let gg_trg_ReihenfolgeTemp = null
export let gg_trg_ReihenfolgeTotal = null
export let gg_trg_Kill_Counter = null
export let gg_trg_Bonus_kills = null
export let gg_trg_Killbalken = null
export let gg_trg_Timer = null
export let gg_trg_Lebensbalken = null
export let gg_trg_Punktzahl = null
export let gg_trg_LB_Laeuft = null
export let gg_trg_LB_Warte = null
export let gg_trg_Verlassen_Trigger = null
export let gg_trg_Menu_oeffnen = null
export let gg_trg_Leben = null
export let gg_trg_Leben_Text = null
export let gg_trg_Aufdecken = null
export let gg_trg_Aufdecken_Text = null
export let gg_trg_Winter = null
export let gg_trg_Winter_Text = null
export let gg_trg_Abbruch = null
export let gg_unit_h059_0009 = null
export let gg_unit_hdhw_0155 = nullexport function InitGlobals() {
let i = 0
	udg_Monster_Amount = 0
	udg_Lives = 40
	udg_NoLivesLost = true
	udg_Spielerzahl = 0
	i = 0
	while(true) {
	if(i > 20) break
		udg_colortext[i]= ""
		i = i + 1
	}
	udg_Lebensbalken = ""
	i = 0
	while(true) {
	if(i > 50) break
		udg_VariVari[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_SpielerMultiPlatz[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 20) break
		udg_auszeichnungen[i]= 1
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_Konto[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstBank[i]= false
		i = i + 1
	}
	udg_Lives_Lost_Tmp = 0
	i = 0
	while(true) {
	if(i > 15) break
		udg_Kills_Rangliste[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 15) break
		udg_Platzierung[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 15) break
		udg_Platzierung_Reverse[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 15) break
		udg_Towerzahl[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstKino[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 10) break
		udg_DiffCounter[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstObi[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstBeate[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 25) break
		udg_stopflags[i]= true
		i = i + 1
	}
	udg_Level_Run = true
	udg_handicap_pl12 = 80.00
	udg_balance_gold_total = 0
	i = 0
	while(true) {
	if(i > 12) break
		udg_ausz_egoist[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 15) break
		udg_Spendenkonto_gtotal[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_ausz_unentschl[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_ausz_banker[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_ausz_wette[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstHM[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstTUI[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstA0K[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 55) break
		udg_lp_tab[i]= 0
		i = i + 1
	}
	udg_aok_killcounter = 0
	udg_Lebensbalken_Counter = 0
	i = 0
	while(true) {
	if(i > 6) break
		udg_Items_Speicher[i]= null
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstIkea[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_TUI_Upgradegeld[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstPost[i]= false
		i = i + 1
	}
	udg_Modus_STD_G = true
	udg_Modus_STD_L = false
	udg_Modus_KILL_Menge = 0
	udg_creep_counter = 0
	udg_KillsTemp_Total = 0
	udg_Killbalken = ""
	udg_Killbalken_Counter = 0
	udg_Modus_MASSAKER = false
	udg_Modus_KILL222 = false
	udg_Kick = false
	udg_floating_displayTMP = ""
	udg_punkte_string = ""
	udg_punkte = 0
	udg_punkte_string_2 = ""
	udg_punkte_pruefstring = ""
	i = 0
	while(true) {
	if(i > 2) break
		udg_punkte_spielerzahl[i]= 0
		i = i + 1
	}
	udg_spiel_laeuft = false
	udg_spezial_typ_wahl = 0
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstAldi[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstMediaMarkt[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstTanteEmma[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstPorsche[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstAral[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstMcD[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstCopyShop[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstGarten[i]= false
		i = i + 1
	}
	udg_Modus_Auge = false
	udg_anabolika_geld = 0
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstFitness[i]= false
		i = i + 1
	}
	udg_goldstring = ""
	i = 0
	while(true) {
	if(i > 12) break
		udg_goldamount_pp[i]= 0
		i = i + 1
	}
	udg_time_total = ""
	i = 0
	while(true) {
	if(i > 3) break
		udg_timer_parts[i]= 0
		i = i + 1
	}
	udg_unit_switch_1 = 0
	udg_unit_switch_2 = 0
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp[i]= 0
		i = i + 1
	}
	udg_xp_diff_faktor = 1.00
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_spielerlevel[i]= 10
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 40) break
		udg_xp_scr1A[i]= ""
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 40) break
		udg_xp_scr2A[i]= ""
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_sn1[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_sn2[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_sn3[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_cp1[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_cp2[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_cp3[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_cp4[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_code[i]= ""
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_entered_code[i]= ""
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_decoded_1[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_decoded_2[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_decoded_4[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_decoded_3[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_cp5[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_decoded_5[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_spielerlevel_tmp[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_retry[i]= 0
		i = i + 1
	}
	udg_VariReal = 0
	i = 0
	while(true) {
	if(i > 12) break
		udg_gold_multi_ppl[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstBI[i]= false
		i = i + 1
	}
	udg_xp_keycode = 0
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_sn4_2[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 40) break
		udg_xp_scr3N[i]= ""
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 40) break
		udg_xp_scr1N1[i]= ""
		i = i + 1
	}
	udg_Modus_PWR_NEW = false
	udg_IstBoss = false
	udg_sound = true
	udg_Sub_Geldteilen = false
	udg_Sub_KXP = false
	i = 0
	while(true) {
	if(i > 40) break
		udg_xp_scr1N2[i]= ""
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 40) break
		udg_xp_scr2N_KEY[i]= ""
		i = i + 1
	}
	udg_Sub_UNIQUE = false
	i = 0
	while(true) {
	if(i > 12) break
		udg_Typ_Std_pp[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_Typ_Pro_pp[i]= 0
		i = i + 1
	}
	udg_geldteilen = 0
	i = 0
	while(true) {
	if(i > 20) break
		udg_KillsTemp[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 20) break
		udg_KillsTotal[i]= 0
		i = i + 1
	}
	udg_id_gezeigt = false
	udg_version = ""
	udg_Sub_AR = false
	i = 0
	while(true) {
	if(i > 24) break
		udg_xp_o_fake2[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 24) break
		udg_xp_o3[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_sn2_2[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_autodeposit[i]= false
		i = i + 1
	}
	udg_floating_counter_BI = 1
	udg_floating_displayTMP_BI = ""
	i = 0
	while(true) {
	if(i > 2000) break
		udg_floating_unit_BI[i]= null
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_auswahl_getroffen[i]= false
		i = i + 1
	}
	udg_aktuelles_level = 1
	i = 0
	while(true) {
	if(i > 11) break
		udg_Gesamtwert[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_hauptgebaeude[i]= null
		i = i + 1
	}
	udg_Monstertype_Selector = 1
	udg_Diff_CorrMaster = 1.00
	i = 0
	while(true) {
	if(i > 12) break
		udg_player_region[i]= null
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_color_ppl_red[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_color_ppl_blue[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_color_ppl_green[i]= 0
		i = i + 1
	}
	udg_Gold_Amount = 185
	udg_typ_air = false
	udg_typ_boss = false
	udg_typ_normal = false
	udg_Diff_Autobalance = 1.00
	udg_last_lptab = 0
	udg_diff_min = 0.75
	udg_diff_max = 999.00
	i = 0
	while(true) {
	if(i > 5) break
		udg_Diff_Autobalance_Speicher[i]= 1.00
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_gebiet_leer[i]= false
		i = i + 1
	}
	udg_penalty = 0
	udg_penalty_temp = 0
	udg_defeat = false
	i = 0
	while(true) {
	if(i > 12) break
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_camdistance[i]= 2500.00
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_teampunkte[i]= 0
		i = i + 1
	}
	udg_spiel_ID = ""
	udg_Lifes_Left = 0
	udg_Lifes_Total = 0
	udg_punkteanpassung = 0
	i = 0
	while(true) {
	if(i > 1) break
		udg_filialnamen_ger[i]= ""
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_filialnamen_ger_PRO[i]= ""
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_spez_ger[i]= ""
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_xp_test[i]= 0
		i = i + 1
	}
	udg_alarm = 0
	i = 0
	while(true) {
	if(i > 1) break
		udg_fever[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_LC[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_birdeye[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 10) break
		udg_VariVari2[i]= 0
		i = i + 1
	}
	udg_nosfx = false
	i = 0
	while(true) {
	if(i > 1) break
		udg_Spezialtyp[i]= false
		i = i + 1
	}
	udg_floating_gold = 0
	i = 0
	while(true) {
	if(i > 1) break
		udg_Upgradegeld[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_worth_flag[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_rabatt[i]= 0
		i = i + 1
	}
	udg_temp_string_1 = ""
	i = 0
	while(true) {
	if(i > 1) break
		udg_interpunktieren[i]= ""
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_Drones[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_VariVari_SS[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_IstWeap[i]= false
		i = i + 1
	}
	udg_enter_debug = false
	udg_tbool = false
	udg_tempint = 0
	udg_noobie_mode = false
	udg_Sub_NoSpecial = false
	udg_vari_string = ""
	udg_vari_bool = false
	udg_Lifes_Lost = 0
	udg_Lifes_Lost_Tmp = 0
	i = 0
	while(true) {
	if(i > 12) break
		udg_creeps_k_m[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_KillsTotal_Power[i]= 0
		i = i + 1
	}
	udg_Sub_Sandbox = false
	i = 0
	while(true) {
	if(i > 1) break
		udg_leftround[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_allow[i]= true
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_ausz_bau[i]= 0
		i = i + 1
	}
	udg_DiffSmart = 0
	udg_DiffCounterSmart = 0
	udg_diff_add = 0.02
	i = 0
	while(true) {
	if(i > 12) break
		udg_ausz_autobalance[i]= 100
		i = i + 1
	}
	udg_diff_adjust = 0
	i = 0
	while(true) {
	if(i > 1) break
		udg_Playerbusy[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_ausz_leben[i]= 0
		i = i + 1
	}
	udg_ausz_bank = 0
	udg_punktemultiplikator = 0
	udg_PlayerPunkteMultiplikator = 0
	i = 0
	while(true) {
	if(i > 1) break
		udg_securtiy_decoded[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_clear[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_cp6[i]= 0
		i = i + 1
	}
	udg_tempint3 = 0
	udg_temp_string_3 = ""
	i = 0
	while(true) {
	if(i > 1) break
		udg_xp_flag[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_xp_decoded_6[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_xp_scrMP[i]= ""
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_ueberweisung_laeuft[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		i = i + 1
	}
	udg_vari_string2 = ""
	i = 0
	while(true) {
	if(i > 12) break
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_RamboSouls[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_MyMulti[i]= 1.00
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_IstEbay[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_CanSell[i]= true
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_RundenGold[i]= 0
		i = i + 1
	}
	udg_RestDiff = 0
	udg_LPtoAdd = 0
	udg_anabolik = false
	i = 0
	while(true) {
	if(i > 12) break
		i = i + 1
	}
	udg_goldBonusRunde = 0
	i = 0
	while(true) {
	if(i > 11) break
		udg_ObiKills[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_VariReal2[i]= 0
		i = i + 1
	}
	udg_treal = 0
	udg_Maxlife = 0
	i = 0
	while(true) {
	if(i > 1) break
		udg_IstSpiel[i]= false
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 11) break
		udg_LeaverMoney[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 1) break
		udg_xp_decoded_7[i]= 0
		i = i + 1
	}
	i = 0
	while(true) {
	if(i > 12) break
		udg_xp_encoded_cp7[i]= 0
		i = i + 1
	}
	udg_GradEinheit = 0
	udg_tmp = 0
	udg_tmpBool = false
	udg_tmp2 = 0
	udg_TransferRate = 0
	i = 0
	while(true) {
	if(i > 1) break
		udg_Transferd[i]= 0
		i = i + 1
	}
	udg_Verbunden = 0
	udg_tmp_Kopieren = 0
	udg_tmp2_Kopieren = 0
	udg_TransferRate_Kopieren = 0
	i = 0
	while(true) {
	if(i > 1) break
		udg_Transferd_Kopieren[i]= 0
		i = i + 1
	}
	udg_Manadiffer = 0
	i = 0
	while(true) {
	if(i > 11) break
		udg_MPja[i]= false
		i = i + 1
	}
	udg_Wassertankrest = 0
}export function Trig_Fixe_Tabellen_Actions() {
	udg_temp_string_3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	bj_forLoopAIndex = 1
	bj_forLoopAIndexEnd = StringLength(udg_temp_string_3)
	while(true) {
	if(bj_forLoopAIndex > bj_forLoopAIndexEnd) break
		udg_xp_scr1A[bj_forLoopAIndex]= SubStringBJ(udg_temp_string_3, bj_forLoopAIndex, bj_forLoopAIndex)
		bj_forLoopAIndex = bj_forLoopAIndex + 1
	}
	udg_temp_string_3 = "YPNRUH6E0ZB4Q-X9ALIO35TWSV2J_MKGD78C"
	bj_forLoopAIndex = 1
	bj_forLoopAIndexEnd = StringLength(udg_temp_string_3)
	while(true) {
	if(bj_forLoopAIndex > bj_forLoopAIndexEnd) break
		udg_xp_scr2A[bj_forLoopAIndex]= SubStringBJ(udg_temp_string_3, bj_forLoopAIndex, bj_forLoopAIndex)
		bj_forLoopAIndex = bj_forLoopAIndex + 1
	}
	udg_temp_string_3 = "%EB4Q-XRJK0ZSD7U9AL8W_CO35TMYPIGH6V2N$)(+][*"
	bj_forLoopAIndex = 1
	bj_forLoopAIndexEnd = StringLength(udg_temp_string_3)
	while(true) {
	if(bj_forLoopAIndex > bj_forLoopAIndexEnd) break
		udg_xp_scr2N_KEY[bj_forLoopAIndex]= SubStringBJ(udg_temp_string_3, bj_forLoopAIndex, bj_forLoopAIndex)
		bj_forLoopAIndex = bj_forLoopAIndex + 1
	}
	udg_temp_string_3 = "WYGZQALBTPEFHVJDCMXSNORUKI"
	bj_forLoopAIndex = 1
	bj_forLoopAIndexEnd = StringLength(udg_temp_string_3)
	while(true) {
	if(bj_forLoopAIndex > bj_forLoopAIndexEnd) break
		udg_xp_scr1N1[bj_forLoopAIndex]= SubStringBJ(udg_temp_string_3, bj_forLoopAIndex, bj_forLoopAIndex)
		bj_forLoopAIndex = bj_forLoopAIndex + 1
	}
	udg_temp_string_3 = "0_:-135962!().847[]"
	bj_forLoopAIndex = 1
	bj_forLoopAIndexEnd = StringLength(udg_temp_string_3)
	while(true) {
	if(bj_forLoopAIndex > bj_forLoopAIndexEnd) break
		udg_xp_scr1N2[bj_forLoopAIndex]= SubStringBJ(udg_temp_string_3, bj_forLoopAIndex, bj_forLoopAIndex)
		bj_forLoopAIndex = bj_forLoopAIndex + 1
	}
	udg_temp_string_3 = "L6MNO7PQ4RST5UVWXYZAB0823CDEFG9HIJK1_"
	bj_forLoopAIndex = 1
	bj_forLoopAIndexEnd = StringLength(udg_temp_string_3)
	while(true) {
	if(bj_forLoopAIndex > bj_forLoopAIndexEnd) break
		udg_xp_scrMP[bj_forLoopAIndex]= SubStringBJ(udg_temp_string_3, bj_forLoopAIndex, bj_forLoopAIndex)
		bj_forLoopAIndex = bj_forLoopAIndex + 1
	}
}export function Trig_Encoder_Func001A() {
	if(Trig_Encoder_Func001Func001C()) {
		udg_VariVari2[7]= GetConvertedPlayerId(GetEnumPlayer())
		if(Trig_Encoder_Func001Func001Func026C()) {
			udg_xp_encoded_sn1[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[7]))]= 0
		} else {
		}
		if(Trig_Encoder_Func001Func001Func028C()) {
			udg_xp_clear[1]= 0
			udg_xp_clear[2]= 0
			udg_xp_clear[3]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[7]]), 1, 1))
			udg_xp_clear[4]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[7]]), 2, 2))
		} else {
		}
		if(Trig_Encoder_Func001Func001Func029C()) {
			udg_xp_clear[1]= 0
			udg_xp_clear[2]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[7]]), 1, 1))
			udg_xp_clear[3]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[7]]), 2, 2))
			udg_xp_clear[4]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[7]]), 3, 3))
		} else {
		}
		if(Trig_Encoder_Func001Func001Func030C()) {
			udg_xp_clear[1]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[7]]), 1, 1))
			udg_xp_clear[2]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[7]]), 2, 2))
			udg_xp_clear[3]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[7]]), 3, 3))
			udg_xp_clear[4]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[7]]), 4, 4))
		} else {
		}
		udg_xp_encoded_cp1[udg_VariVari2[7]]=((udg_xp_clear[1]* 2)+(udg_xp_clear[2]+(udg_xp_clear[3]+(udg_xp_clear[4]+ 0))))
		udg_xp_encoded_cp2[udg_VariVari2[7]]=(StringLength(GetPlayerName(ConvertedPlayer(udg_VariVari2[7])))+ udg_xp_clear[3])
		udg_xp_encoded_cp3[udg_VariVari2[7]]=(udg_xp_encoded_sn2_2[udg_VariVari2[7]]+(udg_xp_clear[2]+ 1))
		udg_xp_encoded_cp4[udg_VariVari2[7]]=(udg_xp_encoded_sn4_2[udg_VariVari2[7]]+(udg_xp_clear[1]+ 2))
		if(Trig_Encoder_Func001Func001Func036C()) {
			udg_xp_encoded_cp5[udg_VariVari2[7]]=(udg_xp_clear[4]+ 25)
		} else {
			udg_xp_encoded_cp5[udg_VariVari2[7]]=(udg_xp_clear[4]+ 26)
		}
		if(Trig_Encoder_Func001Func001Func037C()) {
			udg_xp_encoded_cp6[udg_VariVari2[7]]= 1
		} else {
			udg_xp_encoded_cp6[udg_VariVari2[7]]=((udg_xp_spielerlevel[udg_VariVari2[7]]/ 350)+(udg_xp_clear[2]+ 0))
		}
		if(Trig_Encoder_Func001Func001Func039C()) {
			udg_xp_encoded_cp1[udg_VariVari2[7]]=(udg_xp_encoded_cp1[udg_VariVari2[7]]-1)
		} else {
		}
		udg_xp_keycode =(udg_xp_encoded_cp1[udg_VariVari2[7]]+ 0)
		Trig_Variable_Tabellen_Actions()
		udg_xp_encoded_code[udg_VariVari2[7]]= ""
		udg_xp_encoded_code[udg_VariVari2[7]]=(udg_xp_scr2N_KEY[udg_xp_encoded_cp1[udg_VariVari2[7]]]+(udg_xp_scr3N[udg_xp_encoded_cp2[udg_VariVari2[7]]]+(udg_xp_scr3N[udg_xp_encoded_cp3[udg_VariVari2[7]]]+(udg_xp_scr3N[udg_xp_encoded_cp4[udg_VariVari2[7]]]+(udg_xp_scr3N[udg_xp_encoded_cp5[udg_VariVari2[7]]]+ udg_xp_scr3N[udg_xp_encoded_cp6[udg_VariVari2[7]]])))))
	} else {
		udg_VariVari2[10]= GetConvertedPlayerId(GetEnumPlayer())
		udg_xp_spielerlevel[udg_VariVari2[10]]=(udg_xp_spielerlevel[udg_VariVari2[10]]-9003)
		if(Trig_Encoder_Func001Func001Func003C()) {
			udg_xp_encoded_sn1[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[10]))]= 0
		} else {
		}
		if(Trig_Encoder_Func001Func001Func005C()) {
			udg_xp_clear[1]= 0
			udg_xp_clear[2]= 0
			udg_xp_clear[3]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[10]]), 1, 1))
			udg_xp_clear[4]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[10]]), 2, 2))
		} else {
		}
		if(Trig_Encoder_Func001Func001Func006C()) {
			udg_xp_clear[1]= 0
			udg_xp_clear[2]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[10]]), 1, 1))
			udg_xp_clear[3]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[10]]), 2, 2))
			udg_xp_clear[4]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[10]]), 3, 3))
		} else {
		}
		if(Trig_Encoder_Func001Func001Func007C()) {
			udg_xp_clear[1]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[10]]), 1, 1))
			udg_xp_clear[2]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[10]]), 2, 2))
			udg_xp_clear[3]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[10]]), 3, 3))
			udg_xp_clear[4]= S2I(SubStringBJ(I2S(udg_xp_spielerlevel[udg_VariVari2[10]]), 4, 4))
		} else {
		}
		udg_xp_encoded_cp1[udg_VariVari2[10]]=((udg_xp_clear[1]* 2)+(udg_xp_clear[2]+(udg_xp_clear[3]+(udg_xp_clear[4]+ 0))))
		udg_xp_encoded_cp2[udg_VariVari2[10]]=(StringLength(GetPlayerName(ConvertedPlayer(udg_VariVari2[10])))+ udg_xp_clear[3])
		udg_xp_encoded_cp3[udg_VariVari2[10]]=(udg_xp_encoded_sn2_2[udg_VariVari2[10]]+(udg_xp_clear[2]+ 1))
		udg_xp_encoded_cp4[udg_VariVari2[10]]=(udg_xp_encoded_sn4_2[udg_VariVari2[10]]+(udg_xp_clear[1]+ 2))
		udg_xp_encoded_cp7[udg_VariVari2[10]]=(udg_xp_encoded_sn4_2[udg_VariVari2[10]]+(udg_xp_clear[1]+ 1))
		if(Trig_Encoder_Func001Func001Func014C()) {
			udg_xp_encoded_cp5[udg_VariVari2[10]]=(udg_xp_clear[4]+ 25)
		} else {
			udg_xp_encoded_cp5[udg_VariVari2[10]]=(udg_xp_clear[4]+ 26)
		}
		if(Trig_Encoder_Func001Func001Func015C()) {
			udg_xp_encoded_cp5[udg_VariVari2[10]]=(udg_xp_clear[4]+ 24)
		} else {
			DoNothing()
		}
		if(Trig_Encoder_Func001Func001Func016C()) {
			udg_xp_encoded_cp6[udg_VariVari2[10]]= 1
		} else {
			udg_xp_encoded_cp6[udg_VariVari2[10]]=((udg_xp_spielerlevel[udg_VariVari2[10]]/ 350)+(udg_xp_clear[2]+ 0))
		}
		if(Trig_Encoder_Func001Func001Func018C()) {
			udg_xp_encoded_cp1[udg_VariVari2[10]]=(udg_xp_encoded_cp1[udg_VariVari2[10]]-1)
		} else {
		}
		udg_xp_keycode =(udg_xp_encoded_cp1[udg_VariVari2[10]]+ 0)
		Trig_Variable_Tabellen_1k_Actions()
		udg_xp_encoded_code[udg_VariVari2[10]]= ""
		udg_xp_encoded_code[udg_VariVari2[10]]=(udg_xp_scr2N_KEY[udg_xp_encoded_cp1[udg_VariVari2[10]]]+(udg_xp_scr3N[udg_xp_encoded_cp2[udg_VariVari2[10]]]+(udg_xp_scr3N[udg_xp_encoded_cp3[udg_VariVari2[10]]]+(udg_xp_scr3N[udg_xp_encoded_cp4[udg_VariVari2[10]]]+(udg_xp_scr3N[udg_xp_encoded_cp5[udg_VariVari2[10]]]+(udg_xp_scr3N[udg_xp_encoded_cp6[udg_VariVari2[10]]]+ udg_xp_scr3N[udg_xp_encoded_cp7[udg_VariVari2[10]]]))))))
		udg_xp_spielerlevel[udg_VariVari2[10]]=(udg_xp_spielerlevel[udg_VariVari2[10]]+ 9003)
	}
}export function Trig_Encoder_Game_Actions() {
	Trig_Encoder_Game_Func001A()
}export function Trig_SN_Encoder_Actions() {
	Trig_SN_Encoder_Func002A()
	Trig_SN_Encoder_Func004A()
}export function Trig_Encoder_Func001Func001C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]< 9999)) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func026C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[7]))]>(udg_xp_test[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[7]))]+ 250))) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func028C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[7]))]<= 99)) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func029C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[7]))]> 99)) {
		return false
	}
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[7]))]<= 999)) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func030C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[7]))]> 999)) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func036C() {
	if(!(udg_xp_spielerlevel[udg_VariVari2[7]]> 8999)) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func037C() {
	if(!(udg_xp_spielerlevel[udg_VariVari2[7]]< 100)) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func039C() {
	if(!((udg_xp_test[udg_VariVari2[7]]+ 250)< udg_xp_spielerlevel[udg_VariVari2[7]])) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Actions() {
	if(Trig_Variable_Tabellen_Func002C()) {
		udg_temp_string_3 = "X9ALIO35TWSV2J6_MKG$%D78CYPNRUHE0ZB4Q-"
	} else {
	}
	if(Trig_Variable_Tabellen_Func003C()) {
		udg_temp_string_3 = "0ZB4Q-H5WTSV2J6E_MKGDX9ALIO3$%78CYPNRU"
	} else {
	}
	if(Trig_Variable_Tabellen_Func004C()) {
		udg_temp_string_3 = "TSV2J6E0$%W_MKGD78CYPNRUZB4Q-HX9ALIO35"
	} else {
	}
	if(Trig_Variable_Tabellen_Func005C()) {
		udg_temp_string_3 = "QMKGD78CYHX9ALIO35WPNRU-_$%TSV2J6E0ZB4"
	} else {
	}
	if(Trig_Variable_Tabellen_Func006C()) {
		udg_temp_string_3 = "NRU-HX9ALIO35W_TSV2J6EMK$%GD78CYP0ZB4Q"
	} else {
	}
	if(Trig_Variable_Tabellen_Func007C()) {
		udg_temp_string_3 = "PNRUTSV2J6E0Z$%B4QMKGD78CY-HX9ALIO35W_"
	} else {
	}
	if(Trig_Variable_Tabellen_Func008C()) {
		udg_temp_string_3 = "35W_PNRU-HX9SV2J6E0ZB4QMKGD78CYALIOT$%"
	} else {
	}
	if(Trig_Variable_Tabellen_Func009C()) {
		udg_temp_string_3 = "$%9ALIOTSV2J6E0HXZB4QMKGD78CY35W_PNRU-"
	} else {
	}
	if(Trig_Variable_Tabellen_Func010C()) {
		udg_temp_string_3 = "6RU-9ALIOTSV2JHXZB4QMKG$%D78CYE035W_PN"
	} else {
	}
	if(Trig_Variable_Tabellen_Func011C()) {
		udg_temp_string_3 = "8CYPNRU9ALIO35TWS$%V2J6E0ZB4Q-HX_MKGD7"
	} else {
	}
	if(Trig_Variable_Tabellen_Func013C()) {
		udg_temp_string_3 = "HX_MKGD79ALI8CYP$%NRUOE0ZB4Q-35TWSV2J6"
	} else {
	}
	if(Trig_Variable_Tabellen_Func014C()) {
		udg_temp_string_3 = "YPN$%RUO3GD79ALI8CWSV2J6E0ZB4Q-5THX_MK"
	} else {
	}
	if(Trig_Variable_Tabellen_Func015C()) {
		udg_temp_string_3 = "GD79ANRUO35THX_MKSV2J6E0ZB4Q-LI$%8CWYP"
	} else {
	}
	if(Trig_Variable_Tabellen_Func016C()) {
		udg_temp_string_3 = "79A$%LI8CWYPNRUO35THX_J6E0ZB4Q-GDMKSV2"
	} else {
	}
	if(Trig_Variable_Tabellen_Func017C()) {
		udg_temp_string_3 = "O35THX79ALI_MKSV2J6E$%0ZB4Q-GD8CWYPNRU"
	} else {
	}
	if(Trig_Variable_Tabellen_Func018C()) {
		udg_temp_string_3 = "YPNRUO35THX79A8CWLI_MKSVQ-GD2J6E$%0ZB4"
	} else {
	}
	if(Trig_Variable_Tabellen_Func019C()) {
		udg_temp_string_3 = "2J6E0ZB4Q-YPNRUO3GD5THX79A8CWLI_MK$%SV"
	} else {
	}
	if(Trig_Variable_Tabellen_Func020C()) {
		udg_temp_string_3 = "HX79A8CWLI5T_MKSV-YPNRUO3GD2J6E0ZB4$%Q"
	} else {
	}
	if(Trig_Variable_Tabellen_Func021C()) {
		udg_temp_string_3 = "9A8$%CWHX7LI5B4Q-YPNRUO3GDT_MKSV2J6E0Z"
	} else {
	}
	if(Trig_Variable_Tabellen_Func022C()) {
		udg_temp_string_3 = "KSV2J6E0ZB4Q_M-YPNRUO3GD9A8C$%WHX7LI5T"
	} else {
	}
	if(Trig_Variable_Tabellen_Func024C()) {
		udg_temp_string_3 = "J6E0ZB$%4Q9A8CWX7LI5T_M-YPNRUO3GDHKSV2"
	} else {
	}
	if(Trig_Variable_Tabellen_Func025C()) {
		udg_temp_string_3 = "9A8CWHK$%SV2X7LIUO3GD5T_MJ6E0ZB4Q-YPNR"
	} else {
	}
	if(Trig_Variable_Tabellen_Func026C()) {
		udg_temp_string_3 = "X7LI5T9A8V2_MJ6E0ZB4Q-YPNRUO3GD$%CWHKS"
	} else {
	}
	if(Trig_Variable_Tabellen_Func027C()) {
		udg_temp_string_3 = "$%8CWHKSV2_MJ6E0ZBI5T9AYPNRUO3GD4Q-X7L"
	} else {
	}
	if(Trig_Variable_Tabellen_Func028C()) {
		udg_temp_string_3 = "MJ6E0ZB4$%Q-XW8CHKSV2_7LI5T9AUO3GDYPNR"
	} else {
	}
	if(Trig_Variable_Tabellen_Func029C()) {
		udg_temp_string_3 = "ZB4Q-XW8C$%HKLI5T9AYPNRUO3GDSV2MJ6E0_7"
	} else {
	}
	if(Trig_Variable_Tabellen_Func030C()) {
		udg_temp_string_3 = "KSV2W8CHLI5T9AYPNRUO3GDMJ6E0_7ZB4$%Q-X"
	} else {
	}
	if(Trig_Variable_Tabellen_Func031C()) {
		udg_temp_string_3 = "MJ6E0_7ZB$%4Q-XKSV2W8CHNRUO3GDLI5T9AYP"
	} else {
	}
	if(Trig_Variable_Tabellen_Func032C()) {
		udg_temp_string_3 = "Q-XKSV2W8CHLI5T9AYPNZB4O3GDRUMJ6$%E0_7"
	} else {
	}
	if(Trig_Variable_Tabellen_Func033C()) {
		udg_temp_string_3 = "8$%CHLI5T9AYPNRUMQ-XKSV2WE0_7ZB4O3GDJ6"
	} else {
	}
	if(Trig_Variable_Tabellen_Func035C()) {
		udg_temp_string_3 = "T9AYPNRUMQ8CWJ6E0_7$%ZB4O3GDHLI5-XKSV2"
	} else {
	}
	if(Trig_Variable_Tabellen_Func036C()) {
		udg_temp_string_3 = "K$%SV2WJ6E0_7ZB4O3GDT9AYPNRUMQ8CHLI5-X"
	} else {
	}
	if(Trig_Variable_Tabellen_Func037C()) {
		udg_temp_string_3 = "_KSV2WJ6E07ZB4Q8CH$%LI5-XO3GDT9AYPNRUM"
	} else {
	}
	if(Trig_Variable_Tabellen_Func038C()) {
		udg_temp_string_3 = "E07ZB4O$%3GDT9A_KSV2MQ8CHLI5-XWJ6YPNRU"
	} else {
	}
	if(Trig_Variable_Tabellen_Func039C()) {
		udg_temp_string_3 = "A_KSV2WJ6NRUMQ8CHLI5-XYE0$%7ZB4O3GDT9P"
	} else {
	}
	if(Trig_Variable_Tabellen_Func040C()) {
		udg_temp_string_3 = "DT$%9PNRUMQ8CHLI5-XWJ6YEA_KSV207ZB4O3G"
	} else {
	}
	if(Trig_Variable_Tabellen_Func041C()) {
		udg_temp_string_3 = "PN83GCT$J6DRUMQYEA_KB4O%9HLI5-SV207ZXW"
	} else {
	}
	if(Trig_Variable_Tabellen_Func042C()) {
		udg_temp_string_3 = "J6YEA_KPZB4LI5-XWOUMDHSV207%9T$NR3GQ8C"
	} else {
	}
	if(Trig_Variable_Tabellen_Func043C()) {
		udg_temp_string_3 = "WOU7%9T$NR3GQ8CJ6YEMDHSV20A_KPZB4LI5-X"
	} else {
	}
	if(Trig_Variable_Tabellen_Func044C()) {
		udg_temp_string_3 = "EMKPZB4LI5-XWOU7%9T$DHSV20A_NR3GQ8CJ6Y"
	} else {
	}
	if(Trig_Variable_Tabellen_Func045C()) {
		udg_temp_string_3 = "G5-XWOHSV20AQPZB4LI_8CJ6YNEMKR3U7%9T$D"
	} else {
	}
	if(Trig_Variable_Tabellen_Func046C()) {
		udg_temp_string_3 = "7%9T$DHSVGQL28CJ6YEMKPZB40A_NR3I5-XWOU"
	} else {
	}
	if(Trig_Variable_Tabellen_Func047C()) {
		udg_temp_string_3 = "XH40A_N283I5-CJ6YE%9T$DWMKPZBOU7VGQLSR"
	} else {
	}
	if(Trig_Variable_Tabellen_Func048C()) {
		udg_temp_string_3 = "0A9TMN$BDW2CJ6YE%8KPXH4_GQLS3OU7VIZ5-R"
	} else {
	}
	if(Trig_Variable_Tabellen_Func049C()) {
		udg_temp_string_3 = "7ZBXW6T9HJ0ARUYE$%SVPN4OL_2MQ8CK5-I3GD"
	} else {
	}
	bj_forLoopAIndex = 1
	bj_forLoopAIndexEnd = StringLength(udg_temp_string_3)
	while(true) {
	if(bj_forLoopAIndex > bj_forLoopAIndexEnd) break
		udg_xp_scr3N[bj_forLoopAIndex]= SubStringBJ(udg_temp_string_3, bj_forLoopAIndex, bj_forLoopAIndex)
		bj_forLoopAIndex = bj_forLoopAIndex + 1
	}
}export function Trig_Encoder_Func001Func001Func003C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[10]))]>(udg_xp_test[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[10]))]+ 250))) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func005C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[10]))]<= 99)) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func006C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[10]))]> 99)) {
		return false
	}
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[10]))]<= 999)) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func007C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(ConvertedPlayer(udg_VariVari2[10]))]> 999)) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func014C() {
	if(!(udg_xp_spielerlevel[udg_VariVari2[10]]> 8999)) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func015C() {
	if(!(StringLength(udg_xp_entered_code[udg_VariVari2[10]])< 5)) {
		return false
	}
	return true
}export function DoNothing() {
}export function Trig_Encoder_Func001Func001Func016C() {
	if(!(udg_xp_spielerlevel[udg_VariVari2[10]]< 100)) {
		return false
	}
	return true
}export function Trig_Encoder_Func001Func001Func018C() {
	if(!((udg_xp_test[udg_VariVari2[10]]+ 250)< udg_xp_spielerlevel[udg_VariVari2[10]])) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Actions() {
	if(Trig_Variable_Tabellen_1k_Func002C()) {
		udg_temp_string_3 = "0ZBLIO3$%78CYPNRU4Q-H5WTSV2J6E_MKGDX9A"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func003C()) {
		udg_temp_string_3 = "4Q-HX9ALIO35TSV2J6E0$%W_MKGD78CYPNRUZB"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func004C()) {
		udg_temp_string_3 = "ZWIMDQON3J7F4XTKGVP2L0AH65BE9U%YR$CS18"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func005C()) {
		udg_temp_string_3 = "V921ALQ7$FZR4TIODNW8U%P06CKH5YGMXBSEJ3"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func006C()) {
		udg_temp_string_3 = "6DIR49%$UQL2ZX3O5SYKWNVMBATPFJ1GH80C7E"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func007C()) {
		udg_temp_string_3 = "NRU-HX9ALIO35W_TSV2J6EMK$%GD78CYP0ZB4Q"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func008C()) {
		udg_temp_string_3 = "PNRUTSV2J69ALIO35W_E0Z$%B4QMKGD78CY-HX"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func009C()) {
		udg_temp_string_3 = "$%9ALIOTSV2J6E0HXZB4QMKGD78CY35W_PNRU-"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func010C()) {
		udg_temp_string_3 = "6RU-9ALIOTSV2JHYE035W_PNXZB4QMKG$%D78C"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func011C()) {
		udg_temp_string_3 = "HX_MKGD79ALI8CYP$%NRUOE0ZB4Q-35TWSV2J6"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func013C()) {
		udg_temp_string_3 = "8CYPNRU9ALIO35TWS$%V2J6E0ZB4Q-HX_MKGD7"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func014C()) {
		udg_temp_string_3 = "PWL5HRGVZDU0$QY8MTSJ9B4NFCE21A%37XK6IO"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func015C()) {
		udg_temp_string_3 = "YPN$%RUO3GD79ALI8CWSV2J6E0ZB4Q-5THX_MK"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func016C()) {
		udg_temp_string_3 = "2J6E0ZB4Q-YPNRUO3GD5THX79A8CWLI_MK$%SV"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func017C()) {
		udg_temp_string_3 = "YPNRUO35THX79A8CWLI_MKSVQ-GD2J6E$%0ZB4"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func018C()) {
		udg_temp_string_3 = "79A$%LI8CWYPNRUO35THX_J6E0ZB4Q-GDMKSV2"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func019C()) {
		udg_temp_string_3 = "O35THX79ALI_MKSV2J6E$%0ZB4Q-GD8CWYPNRU"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func020C()) {
		udg_temp_string_3 = "$PHM0A6IOQDB9CL7R%4X3ZK1STFEV5JUGWYN82"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func021C()) {
		udg_temp_string_3 = "9A8CWHK$%S-YPNRV2X7LIUO3GD5T_MJ6E0ZB4Q"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func022C()) {
		udg_temp_string_3 = "HX79A8CWLI5T_MKSV-YPNRUO3GD2J6E0ZB4$%Q"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func024C()) {
		udg_temp_string_3 = "9A8$%CWHX7LI5B4Q-YPNRUO3GDT_MKSV2J6E0Z"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func025C()) {
		udg_temp_string_3 = "J6E0ZB$%4Q9A8CWX7LI5T_M-YPNRUO3GDHKSV2"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func026C()) {
		udg_temp_string_3 = "0B592DSGHKCA31PNI$U6XZMOQ%4LRVJ8TEYWF7"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func027C()) {
		udg_temp_string_3 = "YPNRUO3GD$%CWHKSX7LI5T9A8V2_MJ6E0ZB4Q-"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func028C()) {
		udg_temp_string_3 = "XW8CHKSV2_7LI5T9AUO3GDYPNRMJ6E0ZB4$%Q-"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func029C()) {
		udg_temp_string_3 = "KSV2W8CHLI5T9AYPNRUO3GDMJ6E0_7ZB4$%Q-X"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func030C()) {
		udg_temp_string_3 = "3CYMR$Z7EK1PNT68JOLQ%B409XHVG2IASWU5DF"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func031C()) {
		udg_temp_string_3 = "AJ9ZDQSCVY3R28W5IU%4TM06GLNOKP7$EBF1XH"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func032C()) {
		udg_temp_string_3 = "_KSV2WJ6E07ZB4Q8CH$%LI5-XO3GDT9AYPNRUM"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func033C()) {
		udg_temp_string_3 = "K$%SV2WJ6E0_7ZB4O3GDT9APNRUMQ8CHLI5-XY"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func035C()) {
		udg_temp_string_3 = "8$%CHLI5T9AYPNRUMQ-XKSV2WE0_7ZB4O3GDJ6"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func036C()) {
		udg_temp_string_3 = "T9AYPNRUMQ8CWJ6E0_7$%ZB4O3GDHLI5-XKSV2"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func037C()) {
		udg_temp_string_3 = "E07ZB4O$%3GDT9A_KSV2MQ8CHLI5-XWJ6YPNRU"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func038C()) {
		udg_temp_string_3 = "Q-XKSV2WRUMJ6$%E0_78CHLI5T9AYPNZB4O3GD"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func039C()) {
		udg_temp_string_3 = "DT$%9PNRUMQ8CHLI5-XWJ6YEA_KSV207ZB4O3G"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func040C()) {
		udg_temp_string_3 = "DRU3XIWQGF%14KC$PZ7YJTS0N69MLEBVO5A8H2"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func041C()) {
		udg_temp_string_3 = "PN83GCT$J6DRUMQYEA_KB4O%9HLI5-SV207ZXW"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func042C()) {
		udg_temp_string_3 = "A_KSV2WJ6NRUMQ8CHLI5-XYE0$%7ZB4O3GDT9P"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func043C()) {
		udg_temp_string_3 = "EMKJ6YPZB4LI5-XWOU7%9T$DHSV20A_NR3GQ8C"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func044C()) {
		udg_temp_string_3 = "YEMDHSV20A_KPZB4LI5-XWOU7%9T$NR3GQ8CJ6"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func045C()) {
		udg_temp_string_3 = "NAY1SGFZQ6IXWHV20E93LCMT5%O7BDRUP$84KJ"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func046C()) {
		udg_temp_string_3 = "7ZBXW6T9HJ0ARUYE$%SVPN4OL_2MQ8CK5-I3GD"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func047C()) {
		udg_temp_string_3 = "3U7%9T$DG5-XWOHSV20AQPZB4LI_8CJ6YNEMKR"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func048C()) {
		udg_temp_string_3 = "0A9TMN$BDW2CJ6YE%8KPXH4_GQLS3OU7VIZ5-R"
	} else {
	}
	if(Trig_Variable_Tabellen_1k_Func049C()) {
		udg_temp_string_3 = "XH40A_N283I5-CJ6YE%9T$DWMKPZBOU7VGQLSR"
	} else {
	}
	bj_forLoopAIndex = 1
	bj_forLoopAIndexEnd = StringLength(udg_temp_string_3)
	while(true) {
	if(bj_forLoopAIndex > bj_forLoopAIndexEnd) break
		udg_xp_scr3N[bj_forLoopAIndex]= SubStringBJ(udg_temp_string_3, bj_forLoopAIndex, bj_forLoopAIndex)
		bj_forLoopAIndex = bj_forLoopAIndex + 1
	}
}export function Trig_Encoder_Game_Func001A() {
	if(Trig_Encoder_Game_Func001Func001C()) {
		Trig_Encoder_Game_Func001Func001Func002A()
	} else {
		Trig_Encoder_Game_Func001Func001Func001A()
	}
}export function Trig_SN_Encoder_Func002A() {
	bj_forLoopAIndex = 1
	bj_forLoopAIndexEnd = 26
	while(true) {
	if(bj_forLoopAIndex > bj_forLoopAIndexEnd) break
		if(Trig_SN_Encoder_Func002Func002Func002C()) {
			udg_xp_encoded_sn1[GetConvertedPlayerId(GetEnumPlayer())]= bj_forLoopAIndex
		} else {
		}
		if(Trig_SN_Encoder_Func002Func002Func003C()) {
			udg_xp_encoded_sn2[GetConvertedPlayerId(GetEnumPlayer())]= bj_forLoopAIndex
		} else {
		}
		if(Trig_SN_Encoder_Func002Func002Func004C()) {
			udg_xp_encoded_sn3[GetConvertedPlayerId(GetEnumPlayer())]= bj_forLoopAIndex
		} else {
		}
		bj_forLoopAIndex = bj_forLoopAIndex + 1
	}
	if(Trig_SN_Encoder_Func002Func004C()) {
		udg_xp_encoded_sn1[GetConvertedPlayerId(GetEnumPlayer())]= 1
	} else {
	}
	if(Trig_SN_Encoder_Func002Func005C()) {
		udg_xp_encoded_sn2[GetConvertedPlayerId(GetEnumPlayer())]= 2
	} else {
	}
	if(Trig_SN_Encoder_Func002Func006C()) {
		udg_xp_encoded_sn3[GetConvertedPlayerId(GetEnumPlayer())]= 3
	} else {
	}
}export function Trig_SN_Encoder_Func004A() {
	bj_forLoopAIndex = 1
	bj_forLoopAIndexEnd = 26
	while(true) {
	if(bj_forLoopAIndex > bj_forLoopAIndexEnd) break
		if(Trig_SN_Encoder_Func004Func003Func002C()) {
			udg_xp_encoded_sn2_2[GetConvertedPlayerId(GetEnumPlayer())]= bj_forLoopAIndex
		} else {
		}
		if(Trig_SN_Encoder_Func004Func003Func004C()) {
			udg_xp_encoded_sn4_2[GetConvertedPlayerId(GetEnumPlayer())]= bj_forLoopAIndex
			if(Trig_SN_Encoder_Func004Func003Func004Func003C()) {
				udg_xp_encoded_sn4_2[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_encoded_sn4_2[GetConvertedPlayerId(GetEnumPlayer())]+ 1)
			} else {
			}
		} else {
		}
		bj_forLoopAIndex = bj_forLoopAIndex + 1
	}
	bj_forLoopAIndex = 1
	bj_forLoopAIndexEnd = 17
	while(true) {
	if(bj_forLoopAIndex > bj_forLoopAIndexEnd) break
		if(Trig_SN_Encoder_Func004Func005Func002C()) {
			udg_xp_encoded_sn2_2[GetConvertedPlayerId(GetEnumPlayer())]= bj_forLoopAIndex
		} else {
		}
		if(Trig_SN_Encoder_Func004Func005Func004C()) {
			udg_xp_encoded_sn4_2[GetConvertedPlayerId(GetEnumPlayer())]= bj_forLoopAIndex
		} else {
		}
		bj_forLoopAIndex = bj_forLoopAIndex + 1
	}
	if(Trig_SN_Encoder_Func004Func007C()) {
		udg_xp_encoded_sn2_2[GetConvertedPlayerId(GetEnumPlayer())]= 2
	} else {
	}
	if(Trig_SN_Encoder_Func004Func008C()) {
		udg_xp_encoded_sn4_2[GetConvertedPlayerId(GetEnumPlayer())]= 4
	} else {
	}
}export function Trig_Variable_Tabellen_Func002C() {
	if(!(udg_xp_keycode == 1)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func003C() {
	if(!(udg_xp_keycode == 2)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func004C() {
	if(!(udg_xp_keycode == 3)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func005C() {
	if(!(udg_xp_keycode == 4)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func006C() {
	if(!(udg_xp_keycode == 5)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func007C() {
	if(!(udg_xp_keycode == 6)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func008C() {
	if(!(udg_xp_keycode == 7)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func009C() {
	if(!(udg_xp_keycode == 8)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func010C() {
	if(!(udg_xp_keycode == 9)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func011C() {
	if(!(udg_xp_keycode == 10)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func013C() {
	if(!(udg_xp_keycode == 11)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func014C() {
	if(!(udg_xp_keycode == 12)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func015C() {
	if(!(udg_xp_keycode == 13)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func016C() {
	if(!(udg_xp_keycode == 14)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func017C() {
	if(!(udg_xp_keycode == 15)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func018C() {
	if(!(udg_xp_keycode == 16)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func019C() {
	if(!(udg_xp_keycode == 17)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func020C() {
	if(!(udg_xp_keycode == 18)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func021C() {
	if(!(udg_xp_keycode == 19)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func022C() {
	if(!(udg_xp_keycode == 20)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func024C() {
	if(!(udg_xp_keycode == 21)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func025C() {
	if(!(udg_xp_keycode == 22)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func026C() {
	if(!(udg_xp_keycode == 23)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func027C() {
	if(!(udg_xp_keycode == 24)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func028C() {
	if(!(udg_xp_keycode == 25)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func029C() {
	if(!(udg_xp_keycode == 26)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func030C() {
	if(!(udg_xp_keycode == 27)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func031C() {
	if(!(udg_xp_keycode == 28)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func032C() {
	if(!(udg_xp_keycode == 29)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func033C() {
	if(!(udg_xp_keycode == 30)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func035C() {
	if(!(udg_xp_keycode == 31)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func036C() {
	if(!(udg_xp_keycode == 32)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func037C() {
	if(!(udg_xp_keycode == 33)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func038C() {
	if(!(udg_xp_keycode == 34)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func039C() {
	if(!(udg_xp_keycode == 35)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func040C() {
	if(!(udg_xp_keycode == 36)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func041C() {
	if(!(udg_xp_keycode == 37)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func042C() {
	if(!(udg_xp_keycode == 38)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func043C() {
	if(!(udg_xp_keycode == 39)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func044C() {
	if(!(udg_xp_keycode == 40)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func045C() {
	if(!(udg_xp_keycode == 41)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func046C() {
	if(!(udg_xp_keycode == 42)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func047C() {
	if(!(udg_xp_keycode == 43)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func048C() {
	if(!(udg_xp_keycode == 44)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_Func049C() {
	if(!(udg_xp_keycode == 45)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func002C() {
	if(!(udg_xp_keycode == 1)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func003C() {
	if(!(udg_xp_keycode == 2)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func004C() {
	if(!(udg_xp_keycode == 3)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func005C() {
	if(!(udg_xp_keycode == 4)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func006C() {
	if(!(udg_xp_keycode == 5)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func007C() {
	if(!(udg_xp_keycode == 6)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func008C() {
	if(!(udg_xp_keycode == 7)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func009C() {
	if(!(udg_xp_keycode == 8)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func010C() {
	if(!(udg_xp_keycode == 9)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func011C() {
	if(!(udg_xp_keycode == 10)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func013C() {
	if(!(udg_xp_keycode == 11)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func014C() {
	if(!(udg_xp_keycode == 12)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func015C() {
	if(!(udg_xp_keycode == 13)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func016C() {
	if(!(udg_xp_keycode == 14)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func017C() {
	if(!(udg_xp_keycode == 15)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func018C() {
	if(!(udg_xp_keycode == 16)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func019C() {
	if(!(udg_xp_keycode == 17)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func020C() {
	if(!(udg_xp_keycode == 18)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func021C() {
	if(!(udg_xp_keycode == 19)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func022C() {
	if(!(udg_xp_keycode == 20)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func024C() {
	if(!(udg_xp_keycode == 21)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func025C() {
	if(!(udg_xp_keycode == 22)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func026C() {
	if(!(udg_xp_keycode == 23)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func027C() {
	if(!(udg_xp_keycode == 24)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func028C() {
	if(!(udg_xp_keycode == 25)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func029C() {
	if(!(udg_xp_keycode == 26)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func030C() {
	if(!(udg_xp_keycode == 27)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func031C() {
	if(!(udg_xp_keycode == 28)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func032C() {
	if(!(udg_xp_keycode == 29)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func033C() {
	if(!(udg_xp_keycode == 30)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func035C() {
	if(!(udg_xp_keycode == 31)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func036C() {
	if(!(udg_xp_keycode == 32)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func037C() {
	if(!(udg_xp_keycode == 33)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func038C() {
	if(!(udg_xp_keycode == 34)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func039C() {
	if(!(udg_xp_keycode == 35)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func040C() {
	if(!(udg_xp_keycode == 36)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func041C() {
	if(!(udg_xp_keycode == 37)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func042C() {
	if(!(udg_xp_keycode == 38)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func043C() {
	if(!(udg_xp_keycode == 39)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func044C() {
	if(!(udg_xp_keycode == 40)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func045C() {
	if(!(udg_xp_keycode == 41)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func046C() {
	if(!(udg_xp_keycode == 42)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func047C() {
	if(!(udg_xp_keycode == 43)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func048C() {
	if(!(udg_xp_keycode == 44)) {
		return false
	}
	return true
}export function Trig_Variable_Tabellen_1k_Func049C() {
	if(!(udg_xp_keycode == 45)) {
		return false
	}
	return true
}export function Trig_Encoder_Game_Func001Func001C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]< 1000)) {
		return false
	}
	return true
}export function Trig_Encoder_Game_Func001Func001Func002A() {
	if(Trig_Encoder_Game_Func001Func001Func002Func001C()) {
		udg_xp_encoded_cp1[GetConvertedPlayerId(GetEnumPlayer())]=(StringLength(GetPlayerName(GetEnumPlayer()))+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 1, 1))+ 0))
		udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]=(0 +(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 1, 1))+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 2, 2))* 2)))
		udg_xp_encoded_cp3[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_encoded_sn2_2[GetConvertedPlayerId(GetEnumPlayer())]+ 0)
		udg_xp_encoded_cp4[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_encoded_sn4_2[GetConvertedPlayerId(GetEnumPlayer())]+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 2, 2))+ 3))
	} else {
		udg_xp_encoded_cp1[GetConvertedPlayerId(GetEnumPlayer())]=(StringLength(GetPlayerName(GetEnumPlayer()))+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 2, 2))+ S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 1, 1))))
		udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]=(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 1, 1))+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 2, 2))+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 3, 3))* 2)))
		udg_xp_encoded_cp3[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_encoded_sn2_2[GetConvertedPlayerId(GetEnumPlayer())]+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 1, 1))+ 0))
		udg_xp_encoded_cp4[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_encoded_sn4_2[GetConvertedPlayerId(GetEnumPlayer())]+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 3, 3))+ 3))
	}
	if(Trig_Encoder_Game_Func001Func001Func002Func003C()) {
		DoNothing()
	} else {
		udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]+ 2)
	}
	udg_xp_keycode =(udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]+ 0)
	Trig_Variable_Tabellen_Actions()
	udg_xp_encoded_code[GetConvertedPlayerId(GetEnumPlayer())]= ""
	udg_xp_encoded_code[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_scr3N[udg_xp_encoded_cp1[GetConvertedPlayerId(GetEnumPlayer())]]+(udg_xp_scr2N_KEY[udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]]+(udg_xp_scr3N[udg_xp_encoded_cp3[GetConvertedPlayerId(GetEnumPlayer())]]+(udg_xp_scr3N[udg_xp_encoded_cp4[GetConvertedPlayerId(GetEnumPlayer())]]+ ""))))
	console.log(udg_xp_keycode)
}export function Trig_Encoder_Game_Func001Func001Func001A() {
	udg_xp_spielerlevel[GetConvertedPlayerId(GetTriggerPlayer())]=(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]-1000)
	if(Trig_Encoder_Game_Func001Func001Func001Func002C()) {
		udg_xp_encoded_cp1[GetConvertedPlayerId(GetEnumPlayer())]=(StringLength(GetPlayerName(GetEnumPlayer()))+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 1, 1))+ 0))
		udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]=(0 +(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 2, 2))+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 1, 1))* 2)))
		udg_xp_encoded_cp3[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_encoded_sn2_2[GetConvertedPlayerId(GetEnumPlayer())]+ 0)
		udg_xp_encoded_cp4[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_encoded_sn4_2[GetConvertedPlayerId(GetEnumPlayer())]+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 2, 2))+ 3))
		udg_xp_encoded_cp5[GetConvertedPlayerId(GetEnumPlayer())]=(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 1, 1))+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 2, 2))+ 5))
	} else {
		udg_xp_encoded_cp1[GetConvertedPlayerId(GetEnumPlayer())]=(StringLength(GetPlayerName(GetEnumPlayer()))+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 2, 2))+ S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 1, 1))))
		udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]=(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 1, 1))+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 3, 3))+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 2, 2))* 2)))
		udg_xp_encoded_cp3[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_encoded_sn2_2[GetConvertedPlayerId(GetEnumPlayer())]+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 1, 1))+ 0))
		udg_xp_encoded_cp4[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_encoded_sn4_2[GetConvertedPlayerId(GetEnumPlayer())]+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 3, 3))+ 3))
		udg_xp_encoded_cp5[GetConvertedPlayerId(GetEnumPlayer())]=(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 3, 3))+(S2I(SubStringBJ(I2S(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]), 2, 2))+ 5))
	}
	if(Trig_Encoder_Game_Func001Func001Func001Func004C()) {
		DoNothing()
	} else {
		udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]+ 2)
	}
	udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]+ 1)
	udg_xp_keycode =(udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]+ 0)
	Trig_Variable_Tabellen_Actions()
	udg_xp_encoded_code[GetConvertedPlayerId(GetEnumPlayer())]= ""
	udg_xp_encoded_code[GetConvertedPlayerId(GetEnumPlayer())]=(udg_xp_scr3N[udg_xp_encoded_cp1[GetConvertedPlayerId(GetEnumPlayer())]]+(udg_xp_scr2N_KEY[udg_xp_encoded_cp2[GetConvertedPlayerId(GetEnumPlayer())]]+(udg_xp_scr3N[udg_xp_encoded_cp3[GetConvertedPlayerId(GetEnumPlayer())]]+(udg_xp_scr3N[udg_xp_encoded_cp4[GetConvertedPlayerId(GetEnumPlayer())]]+ udg_xp_scr3N[udg_xp_encoded_cp5[GetConvertedPlayerId(GetEnumPlayer())]]))))
	udg_xp_spielerlevel[GetConvertedPlayerId(GetTriggerPlayer())]=(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]+ 1000)
}export function Trig_SN_Encoder_Func002Func002Func002C() {
	if(! Trig_SN_Encoder_Func002Func002Func002Func001C()) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func002Func002Func003C() {
	if(! Trig_SN_Encoder_Func002Func002Func003Func001C()) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func002Func002Func004C() {
	if(! Trig_SN_Encoder_Func002Func002Func004Func001C()) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func002Func004C() {
	if(!(udg_xp_encoded_sn1[GetConvertedPlayerId(GetEnumPlayer())]== 0)) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func002Func005C() {
	if(!(udg_xp_encoded_sn2[GetConvertedPlayerId(GetEnumPlayer())]== 0)) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func002Func006C() {
	if(!(udg_xp_encoded_sn3[GetConvertedPlayerId(GetEnumPlayer())]== 0)) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func004Func003Func002C() {
	if(! Trig_SN_Encoder_Func004Func003Func002Func001C()) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func004Func003Func004C() {
	if(! Trig_SN_Encoder_Func004Func003Func004Func001C()) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func004Func003Func004Func003C() {
	if(!(StringCase(GetPlayerName(GetEnumPlayer()), false)== "cactuzz")) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func004Func005Func002C() {
	if(!(SubStringBJ(GetPlayerName(GetEnumPlayer()), 4, 4)== udg_xp_scr1N2[bj_forLoopAIndex])) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func004Func005Func004C() {
	if(!(SubStringBJ(GetPlayerName(GetEnumPlayer()), StringLength(GetPlayerName(GetEnumPlayer())), StringLength(GetPlayerName(GetEnumPlayer())))== udg_xp_scr1N2[bj_forLoopAIndex])) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func004Func007C() {
	if(!(udg_xp_encoded_sn2_2[GetConvertedPlayerId(GetEnumPlayer())]== 0)) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func004Func008C() {
	if(!(udg_xp_encoded_sn4_2[GetConvertedPlayerId(GetEnumPlayer())]== 0)) {
		return false
	}
	return true
}export function Trig_Encoder_Game_Func001Func001Func002Func001C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]<= 99)) {
		return false
	}
	return true
}export function Trig_Encoder_Game_Func001Func001Func002Func003C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]<= 688)) {
		return false
	}
	return true
}export function Trig_Encoder_Game_Func001Func001Func001Func002C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]<= 99)) {
		return false
	}
	return true
}export function Trig_Encoder_Game_Func001Func001Func001Func004C() {
	if(!(udg_xp_spielerlevel[GetConvertedPlayerId(GetEnumPlayer())]<= 688)) {
		return false
	}
	return true
}export function Trig_SN_Encoder_Func002Func002Func002Func001C() {
	if((SubStringBJ(GetPlayerName(GetEnumPlayer()), 1, 1)== udg_xp_scr1A[bj_forLoopAIndex])) {
		return true
	}
	if((SubStringBJ(GetPlayerName(GetEnumPlayer()), 1, 1)== StringCase(udg_xp_scr1A[bj_forLoopAIndex], false))) {
		return true
	}
	return false
}export function Trig_SN_Encoder_Func002Func002Func003Func001C() {
	if((SubStringBJ(GetPlayerName(GetEnumPlayer()), 4, 4)== udg_xp_scr1A[bj_forLoopAIndex])) {
		return true
	}
	if((SubStringBJ(GetPlayerName(GetEnumPlayer()), 4, 4)== StringCase(udg_xp_scr1A[bj_forLoopAIndex], false))) {
		return true
	}
	return false
}export function Trig_SN_Encoder_Func002Func002Func004Func001C() {
	if((SubStringBJ(GetPlayerName(GetEnumPlayer()), 6, 6)== udg_xp_scr1A[bj_forLoopAIndex])) {
		return true
	}
	if((SubStringBJ(GetPlayerName(GetEnumPlayer()), 6, 6)== StringCase(udg_xp_scr1A[bj_forLoopAIndex], false))) {
		return true
	}
	return false
}export function Trig_SN_Encoder_Func004Func003Func002Func001C() {
	if((SubStringBJ(GetPlayerName(GetEnumPlayer()), 4, 4)== udg_xp_scr1N1[bj_forLoopAIndex])) {
		return true
	}
	if((SubStringBJ(GetPlayerName(GetEnumPlayer()), 4, 4)== StringCase(udg_xp_scr1N1[bj_forLoopAIndex], false))) {
		return true
	}
	return false
}export function Trig_SN_Encoder_Func004Func003Func004Func001C() {
	if((SubStringBJ(GetPlayerName(GetEnumPlayer()), StringLength(GetPlayerName(GetEnumPlayer())), StringLength(GetPlayerName(GetEnumPlayer())))== udg_xp_scr1N1[bj_forLoopAIndex])) {
		return true
	}
	if((SubStringBJ(GetPlayerName(GetEnumPlayer()), StringLength(GetPlayerName(GetEnumPlayer())), StringLength(GetPlayerName(GetEnumPlayer())))== StringCase(udg_xp_scr1N1[bj_forLoopAIndex], false))) {
		return true
	}
	return false
}

getCode(20, "0")