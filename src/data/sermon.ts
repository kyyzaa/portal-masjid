export interface Verse {
  arabic: string;
  translation: string;
  reference?: string;
}

export interface Lesson {
  title: string;
  content: string;
  subpoints?: string[];
  verse?: Verse;
  quote?: {
    arabic?: string;
    indonesian: string;
    ref?: string;
  };
}

export interface SermonData {
  title: string;
  author: string;
  category: string;
  arabicOpening: string[];
  takbir: string;
  introParagraphs: string[];
  storySections: {
    text: string;
    text2?: string;
    verse?: Verse;
  }[];
  detailedStory: {
    text: string;
    text2?: string;
    text3?: string;
    text4?: string;
    verse?: Verse;
  }[];
  sacrificeProcess: {
    question: string;
    verse: Verse;
    text: string;
    text2: string;
    verse2: Verse;
    text3: string;
    verse3: Verse;
    text4: string;
    verse4: Verse;
  };
  lessons: Lesson[];
  postLessons: string[];
  closingDua: {
    arabic: string;
    translation?: string;
  }[];
}

export const sermonData: SermonData = {
  title: "Tauhid dan Cinta",
  author: "Ustadz H Jundi Abu Daud Lc MA",
  category: "Khutbah Idul Adha",
  arabicOpening: [
    "إن الحمد لله نحمده ونستعينه ونستغفره ونعوذ بالله من شرور أنفسنا وسيئات أعمالنا من يهد الله فلا mضل له ومن يضلله فلا هادي له, أشهد أن لا إله إلا الله وحده لا شريك له, وأشهد أن محمدا عبده ورسوله",
    "جعلني الله وإياكم تحت قوله جل في علاه: يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ارْجِعِي إِلَى رَبِّكِ رَاضِيَةً مَرْضِيَّةً فَادْخُلِي فِي عِبَادِي وَادْخُلِي جَنَّتِي"
  ],
  takbir: "Allahu Akbar, Allahu Akbar, Allahu Akbar walillahil hamd… Allahu Akbar, Allahu Akbar, Allahu Akbar walillahil hamd…",
  introParagraphs: [
    "Ma’aasyirol muslimin, Jama’ah shalat idul adha yang dirahmati Allah..",
    "Hari ini adalah hari kebahagian kaum muslimin di seluruh dunia…hari raya…hari bersuka cita…",
    "Hari ini semakin indah ketika kaum muslimin memulainya dengan bersujud di hadapan Allah Robbul ‘aalamiin, Sang Pencipta alam semesta…dan semakin indah lagi hari ini dipenuhi dengan gema Takbir dan Tahmid Mengagungkan Allah Ta’ala…",
    "Hari ini adalah hari ‘idul adha…hari nahr yang disebutkan oleh Allah sebagai al-hajju al-akbar. Hari terbaik sepanjang tahun.",
    "Nabi shallallahu ‘alaihi wasallam bersabda: إن أعظم الأيام عند الله تبارك وتعالى يوم النحرِ \"Sesungguhnya hari yang paling agung di sisi Allah ta’aalaa adalah hari Nahr\" (HR Abu Dawud no 1765).",
    "Pada hari ini terkumpul banyak sekali ibadah-ibadah yang agung. Bagi para Jamaah haji mereka pada hari ini melempar jamarot, mencukur rambut, menyembelih hewan hadyu, melaksanakan thowaf ifadhoh dan sa’i. Bagi yang tidak berhaji pada hari ini mereka melakukan sholat ‘iedul adha dan sebagian mereka menyembelih al-udhiyah (hewan qurban).",
    "Hari yang mulia yang kita lalui setiap tahun ini, selalu mengingatkan kita akan sebuah pengorbanan besar yang dilakukan oleh seorang ayah dan anaknya, yaitu Nabi Ibrahim dan Nabi Isma’il ‘alaihimas salam. Pengorbanan yang luar biasa yang menunjukan ketundukan yang luar biasa kepada Allah, menunjukan kecintaan yang luar biasa kepada Allah. Kisah pengorbanan mereka berdua yang Allah abadikan di dalam al-Qur’an."
  ],
  storySections: [
    {
      text: "Ketika Nabi Ibrahim mendakwahkan Tauhid, kemudian beliau dimusuhi oleh seluruh penduduk negeri -bahkan oleh ayahnya sendiri-. Ketika beliau hendak menegakkan hujjah/argument di hadapan mereka maka beliaupun menghancurkan berhala-berhala sesembahan mereka. Akhirnya merekapun murka dan hendak membakar Nabi Ibrahim hidup-hidup dengan melemparkan beliau ke lautan api. Akan tetapi Allah menolongnya dan menjadikan api menjadi dingin dan penuh keselamatan. Ketika beliau merasa bahwa kaumnya tidak akan beriman maka beliaupun meninggalkan kaumnya dan memohon kepada Allah agar diberi keturunan yang shalih.",
      verse: {
        arabic: "رَبِّ هَبْ لي مِنَ الصَّالِحِينَ 100 وَقَالَ إِنِّي ذَاهِبٌ إِلَى رَبِّي سَيَهْدِينِ 99 فَبَشَّرْنَاهُ بِغُلَامٍ حَلِيمٍ 101",
        translation: "Dan Ibrahim berkata: “Sesungguhnya aku pergi menghadap kepada Tuhanku, dan Dia akan memberi petunjuk kepadaku. Ya Tuhanku, anugrahkanlah kepadaku (seorang anak) yang termasuk orang-orang yang saleh”. Maka kami beri dia kabar gembira dengan seorang anak yang amat sabar.",
        reference: "QS As-Shooffaat : 99-101"
      }
    },
    {
      text: "Allahpun mengabulkan doa Nabi Ibrahim, sebagai ganti atas pengorbanan beliau. Beliau meninggalkan kaumnya dan kampung halamannya maka Allah menggantikan dengan anak yang sangat sholih dan menghilangkan kesepiannya. Akan tetapi anugrah anak tersebut -yaitu Nabi Isma’il- baru Allah berikan setelah Nabi Ibrahim sudah sangat tua. Sebagian ulama menjelaskan ketika umur Nabi Ibrahim di atas 80 tahun. Kita bisa bayangkan betapa sangat bernilai anak tersebut yang baru lahir setelah penantian puluhan tahun?. Betapa besar kasih sayang Ibrahim ‘alaihis salam terhadap Isma’il?. Sungguh menanti lahirnya seorang anak hingga puluhan tahun itu adalah ujian tersendiri.",
      text2: "Namun kebahagiaan tersebut tidak berlangsung lama, Allah menguji Nabi Ibrahim ketika sang anak (yaitu Isma’il) benar-benar dalam kondisi remaja, dan mulai membantu sang ayah. Pada saat umur itulah biasanya puncak kecintaan seorang ayah kepada sang anak. Allah berfirman :"
    }
  ],
  detailedStory: [
    {
      verse: {
        arabic: "فَلَمَّا بَلَغَ مَعَهُ السَّعْيَ قَالَ يَا بُنَيَّ إِنِّي أَرَى فِي الْمَنَامِ أَنِّي أَذْبَحُكَ فَانْظُرْ مَاذَا تَرَى قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ سَتَجِدُنِي إِنْ شَاءَ اللَّهُ مِنَ الصَّابِرِينَ",
        translation: "Maka ketika anak itu sampai (pada umur sanggup) berusaha bersama-sama Ibrahim, Ibrahim berkata: “Hai anakku sesungguhnya aku melihat dalam mimpi bahwa aku menyembelihmu. Maka fikirkanlah bagaimana pendapatmu!” Ia menjawab: “Wahai Ayahku, lakukankanlah apa yang diperintahkan Allah kepadamu; insya Allah kamu akan mendapati Aku termasuk orang-orang yang sabar”",
        reference: "QS As-Shooffaat : 102"
      },
      text: "Saat itu kira-kira umur Isma’il belasan tahun dan umur Ibrahim sekitar 100 tahun, dan tentu ia mulai lemah dan mulai bertumpu kepada sang anak. Saat itulah puncak kecintaan seorang ayah kepada sang anak. Namun ternyata Allah memerintahkan sang ayah (yaitu Ibrahim) untuk menyembelih sang anak.",
      text2: "Ujian ini tentu lebih berat daripada ujian ketika Nabi Ibrahim dilemparkan ke dalam lautan api. Betapa sering seorang ayah lebih mencintai anaknya dari pada dirinya sendiri.",
      text3: "Nabi Ibrahim berkata dengan penuh ketenangan : يا بني إني أرى في المنام إني إذبحك “Hai anakku sesungguhnya aku sedang melihat dalam mimpi bahwa aku menyembelihmu”. Perhatikanlah : mimpi telah berlalu…Namun Nabi Ibrahim mengungkapkannya seakan-akan beliau sedang melihat mimpi tersebut, padahal mimpi telah selesai. Ini menunjukan bahwa mimpi tersebut benar-benar hadir dalam benaknya ketika beliau menyampaikannya kepada putranya Isma’il.",
      text4: "Derajat wahyu para nabi yang paling rendah adalah melalui mimpi, lebih rendah derajatnya dari pada datangnya malaikat atau ilham langsung dari Allah apalagi bertemu langsung dengan Allah. Meskipun perintah menyembelih sang anak datang melalui derajat wahyu yang terendah namun Ibrahim sama sekali tidak ragu, tidak mesti menunggu mimpi datang untuk kedua atau ketiga kalinya, dan sama sekali tidak memberi penawaran kepada Allah, “Apakah ada perintah yang lain selain ini?”. Sama sekali tidak !!, Nabi Ibrahim langsung menunaikan perintah Allah."
    },
    {
      text: "Nabi Ibrahim ketika menyampaikan perintah ini kepada sang anak, beliau menyampaikan juga tidak dengan keras, beliau tidak berkata, “Sesungguhnya Allah telah memerintahku untuk menyembelihmu, maka kamu harus taat”. Tapi Nabi Ibrahim menyampaikannya dalam bentuk penawaran, فَانْظُرْ مَاذَا تَرَى “ Maka fikirkanlah, bagaimana pendapatmu?”. Tujuannya agar Isma’il juga bisa menjalankan ketaatan tanpa ada keterpaksaan, akan tetapi benar-benar karena tunduk kepada Allah. Agar Isma’il juga meraih pahala yang besar dari Allah.",
      text2: "Ternyata sang anak tidak kalah sabarnya dengan sang ayah. Beliau dengan serta merta menjawab يَاأَبَتِ افْعَلْ مَا تُؤْمَرُ سَتَجِدُنِي إِنْ شَاءَ اللَّهُ مِنَ الصَّابِرِينَ “ Wahai Ayahku, kerjakanlah apa yang Allah perintahkan kepadamu; insya Allah kamu akan mendapatiku termasuk orang-orang yang sabar”. Sungguh menakjubkan iman sang ayah, dan tidak kalah menakjubkan juga adalah iman sang anak.",
      text3: "Allah telah menguji Nabi Ibrahim dengan ujian yang sangat berat, karena Ibrahim telah meraih predikat yang sangat tinggi, yaitu Kholillur Rahman (kekasih Allah). Allah berfirman: وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا “Dan Allah mengambil Ibrahim sebagai kekasihNya” (QS An-Nisaa : 125). Ini adalah predikat tertinggi dan istimewa yang tidak dimiliki oleh para Nabi yang lain, kecuali Nabi Muhammad shallallahu ‘alaihi wasallam. Oleh karenanya Nabi Ibrahim diuji pada perkara yang sangat dia cintai, yaitu putranya yang semata wayang yang telah ditunggu kehadirannya puluhan tahun. Semua ini agar membuktikan bahwa kecintaannya kepada Allah lebih daripada segalanya.",
      text4: "Sungguh betapa sering seorang hamba diuji pada perkara-perkara dunia yang sangat ia cintai, apakah berkaitan dengan istrinya, atau putranya, atau mobilnya, atau rumahnya, atau perkara-perkara yang lainnya, agar Allah membuktikan bahwa kecintaannya kepada Allah lebih dari segalanya, agar hati sang hamba tersebut tidak terikat kepada perkara-perkara dunia tersebut."
    }
  ],
  sacrificeProcess: {
    question: "Bagaimanakah proses penyembelihan Nabi Isma’il?",
    verse: {
      arabic: "فَلَمَّا أَسْلَمَا وَتَلَّهُ لِلْجَبِينِ",
      translation: "Ketika keduanya telah berserah diri dan Ibrahim membaringkan anaknya di atas pelipisnya, nyatalah kesabaran keduanya",
      reference: "QS As-Shooffaat : 103"
    },
    text: "Allah memuji keduanya, bahwa keduanya telah berserah diri…inilah Islam yang sesungguhnya tunduk dan pasrah dengan perintah Allah.",
    text2: "Nabi Ibrahim membaringkan Nabi Isma’il di atas pelipisnya agar ia tidak melihat wajah anaknya yang kesakitan ketika proses penyembelihan berlangsung, khawatir dia mundur dari ujian yang berat ini. Ketika Nabi Ibrahim benar-benar akan menyembelih sang anak…dan sang anak benar-benar telah pasrah untuk disembelih…maka Allah telah mengetahui kesungguhan mereka berdua, maka ketika itu Allah Ta'ala berfirman :",
    verse2: {
      arabic: "وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ 104 قَدْ صَدَّقْتَ الرُّؤْيَا إِنَّا كَذَلِكَ نَجْزِي الْمُحْسِنِينَ 105",
      translation: "Dan Kami panggillah dia: “Wahai Ibrahim, sesungguhnya kamu telah membenarkan mimpi itu sesungguhnya demikianlah Kami memberi balasan kepada orang-orang yang berbuat baik”",
      reference: "QS As-Shooffaat : 104-105"
    },
    text3: "Artinya yaitu Wahai Ibrahim angkatlah tanganmu, hentikanlah penyembelihanmu. Sungguh engkau telah menjalankan perintah dalam mimpimu, dan Aku tidak perlu dengan darah anakmu.",
    verse3: {
      arabic: "إِنَّ هَذَا لَهُوَ الْبَلَاءُ الْمُبِينُ",
      translation: "Sesungguhnya ini benar-benar suatu ujian yang nyata",
      reference: "QS As-Shooffaat : 106"
    },
    text4: "Akhirnya Allah menurunkan tebusannya.",
    verse4: {
      arabic: "وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ",
      translation: "Dan Kami tebus anak itu dengan seekor sembelihan yang besar",
      reference: "QS As-Shooffaat : 107"
    }
  },
  lessons: [
    {
      title: "Hijrah dari Lingkungan yang Buruk",
      content: "Disyariatkannya untuk meninggalkan tempat yang merupakan konsentrasi musuh Islam di situ. Sebagaimana Nabi Ibrahim meninggalkan kampung halamannya karena seluruh kaumnya memusuhi dakwahnya."
    },
    {
      title: "Dianjurkan Berdoa Meminta Anak Shalih",
      content: "Dianjurkan untuk berdoa kepada Allah agar menganugrahkan anak yang shalih. Sungguh diantara anugrah terbesar kepada seseorang adalah memperoleh anak yang shalih."
    },
    {
      title: "Hanya Memohon Kepada Allah (Tauhid)",
      content: "Para Nabi mereka berdoa kepada Allah, karena mereka adalah hamba sehingga beribadah dan berdoa kepada sang Pencipta. Karenanya tidak boleh seseorang meminta kepada Nabi -sebagaimana kaum Nashoro meminta dan berdoa kepada Nabi Isa- apalagi meminta kepada mayat-mayat di kuburan, ini semua adalah kesyirikan."
    },
    {
      title: "Pentingnya Musyawarah Keluarga",
      content: "Disyariatkannya bermusyawarah antara seorang ayah dan anak dalam menghadapi permasalahan berat, terutama jika sang anak adalah seorang anak yang shalih dan permasalahan yang dihadapi berkaitan juga dengan sang anak."
    },
    {
      title: "Ujian Sesuai Tingkat Keimanan",
      content: "Orang yang beriman pasti diuji, dan semakin tinggi keimanan seseorang maka semakin berat ujiannya. Ujian ini sangat berat dan sangat nyata menampakan kuatnya aqidah Ibrahim dan Isma’il 'alaihimas salaam.",
      verse: {
        arabic: "إِنَّ هَذَا لَهُوَ الْبَلَاءُ الْمُبِينُ",
        translation: "Sesungguhnya ini benar-benar suatu ujian yang nyata",
        reference: "QS As-Shooffaat : 106"
      },
      quote: {
        arabic: "أَشَدُّ النَّاسِ بَلَاءً الْأَنْبِيَاءُ ثُمَّ الصَّالِحُونَ ثُمَّ الْأَمْثَلُ فَالْأَمْثَلُ",
        indonesian: "“Orang yang paling berat ujiannya adalah para nabi, kemudian orang-orang shalih, kemudian setelahnya dan setelahnya”",
        ref: "HR. Tirmidzi & Ahmad"
      },
      subpoints: [
        "Nabi Ibrahim sudah sangat tua ketika ujian tersebut mendatanginya. Beliau sangat butuh bantuan anaknya, tapi sang anak justru diperintahkan untuk disembelih.",
        "Anak yang diperintahkan disembelih adalah buah hatinya yang telah dinanti kehadirannya selama puluhan tahun.",
        "Saat itu Nabi Isma’il adalah anak semata wayang, membuat ujian semakin berat bagi hati seorang ayah.",
        "Ujian terasa jauh lebih berat ketika yang ditimpa musibah adalah buah hati tercinta, melebihi jika musibah menimpa diri sendiri.",
        "Nabi Isma’il diperintahkan disembelih saat usia remaja, saat di mana kecintaan orang tua sedang berada pada posisi puncak.",
        "Tentu wafatnya anak karena takdir kecelakaan sudah sangat memukul hati, apalagi jika sang ayah sendiri yang diperintah untuk menyembelihnya.",
        "Terlebih lagi, Isma’il adalah anak yang sangat taat kepada orang tuanya. Kehilangan anak berbakti tentu meninggalkan kesedihan mendalam."
      ]
    },
    {
      title: "Dunia Adalah Tempat Ujian Bagi Mukmin",
      content: "Jika orang kafir saja diuji oleh Allah dalam kehidupan dunia ini, apalagi orang beriman?. Justru Allah telah berjanji untuk menguji mereka. Kita tidaklah berharap untuk diuji oleh Allah, akan tetapi kenyataannya kehidupan dunia ini adalah kehidupan yang memang diciptakan oleh Allah untuk medan ujian.",
      verse: {
        arabic: "أَحَسِبَ النَّاسُ أَنْ يُتْرَكُوا أَنْ يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ 2 وَلَقَدْ فَتَنَّا الَّذِينَ مِنْ قَبْلِهِمْ فَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ صَدَقُوا وَلَيَعْلَمَنَّ الْكَاذِبِينَ 3",
        translation: "Apakah manusia mengira bahwa mereka dibiarkan saja mengatakan: “Kami telah beriman”, sedang mereka tidak diuji. Dan sesungguhnya kami telah menguji orang-orang sebelum mereka, maka sesungguhnya Allah mengetahui orang-orang yang benar dan sesungguhnya Dia mengetahui orang-orang yang dusta",
        reference: "QS Al-‘Ankabut : 2-3"
      }
    },
    {
      title: "Solusi Bagi yang Bertakwa",
      content: "Betapa besar dan berat ujian yang dihadapi oleh seseorang maka jika seseorang bertakwa kepada Allah maka pasti ada solusinya. Lihatlah Nabi Ibrahim dan Nabi Ismail bertakwa dan bersabar bahkan pasrah menghadapi ujian tersebut maka Allahpun mengirim tebusan berupa seekor domba sebagai pengganti Nabi Isma’il.",
      verse: {
        arabic: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا",
        translation: "“Barangsiapa yang bertakwa kepada Allah maka Allah akan berikan jalan keluar baginya”",
        reference: "QS At-Tholaq : 2"
      }
    },
    {
      title: "Solusi Datang di Puncak Kesulitan",
      content: "Terkadang solusi datang di puncak kesulitan. Tebusan domba tidaklah Allah datangkan kecuali ketika Nabi Ibrahim akan menyembelih putranya Isma’il. Maka janganlah seseorang pernah putus asa dalam menghadapi ujian.",
      quote: {
        indonesian: "Lihatlah Nabi Ya’qub ketika putranya Yusuf hilang, lalu adiknya Binyamin tertahan, lalu kakak mereka juga tertahan di Mesir. Di tengah kesedihan mendalam itu beliau berkata: “Maka kesabaran yang baik itulah kesabaranku. Mudah-mudahan Allah mendatangkan mereka semuanya kepadaku” (QS Yusuf: 83) dan menasehati anaknya: “Jangan kamu berputus asa dari rahmat Allah. Sesungguhnya tiada berputus asa dari rahmat Allah, melainkan kaum yang kafir” (QS Yusuf : 87)"
      }
    },
    {
      title: "Sikap Tawakkal Tanpa Rasa Ujub",
      content: "Perkataan Isma’il ketika dikabarkan tentang perintah disembelih: سَتَجِدُنِي إِنْ شَاءَ اللَّهُ مِنَ الصَّABِرِينَ “insya Allah kamu akan mendapatiku termasuk orang-orang yang sabar”. Ini adalah kalimat tawakkal kepada Allah, di mana ia menyerahkan kesabarannya kepada kehendak Allah. Kalimat yang jauh dari sikap ujub (sombong diri), dan kalimat inilah yang menyebabkan datangnya kekuatan dan pertolongan dari Allah."
    },
    {
      title: "Menyingkirkan Penghalang Ketaatan",
      content: "Sikap Nabi Ibrahim tatkala hendak menyembelih putranya dengan membaringkan Isma’il di atas pelipisnya adalah di antaranya untuk menghilangkan segala gangguan yang bisa menghalangi seseorang dalam menjalankan perintah Allah. Jika ia melihat wajah Isma’il, bisa jadi hatinya melemah. Maka, dalam beribadah kita harus menyingkirkan segala godaan dan rintangan yang mengganggu."
    },
    {
      title: "Kecintaan yang Benar VS Salah Kaprah",
      content: "Kecintaan Nabi Ibrahim kepada anaknya tidak menghalangi beliau untuk menjalankan perintah Allah. Sebaliknya, sebagian orang tua hari ini terlalu cinta kepada anaknya hingga kasihan membangunkan mereka untuk sholat subuh. Ini adalah kecintaan yang keliru dan pengkhianatan terhadap agama anak. Kasih sayang sejati adalah membimbing mereka kepada ketaatan."
    },
    {
      title: "Menghidupkan Esensi Ibadah Qurban",
      content: "Karena kisah pengorbanan Ibrahim inilah disyari’atkannya Qurban setiap tahun. Kisah ini hampir semua kaum muslimin mengetahuinya. Tapi apakah semua kaum muslimin ketika menyembelih qurban menghadirkan kisah pengorbanan ini dalam hatinya? Qurban harus didasari keikhlasan dan kepatuhan penuh."
    },
    {
      title: "Menyembelih Hanya Karena Allah (Tauhid)",
      content: "Menyembelih sembelihan karena Allah adalah ibadah yang mulia. Allah menggandengkannya langsung dengan ibadah shalat. Sebagaimana sholat tidak boleh ditujukan selain kepada Allah, maka menyembelih untuk jin, penunggu tempat, atau berhala adalah perbuatan syirik besar.",
      verse: {
        arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
        translation: "“Maka sholatlah hanya kepada Robbmu dan sembelihlah hanya kepada Robbmu”",
        reference: "QS Al-Kautsar : 2"
      }
    }
  ],
  postLessons: [
    "Allahu akbar, Allahu akbar, Allahu akbar… Para hadirin sekalian silahkan menyembelih hewan kurban kalian, semoga Allah membalas pengorbanan kalian dengan surga-Nya.",
    "Berbahagialah pada hari ini…. Masukanlah rasa senang kepada orang tua, kepada kerabat, kepada anak-anak… Beri hadiah kepada mereka… agar mereka tahu bahwasanya mereka sedang berlebaran…"
  ],
  closingDua: [
    {
      arabic: "اللَّهُمَّ صَلِّ عَلَى سَلِّمْ وَبَارِكْ وَأَنْعِمْ عَلَى نَبِيِّنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ"
    },
    {
      arabic: "اللَّهُمَّ اغْفِرْ لِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ، وَالْمُسْلِمِينَ وَالْمُسْلِمَاتِ، الْأَحْيَاءِ مِنْهُمْ وَالْأَمْوَاتِ، بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ",
      translation: "Ya Allah ampunilah kaum mukminin dan mukminat, kaum muslimin dan muslimat, yang masih hidup maupun yang telah tiada dengan rahmat-Mu, wahai Yang Maha Penyayang di antara yang penyayang…"
    },
    {
      arabic: "Ya Allah ampunilah kedua orang tua kami, yang telah bersusah payah merawat kami… Ampunilah ibu kami, yang telah bersusah payah mengandung kami selama sembilan bulan, bertarung melawan kematian ketika melahirkan kami, menahan tidur dengan berlinang air mata ketika kami sedang sakit, dan begadang demi menidurkan kami ketika masih kecil…"
    },
    {
      arabic: "Ya Allah ampunilah ayah kami yang telah bekerja keras, berpanas-panas di bawah terik matahari, membanting tulang siang dan malam, semuanya demi membiayai kehidupan kami… Ya Allah ampuni dosa-dosa kami yang tidak mampu dan kurang berbakti kepada mereka, yang belum bisa membahagiakan mereka sebagaimana mestinya, yang terkadang masih pelit dan perhitungan terhadap mereka…"
    },
    {
      arabic: "Ya Allah tolonglah saudara-saudara kami di Palestina yang hidup dalam penderitaan, yang merayakan hari lebaran dengan aliran air mata, letupan senjata, dan ledakan, serta berhari raya dengan rasa lapar dan ketakutan. Angkatlah penderitaan mereka, sabarkanlah mereka, dan kuatkanlah hati mereka…"
    },
    {
      arabic: "اللَّهُمَّ لَا تَدَعْ لَنَا فِي مَقَامِنَا هَذَا ذَنْبًا إِلَّا غَفَرْتَهُ، وَلَا مَرِيضًا إِلَّا شَفَيْتَهُ، وَلَا هَمًّا إِلَّا فَرَّجْتَهُ، وَلَا دَيْنًا إِلَّا قَضَيْتَهُ، وَلَا حَاجَةً مِنْ حَوَائِجِ الدُّنْيَا هِيَ لَكَ رِضًى وَلَنَا فِيهَا صَلَاحٌ إِلَّا أَعَنْتَنَا عَلَيْهَا وَيَسَّرْتَهَا لَنَا",
      translation: "Ya Allah, janganlah Engkau biarkan di tempat kami ini ada satu dosapun kecuali Engkau maafkan, tidak ada seorangpun yang sakit kecuali Engkau sembuhkan, tidak ada kesedihan kecuali Engkau hilangkan, tidak ada hutang kecuali Engkau lunaskan, dan tidak ada satupun kebutuhan dunia yang baik bagi kami dan Engkau ridoi kecuali Engkau menolong kami untuk meraihnya dan Engkau memudahkannya bagi kami."
    }
  ]
};
