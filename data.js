const DATA = [
    {
        "Tétel": "[01] Magyar Királyság az Anjou-korban",
        "Esemény": "Abák legyőzése",
        "Dátum": 1312,
        "Kép1": "aba1.jpg",
        "Kép2": "aba2.jpg",
        "Kép3": "aba3.jpg"
    },
    {
        "Tétel": "[01] Magyar Királyság az Anjou-korban",
        "Esemény": "Árpád ház kihalása",
        "Dátum": 1301,
        "Kép1": "arpad1.jpg",
        "Kép2": "arpad2.jpg",
        "Kép3": "arpad3.jpg"
    },
    {
        "Tétel": "[01] Magyar Királyság az Anjou-korban",
        "Esemény": "Csák Máté halála",
        "Dátum": 1321,
        "Kép1": "csakmate.jpg",
        "Kép2": "csakmate2.jpg",
        "Kép3": "csakmate3.jpg"
    },
    {
        "Tétel": "[01] Magyar Királyság az Anjou-korban",
        "Esemény": "Károly Róbert halála",
        "Dátum": 1342,
        "Kép1": "robert1.jpg",
        "Kép2": "robert2.jpg",
        "Kép3": "robert3.jpg"
    },
    {
        "Tétel": "[01] Magyar Királyság az Anjou-korban",
        "Esemény": "Visegrádi királytalálkozó",
        "Dátum": 1335,
        "Kép1": "visegrad1.jpg",
        "Kép2": "visegrad2.jpg",
        "Kép3": "visegrad3.jpg"
    },
    {
        "Tétel": "[02] Nagy földrajzi felfedezések és következményei",
        "Esemény": "Bartolomeo Diaz elérte Afrika legdélebbi pontját",
        "Dátum": 1487,
        "Kép1": "2_Bartolomeo_Diaz.png",
        "Kép2": "2_Bartolomeo_Diaz2.png",
        "Kép3": "2_Bartolomeo_Diaz3.png"
    },
    {
        "Tétel": "[02] Nagy földrajzi felfedezések és következményei",
        "Esemény": "Kolombusz Kristóf, aki elérte Amerika előterét",
        "Dátum": 1942,
        "Kép1": "2_Cristoforo_Colombo.png",
        "Kép2": "2_Cristoforo_Colombo2.png",
        "Kép3": ""
    },
    {
        "Tétel": "[02] Nagy földrajzi felfedezések és következményei",
        "Esemény": "Magellán, a Föld körülhajózása",
        "Dátum": "1519-21",
        "Kép1": "2_Magellan.png",
        "Kép2": "2_Magellan2.png",
        "Kép3": ""
    },
    {
        "Tétel": "[02] Nagy földrajzi felfedezések és következményei",
        "Esemény": "Portugál hajósok átlépték a Gibraltári-szorost",
        "Dátum": 1415,
        "Kép1": "2_portugal_hajosok.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[02] Nagy földrajzi felfedezések és következményei",
        "Esemény": "Tordesillasban felosztották egymás között az újonnan felfedezett és még felfedezendő világot",
        "Dátum": 1949,
        "Kép1": "2_Tordesillasi_szerzodes.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[02] Nagy földrajzi felfedezések és következményei",
        "Esemény": "Vasco de Gama Afrika megkerülésével eljutott Indiába",
        "Dátum": 1498,
        "Kép1": "2_Vasco_de_Gama.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[03] Az ipari forradalom hullámai és hatásai",
        "Esemény": "gőzgép(James Watt)",
        "Dátum": 1769,
        "Kép1": "#03_gozgep.jpg",
        "Kép2": "#03_james_watt.jpg",
        "Kép3": "#03_gozgep_rajz.jpg"
    },
    {
        "Tétel": "[03] Az ipari forradalom hullámai és hatásai",
        "Esemény": "I. ipari forradalom",
        "Dátum": "1750 - 19.század közepe",
        "Kép1": "#03_elso_ipari_forradalom.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[03] Az ipari forradalom hullámai és hatásai",
        "Esemény": "II. ipari forradalom",
        "Dátum": "1871 - 1914",
        "Kép1": "#03_masodik_ipari_forradalom.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[03] Az ipari forradalom hullámai és hatásai",
        "Esemény": "szénszálas izzólámpa(Thomas Edison)",
        "Dátum": 1879,
        "Kép1": "#03_szenszalas_izzo.jfif",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[03] Az ipari forradalom hullámai és hatásai",
        "Esemény": "telefon(Alexander Graham Bell)",
        "Dátum": 1876,
        "Kép1": "#03_telefon.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[04] Az Árpád-házi királyok kora",
        "Esemény": "Budai vár építése",
        "Dátum": 1247,
        "Kép1": "4_Budai_Var.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[04] Az Árpád-házi királyok kora",
        "Esemény": "IV. Béla",
        "Dátum": "1235-1270",
        "Kép1": "4_IV_Bela.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[04] Az Árpád-házi királyok kora",
        "Esemény": "Kijev eleste",
        "Dátum": 1240,
        "Kép1": "4_Kijev_eleste.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[04] Az Árpád-házi királyok kora",
        "Esemény": "Muhi csata",
        "Dátum": "1241. április 11",
        "Kép1": "4_Muhi_csata.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[04] Az Árpád-házi királyok kora",
        "Esemény": "Tatárjárás",
        "Dátum": "1241-1242",
        "Kép1": "4_Tatarjaras.jpg",
        "Kép2": "4_Tatarjaras_2.jpg",
        "Kép3": "4_Tatarjaras_3.jpg"
    },
    {
        "Tétel": "[04] Az Árpád-házi királyok kora",
        "Esemény": "Vereckei hágó vereség",
        "Dátum": 1241,
        "Kép1": "4_Vereckei_Hago.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[06] Mária Terézia és II. József reformjai",
        "Esemény": "II József uralkodása",
        "Dátum": "1780-1790",
        "Kép1": "#6_II József.png",
        "Kép2": "#6_II József2.png",
        "Kép3": ""
    },
    {
        "Tétel": "[06] Mária Terézia és II. József reformjai",
        "Esemény": "III.Károly uralkodása",
        "Dátum": "1711-1740",
        "Kép1": "#6_III_Károly.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[06] Mária Terézia és II. József reformjai",
        "Esemény": "Kettős Vámhatár",
        "Dátum": 1754,
        "Kép1": "#6_Kettős vám.png",
        "Kép2": "#6_Kettős vám2.png",
        "Kép3": ""
    },
    {
        "Tétel": "[06] Mária Terézia és II. József reformjai",
        "Esemény": "Mária Terézia uralkodása",
        "Dátum": "1740-1780",
        "Kép1": "#6_Mária Terézia.png",
        "Kép2": "#6_Mária Terézia2.png",
        "Kép3": "#6_Maria Terézia3.png"
    },
    {
        "Tétel": "[06] Mária Terézia és II. József reformjai",
        "Esemény": "Pragmatica Sanctio kiadása",
        "Dátum": 1723,
        "Kép1": "#6_Pragmatica Sanc.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[07] Magyarországgal kötött trianoni békeszerződés",
        "Esemény": "Horthy Miklós kormányzó",
        "Dátum": "1920. március 1.",
        "Kép1": "7_Horthy Miklós_1.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[07] Magyarországgal kötött trianoni békeszerződés",
        "Esemény": "Magyarországi Tanácsköztársaság születése",
        "Dátum": "1919. március 21.",
        "Kép1": "7_Magyarországi Tanácsköztársaság születése_1.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[07] Magyarországgal kötött trianoni békeszerződés",
        "Esemény": "Vix jegyzék",
        "Dátum": "1919. március 20.",
        "Kép1": "7_Vix Jegyzék_1.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[07] Magyarországgal kötött trianoni békeszerződés",
        "Esemény": "Békeszerződés aláírása",
        "Dátum": "1920. június 4.",
        "Kép1": "7_Békeszerződés aláírása_1.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[07] Magyarországgal kötött trianoni békeszerződés",
        "Esemény": "Trianoni békeszerződés életbelépése",
        "Dátum": "1921. július 31.",
        "Kép1": "7_Trianoni békeszerződés életbelépése_1.jpg",
        "Kép2": "7_Trianoni békeszerződés életbelépése_2.jpg",
        "Kép3": "7_Trianoni békeszerződés életbelépése_3.jpg"
    },
    {
        "Tétel": "[08] Államalapítás",
        "Esemény": "I. Géza fejedelem",
        "Dátum": "972-997",
        "Kép1": "8_Geza_I.png",
        "Kép2": "8_Géza_I2.png",
        "Kép3": ""
    },
    {
        "Tétel": "[08] Államalapítás",
        "Esemény": "Imre herceg halála",
        "Dátum": 1031,
        "Kép1": "8_Szent_Imre_herceg.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[08] Államalapítás",
        "Esemény": "István király szentté avatása",
        "Dátum": 1083,
        "Kép1": "8_Szt_Istvan.png",
        "Kép2": "8_Szt_Istvan2.png",
        "Kép3": ""
    },
    {
        "Tétel": "[08] Államalapítás",
        "Esemény": "Istvánt Esztergomban megkoronázták",
        "Dátum": "1001. január 1",
        "Kép1": "8_Szt_Istvan.png",
        "Kép2": "8_Szt_Istvan2.png",
        "Kép3": ""
    },
    {
        "Tétel": "[08] Államalapítás",
        "Esemény": "Koppány fellázadt az új öröklési rend miatt",
        "Dátum": 997,
        "Kép1": "8_Koppany.png",
        "Kép2": "8_Koppany2.png",
        "Kép3": ""
    },
    {
        "Tétel": "[08] Államalapítás",
        "Esemény": "Quedlinburgi birodalmi gyűlés",
        "Dátum": 973,
        "Kép1": "8_quedlinburgi_gyűlés.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[09] A reformmozgalom kibontakozása",
        "Esemény": "kaszinó alapítása Pesten",
        "Dátum": 1827,
        "Kép1": "#09_kaszino_pesten.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[09] A reformmozgalom kibontakozása",
        "Esemény": "Lánchíd építése",
        "Dátum": 1842,
        "Kép1": "#09_lanchid.jpg",
        "Kép2": "#09_lanchid_oroszlan.jpg",
        "Kép3": "#09_lanchid_tervrajz.jpg"
    },
    {
        "Tétel": "[09] A reformmozgalom kibontakozása",
        "Esemény": "Reformkor Magyarországon",
        "Dátum": "1830 - 1848",
        "Kép1": "#09_reformkor.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[09] A reformmozgalom kibontakozása",
        "Esemény": "Széchényi István élete",
        "Dátum": "1791 - 1860",
        "Kép1": "#09_szechenyi_istvan.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[09] A reformmozgalom kibontakozása",
        "Esemény": "Wesselényi Miklós élete",
        "Dátum": "1796 - 1850",
        "Kép1": "#09_wesselenyi_miklos.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[10] A Kádár-korszak",
        "Esemény": "500 gépkocsi importálása Magyarországra",
        "Dátum": 1957,
        "Kép1": "10_Auto_importalas_500DB_Kadar_korszak.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[10] A Kádár-korszak",
        "Esemény": "Buszjáratok kialakulása villamos helyett",
        "Dátum": 1960,
        "Kép1": "10_Volan_Buszjaratok_A_Kadar_korszakban.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[10] A Kádár-korszak",
        "Esemény": "Fidesz megalakulása",
        "Dátum": 1988,
        "Kép1": "10_Fidesz_megalakulasa_1988.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[10] A Kádár-korszak",
        "Esemény": "Kádár címer bevezetése",
        "Dátum": 1957,
        "Kép1": "10_Kadar_cimer_bevezetese_1957.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[10] A Kádár-korszak",
        "Esemény": "Kádár-korszak",
        "Dátum": "1956-1989",
        "Kép1": "10_Kadar_korszak.jpeg",
        "Kép2": "10_Kadar_korszak_2.jpg",
        "Kép3": "10_Kadar_korszak.jpg"
    },
    {
        "Tétel": "[10] A Kádár-korszak",
        "Esemény": "M7 autópálya átadása",
        "Dátum": 1975,
        "Kép1": "10_M7autopalya_atadasa.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[10] A Kádár-korszak",
        "Esemény": "Olajválság",
        "Dátum": 1973,
        "Kép1": "10_Olaj_valsag_1973.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[10] A Kádár-korszak",
        "Esemény": "Peresztrojka és Glasznoszty",
        "Dátum": 1985,
        "Kép1": "10_peresztrojka_glasznoszty_1985.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[10] A Kádár-korszak",
        "Esemény": "Távfűtéses panelházak építése",
        "Dátum": "1960-70",
        "Kép1": "10_Panelhazak_epitese_1960_1970.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[10] A Kádár-korszak",
        "Esemény": "Új gazdasági mechanizmus",
        "Dátum": 1968,
        "Kép1": "10_Uj_gazdasagi_mechanizmus.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[10] A Kádár-korszak",
        "Esemény": "USA visszaadja a koronát",
        "Dátum": 1978,
        "Kép1": "10_USA_KoronaVisszaadas.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Anschlussz",
        "Dátum": 1938,
        "Kép1": "nemzetszocializmus8.jpg",
        "Kép2": "nemzetszocializmus23.png",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Hindenburg halála",
        "Dátum": 1934,
        "Kép1": "nemzetszocializmus15.jpg",
        "Kép2": "nemzetszocializmus30.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Hitler birodalmi kancellár",
        "Dátum": "1933. jan. 30.",
        "Kép1": "nemzetszocializmus13.jpg",
        "Kép2": "nemzetszocializmus28.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Hitler igazi célja",
        "Dátum": "1939. márc. 15.",
        "Kép1": "nemzetszocializmus10.jpg",
        "Kép2": "nemzetszocializmus25.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Hitler pártja megnyeri a választást",
        "Dátum": 1932,
        "Kép1": "nemzetszocializmus12.jpeg",
        "Kép2": "nemzetszocializmus27.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Hosszúkések éjszakája",
        "Dátum": "1934. jún. 19-30.",
        "Kép1": "nemzetszocializmus14.jfif",
        "Kép2": "nemzetszocializmus29.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Jobboldali pártok szövetsége (Harzburgi Front)",
        "Dátum": 1931,
        "Kép1": "nemzetszocializmus11.jpg",
        "Kép2": "nemzetszocializmus26.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Kommunista hatalomátvétel Berlinben",
        "Dátum": 1919,
        "Kép1": "nemzetszocializmus2.png",
        "Kép2": "nemzetszocializmus17.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Müncheni egyezmény",
        "Dátum": "1938. szept. 29-30.",
        "Kép1": "nemzetszocializmus9.jfif",
        "Kép2": "nemzetszocializmus24.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Müncheni sörpuccs leverése",
        "Dátum": 1923,
        "Kép1": "nemzetszocializmus4.jfif",
        "Kép2": "nemzetszocializmus19.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Nácizmus kezdete",
        "Dátum": 1933,
        "Kép1": "nemzetszocializmus5.jfif",
        "Kép2": "nemzetszocializmus20.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Polgári demokratikus forradalom Németországban",
        "Dátum": 1918,
        "Kép1": "nemzetszocializmus1.jfif",
        "Kép2": "nemzetszocializmus16.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Saar vidék Németország része lesz",
        "Dátum": 1935,
        "Kép1": "nemzetszocializmus7.png",
        "Kép2": "nemzetszocializmus22.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Saar vidéki népszavazás",
        "Dátum": 1934,
        "Kép1": "nemzetszocializmus6.png",
        "Kép2": "nemzetszocializmus21.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[11] Nemzeti szocializmus",
        "Esemény": "Weimari gyűlés",
        "Dátum": "1919-1933",
        "Kép1": "nemzetszocializmus3.jfif",
        "Kép2": "nemzetszocializmus18.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[13] A kommunista diktatúra kiépítése és működése Magyarországon",
        "Esemény": "Földtörvény",
        "Dátum": 1945,
        "Kép1": "kommunistadiktatura3.jfif",
        "Kép2": "kommunistadiktatura12.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[13] A kommunista diktatúra kiépítése és működése Magyarországon",
        "Esemény": "Kékcédulás választás",
        "Dátum": 1947,
        "Kép1": "kommunistadiktatura7.jpg",
        "Kép2": "kommunistadiktatura16.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[13] A kommunista diktatúra kiépítése és működése Magyarországon",
        "Esemény": "Magyar Függetlenségi Forint",
        "Dátum": "1944. dec. 2.",
        "Kép1": "kommunistadiktatura2.jfif",
        "Kép2": "kommunistadiktatura11.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[13] A kommunista diktatúra kiépítése és működése Magyarországon",
        "Esemény": "Magyar Függetlenségi Népfront",
        "Dátum": 1949,
        "Kép1": "kommunistadiktatura9.jpg",
        "Kép2": "kommunistadiktatura18.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[13] A kommunista diktatúra kiépítése és működése Magyarországon",
        "Esemény": "MKP és MSzDP egyesítése",
        "Dátum": 1948,
        "Kép1": "kommunistadiktatura8.jfif",
        "Kép2": "kommunistadiktatura17.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[13] A kommunista diktatúra kiépítése és működése Magyarországon",
        "Esemény": "Nagy Ferenc miniszterelnök",
        "Dátum": 1946,
        "Kép1": "kommunistadiktatura6.jfif",
        "Kép2": "kommunistadiktatura15.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[13] A kommunista diktatúra kiépítése és működése Magyarországon",
        "Esemény": "Szovjet megszállás",
        "Dátum": 1944,
        "Kép1": "kommunistadiktatura1.jfif",
        "Kép2": "kommunistadiktatura10.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[13] A kommunista diktatúra kiépítése és működése Magyarországon",
        "Esemény": "Tildy Zoltán köztársasági elnök",
        "Dátum": 1946,
        "Kép1": "kommunistadiktatura5.jfif",
        "Kép2": "kommunistadiktatura14.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[13] A kommunista diktatúra kiépítése és működése Magyarországon",
        "Esemény": "Utolsó demokratikus választás",
        "Dátum": 1945,
        "Kép1": "kommunistadiktatura4.jfif",
        "Kép2": "kommunistadiktatura13.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[14] Athéni demokrácia",
        "Esemény": "Drakón arkhónsága",
        "Dátum": "Kr.e.621-Kr.e.594",
        "Kép1": "#14_Drakón.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[14] Athéni demokrácia",
        "Esemény": "Kleiszthenész arkhónsága",
        "Dátum": "Kr.e.508",
        "Kép1": "#14_Kleiszthenész.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[14] Athéni demokrácia",
        "Esemény": "Peiszisztratosz arkhónsága",
        "Dátum": "Kr.e.560-Kr.e.527",
        "Kép1": "#14_Peiszisztratosz.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[14] Athéni demokrácia",
        "Esemény": "Periklész arkhónsága",
        "Dátum": "Kr.e.495-Kr.e 429",
        "Kép1": "#14_Periklész.png",
        "Kép2": "#14_Periklész2.png",
        "Kép3": ""
    },
    {
        "Tétel": "[14] Athéni demokrácia",
        "Esemény": "Szolón arkhónsága",
        "Dátum": "Kr.e.594.",
        "Kép1": "#14_Solon.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[15] Az iszlám vallás",
        "Esemény": "Arab csapatok elérték a Gibraltári szorost",
        "Dátum": 711,
        "Kép1": "",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[15] Az iszlám vallás",
        "Esemény": "Arab hódítás megállítása",
        "Dátum": 732,
        "Kép1": "",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[15] Az iszlám vallás",
        "Esemény": "Damaszkusz bevétele",
        "Dátum": 636,
        "Kép1": "",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[15] Az iszlám vallás",
        "Esemény": "Jeruzsálem elfoglalása",
        "Dátum": 638,
        "Kép1": "jeruzsalem1.jpg",
        "Kép2": "jeruzsalem2.jpg",
        "Kép3": "jeruzsalem3.jpg"
    },
    {
        "Tétel": "[15] Az iszlám vallás",
        "Esemény": "Mohamed halála",
        "Dátum": 632,
        "Kép1": "mohamed1.jpg",
        "Kép2": "mohamed2.jpg",
        "Kép3": "mohamed3.jpg"
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "2. rigómezei csata",
        "Dátum": 1448,
        "Kép1": "hunyadiak7.jpg",
        "Kép2": "hunyadiak21.png",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "A kiskorú V. László trónra kerül",
        "Dátum": 1444,
        "Kép1": "hunyadiak5.jpg",
        "Kép2": "hunyadiak19.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "Bécs elfoglalása",
        "Dátum": 1485,
        "Kép1": "hunyadiak14.jfif",
        "Kép2": "hunyadiak28.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "Habsburg Albert uralkodása",
        "Dátum": "1437-1439",
        "Kép1": "hunyadiak1.jpg",
        "Kép2": "hunyadiak15.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "Hunyadi János legyőzi Mezid bég hadseregét Erdélyben",
        "Dátum": 1442,
        "Kép1": "hunyadiak3.jpg",
        "Kép2": "hunyadiak17.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "Hunyadi Jánost kormányzó",
        "Dátum": 1446,
        "Kép1": "hunyadiak6.jpg",
        "Kép2": "hunyadiak20.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "Hunyadi Lászlót kivégzése",
        "Dátum": 1457,
        "Kép1": "hunyadiak9.jpg",
        "Kép2": "hunyadiak23.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "Hunyadi Mátyás uralkodása",
        "Dátum": "1458-1490",
        "Kép1": "hunyadiak10.jpg",
        "Kép2": "hunyadiak24.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "I. Ulászló uralkodása",
        "Dátum": "1440-1444",
        "Kép1": "hunyadiak2.jfif",
        "Kép2": "hunyadiak16.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "Jajca bevétele",
        "Dátum": 1463,
        "Kép1": "hunyadiak11.jfif",
        "Kép2": "hunyadiak25.jfif",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "Kinizsi Pál legyőzi a törököt Kenyérmezőnél",
        "Dátum": 1479,
        "Kép1": "hunyadiak13.jfif",
        "Kép2": "hunyadiak27.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "Nándorfehérvári ostrom győzelem",
        "Dátum": "1456. júl. 21.",
        "Kép1": "hunyadiak8.jpg",
        "Kép2": "hunyadiak22.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "Szabács elfoglalása",
        "Dátum": 1476,
        "Kép1": "hunyadiak12.jpg",
        "Kép2": "hunyadiak26.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[16] Hunyadiak kora",
        "Esemény": "Téli hosszú hadjárat",
        "Dátum": "1443-1444",
        "Kép1": "hunyadiak4.jpg",
        "Kép2": "hunyadiak18.jpg",
        "Kép3": ""
    },
    {
        "Tétel": "[17] A kiegyezés előzményei és tartalma",
        "Esemény": "Bach-korszak",
        "Dátum": "1851-1859",
        "Kép1": "17_Bach_Korszak.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[17] A kiegyezés előzményei és tartalma",
        "Esemény": "Forradalom és Szabadságharc",
        "Dátum": "1848-1849",
        "Kép1": "17_1838_49_szabadsagharc_forradalom.jpg",
        "Kép2": "17_szabadsagharc_2.jpg",
        "Kép3": "17_szabadsagharc_3.jpg"
    },
    {
        "Tétel": "[17] A kiegyezés előzményei és tartalma",
        "Esemény": "Krími háború",
        "Dátum": "1853-1856",
        "Kép1": "17_Krimi_haboru.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[17] A kiegyezés előzményei és tartalma",
        "Esemény": "Országgyűlés",
        "Dátum": 1861,
        "Kép1": "17_Magyar_Orszaggyules.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[17] A kiegyezés előzményei és tartalma",
        "Esemény": "Osztrák-Magyar-Monarchia",
        "Dátum": 1867,
        "Kép1": "17_Osztrak_Magyar_Monarchia_1867.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[17] A kiegyezés előzményei és tartalma",
        "Esemény": "Porosz-osztrák háború",
        "Dátum": 1866,
        "Kép1": "17_Porosz_osztrak_haboru.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[17] A kiegyezés előzményei és tartalma",
        "Esemény": "Úrbéri pátens",
        "Dátum": 1853,
        "Kép1": "17_Urberi_Patens.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[18] Az ország három részre szakadása",
        "Esemény": "I. Szulejmán uralkodása",
        "Dátum": "1520 - 1566",
        "Kép1": "#18_szulejman.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[18] Az ország három részre szakadása",
        "Esemény": "II. Lajos uralkodása",
        "Dátum": "1516 - 1526",
        "Kép1": "#18_masodik_lajos.jpg",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[18] Az ország három részre szakadása",
        "Esemény": "mohácsi csata",
        "Dátum": "1526. augusztus 29",
        "Kép1": "#18_mohacsi_csata.jpg",
        "Kép2": "#18_ mohacsi_csata_konyv.jpg",
        "Kép3": "#18_mohacsi_terkep.jfif"
    },
    {
        "Tétel": "[18] Az ország három részre szakadása",
        "Esemény": "nándorfehérvári csata",
        "Dátum": "1541. augusztus 29",
        "Kép1": "#18_nandorfehervar.jfif",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[18] Az ország három részre szakadása",
        "Esemény": "váradi béke",
        "Dátum": 1538,
        "Kép1": "#18_varadi_beke.jfif",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[19] Első világháború és következményei",
        "Esemény": "Atant áttörtia balkáni frontvonalat",
        "Dátum": "1918 szeptember",
        "Kép1": "19_antant_balkáni_frontvonalat.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[19] Első világháború és következményei",
        "Esemény": "Az Oszmán Birodalmat, majd Bulgáriát vonták be a háborúba",
        "Dátum": 1915,
        "Kép1": "19_Oszmán_Birodalom_Bulgária_háboru.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[19] Első világháború és következményei",
        "Esemény": "Compiegné-ben fegyverszünetet kötöttek az antanttal",
        "Dátum": "1918. november 11.",
        "Kép1": "19_fegyverszünet_kötöttek_antanttal.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[19] Első világháború és következményei",
        "Esemény": "Hadat üzent az OMM Szerbiának",
        "Dátum": "1914. július 28.",
        "Kép1": "19_had_OMM_Szerbiának.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[19] Első világháború és következményei",
        "Esemény": "Németek meghirdették a korlátlan tengeralattjáró-háborút, USA hadba lép",
        "Dátum": 1917,
        "Kép1": "19_tengeralattjáró_háborút.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[19] Első világháború és következményei",
        "Esemény": "OMM Padovában fegyverszünetet kötött",
        "Dátum": "1918 november 3.",
        "Kép1": "19_OMM_fegyverszünet.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[19] Első világháború és következményei",
        "Esemény": "Szarajevói merénylet",
        "Dátum": "1914. június 28.",
        "Kép1": "19_szarajevói_merénylet.png",
        "Kép2": "",
        "Kép3": ""
    },
    {
        "Tétel": "[20] Magyarország a második világháborúban",
        "Esemény": "Első bécsi döntés",
        "Dátum": "1938.nov.2",
        "Kép1": "becsi1.jpg",
        "Kép2": "becsi2.jpg",
        "Kép3": "becsi3.jpg"
    },
    {
        "Tétel": "[20] Magyarország a második világháborúban",
        "Esemény": "Hitler elfoglalja Csehországot",
        "Dátum": "1939.márc.",
        "Kép1": "cseh1.jpg",
        "Kép2": "cseh2.jpg",
        "Kép3": "cseh3.jpg"
    },
    {
        "Tétel": "[20] Magyarország a második világháborúban",
        "Esemény": "Magyarország elfoglalja Délvidéket",
        "Dátum": "1941.ápr.11",
        "Kép1": "delvidek1.jpg",
        "Kép2": "delvidek2.jpg",
        "Kép3": "delvidek3.jpg"
    },
    {
        "Tétel": "[20] Magyarország a második világháborúban",
        "Esemény": "Németek megszállták Ausztriát",
        "Dátum": "1938.márc.12",
        "Kép1": "ausztria1.jpg",
        "Kép2": "ausztria2.jpg",
        "Kép3": "ausztria3.jpg"
    },
    {
        "Tétel": "[20] Magyarország a második világháborúban",
        "Esemény": "Németek megszállták Magyarországot",
        "Dátum": "1944.márc.19",
        "Kép1": "nemetmegszallas1.jpg",
        "Kép2": "nemetmegszallas2.jpg",
        "Kép3": "nemetmegszallas3.jpg"
    }
]