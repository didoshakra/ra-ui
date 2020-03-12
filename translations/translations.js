//fajka/https://medium.com/swlh/how-to-build-a-multilingual-website-in-next-js-2924eeb462bc
// translations.js

const translations = {
  en: {
    loyOut_title: "MS Kalush",
    theme_Light: "Light",
    theme_Dark: "Dark",
    theme_Other: "Other",
    logo_logoTitle: "Home",
    logo_siteName: "Test Site",
    themeSwitcher_title: "Select a theme",
    localeSwitcher_title: "Select a language",
    headerMenu_iconTitleShops: "Shops",
    headerMenu_iconTitleServices: "Services",
    headerMenu_iconTitlePromotions: "Promotions",
    headerMenu_iconTitleAboutME: "About us",
    headerMenu_iconTitleHomeIcon: "Home",
    headerMenu_iconTitleSite: "Test Site",
    headerMenu_iconTitleTheme: "Change Theme (Light / Dark)",
    headerMenu_iconTitleLanguage: "Change Language",
    headerMenu_iconTitleNavMenu: "Navigation",
    pageHome_title: "Food, beverages, cigarettes, alcohol ...",
    pageHome_description: "Buy quality food",
    pageHome_Welcome: "Welcome",
    pageHome_aboutPage: `This is the homepage of the test site, which is at the beginning Development.`,
    pageHome_thankYou: "Thank you",
    pageHome_buttonAboutMe: "About US",
    pageHome_viewAll: "View All",
    pageHome_oldPromotions: "Recent promotions",
    pagePromotions_title: "Promotions",
    pagePromotions_description: "Special offer discounts",
    pageAboutMe_title: "About US",
    pageAboutMe_description: "Learn more",
    pageAboutMe_firstShop: "The first shop 'Станіславський",
    pageAboutMe_text1: `"Stanislavsky" is a chain of small grocery stores,
        Family-type pavilions and booths in Kalush. Our first store
        Opened in Kalush in 2002, which started the network
        "Stanislavsky", which now has 7 outlets. We have since
        We care about the quality of the "Stanislavsky" brand by providing our customers
        High quality of service and giving them a sense of family peace
        And complete satisfaction. We always take care of being our buyer
        Left our stores only in good spirits and positive
        Emotions. And of course, with full bags of quality products`,
    pageAboutMe_text2: `We sincerely welcome you to visit our outlets. You will not regret!!!`,
    pageShops_title: "Shops",
    pageShops_description: "Our outlets",
    pageShops_m1Title: "Shop 'Станіславський'",
    pageShops_m1Descr: "Address: Tikhogo str., 2",
    pageShops_m2Title: "Pavilion 'Продукти'",
    pageShops_m2Descr: "Address: Khmelnitsky str., 66",
    pageShops_m3Title: "Shop 'Продукти' ",
    pageShops_m3Descr: "Address: Pushkina str., 2",
    pageShops_m4Title: "Shop'Дворик'",
    pageShops_m4Descr: "Address: L.Ukrainki str., 2",
    pageShops_m5Title: "Shop 'Тютюн' ",
    pageShops_m5Descr: "Address: Dzvonarska str., 2",
    pageShops_m6Title: "Павільйон '5*5' ",
    pageShops_m6Descr: "Address:  Vinnichenko str., 2",
    pageShops_m7Title: "Shop 'Станіславський' ",
    pageShops_m7Descr: "Address: S. Banderi str., 2",
    pageShops_onMap: "Show on Map"
  },
  pl: {
    loyOut_title: "MS Kalush",
    theme_Light: "Światło",
    theme_Dark: "Сiemno",
    theme_Other: "Inny",
    themeSwitcher_title: "Wybierz motyw",
    localeSwitcher_title: "Wybierz język",
    logo_logoTitle: "Strona główna",
    logo_siteName: "Test Site",
    headerMenu_iconTitleShops: "Sklepy",
    headerMenu_iconTitleServices: "Usługi",
    headerMenu_iconTitlePromocje: "Promocje",
    headerMenu_iconTitleAboutME: "O nas",
    headerMenu_iconTitleAppIcon: "Add_ons",
    headerMenu_iconTitleHomeIcon: "Główna",
    headerMenu_iconTitleSite: "Test Site",
    headerMenu_iconTitleTheme: "Zmień motyw (jasny / ciemny)",
    headerMenu_iconTitleLanguage: "Zmień język",
    headerMenu_iconTitleNavMenu: "Nawigacja",
    pageHome_title: "Jedzenie, napoje, papierosy, alkohol ...",
    pageHome_description: "Kupuj wysokiej jakości jedzenie",
    pageHome_Welcome: "Witamy",
    pageHome_aboutPage: `To jest strona główna strony testowej, która jest na początku Rozwój.`,
    pageHome_thankYou: "Dziękuję Ci",
    pageHome_buttonAboutMe: "O nas",
    pageHome_viewAll: "Zobacz wszystko",
    pageHome_oldPromotions: "Ostatnie promocje",
    pagePromotions_title: "Promocje",
    pagePromotions_description: "Oferty specjalne rabaty",
    pageAboutMe_title: "O nas",
    pageAboutMe_description: "Dowiedz się więcej",
    pageAboutMe_firstShop: "Pierwszy sklep 'Станіславський",
    pageAboutMe_text1: `"Stanisławski" to sieć małych sklepów spożywczych,
        Rodzinne pawilony i kabiny w Kałuszu. Nasz pierwszy sklep
        Otwarto w Kalush w 2002 r., co uruchomiło sieć
        "Stanisławski", który ma teraz 7 sklepów. Mamy odtąd
        Dbamy o jakość marki "Stanisławski", zapewniając naszym klientom
        Wysoka jakość usług i poczucie spokoju rodzinnego
        I pełna satysfakcja. Zawsze dbamy o to, aby być naszym kupującym
        Opuścił nasze sklepy tylko w dobrym nastroju i pozytywnie
        Emocje I oczywiście z pełnymi workami produktu wysokiej jakości`,
    pageAboutMe_text2: `Serdecznie zapraszamy do odwiedzenia naszych punktów sprzedaży. Nie pożałujesz !!!`,
    pageShops_title: "Sklepy",
    pageShops_description: "Nasze sklepy",
    pageShops_m1Title: "Sklep 'Станіславський'",
    pageShops_m1Descr: "Adres: str. Tikhogo, 2",
    pageShops_m2Title: "Pawilon 'Продукти'",
    pageShops_m2Descr: "Adres: ul. Chmielnickiego 66",
    pageShops_m3Title: "Sklep 'Продукти'",
    pageShops_m3Descr: "Adres: ul.Puszkina, 2",
    pageShops_m4Title: "Sklep 'Дворик'",
    pageShops_m4Descr: "Adres: ul. L.Ukrainki 2",
    pageShops_m5Title: "Sklep 'Тютюн' ",
    pageShops_m5Descr: "Adres: ul. Dzvonarska 2",
    pageShops_m6Title: "Pawilon '5*5' ",
    pageShops_m6Descr: "Adres: ul. Winnichenko 2",
    pageShops_m7Title: "Sklep 'Станіславський' ",
    pageShops_m7Descr: "Adres: ul. S. Banderi 2",
    pageShops_onMap: "Pokaż na mapie"
  },
  uk: {
    loyOut_title: "RA", //=48 (40–65сим/з пробілами (мах–80))
    // themeSwitcher_title: "Виберіть тему",
    localeSwitcher_title: "Виберіть мову",
    logo_logoTitle: "На головну",
    logo_siteName: "Тестовий",
    mobileNav_title: "Навігація",
    mobileNav_itemHome: "На головну",
    mobileNav_itemAboutME: "Про нас",
    headerMenu_iconTitleAboutME: "Про нас",
    headerMenu_iconTitleHomeIcon: "На головну",
    headerMenu_iconTitleSite: "Тестовий",
    headerMenu_iconTitleOpenDrawer: "Відкрити меню",
    headerMenu_iconTitleTheme: "Змінити тему (світлу / темну)",
    headerMenu_iconTitleLanguage: "Змінити мову",
    headerMenu_iconTitleNavMenu: "Навігація",
    pageHome_Welcome: "Вітаю",
    pageHome_aboutPage: `Це домашня сторінка тестового сайту, яка знаходиться на початку розробки.`,
    pageHome_thankYou: "Дякуємо за увагу",
    pageHome_buttonAboutMe: "Про нас",
    // pageHome_viewAll: "Переглянути все",
    // pageHome_oldPromotions: "Останні акції",
    // pagePromotions_title: "Акції",
    // pagePromotions_description: "Знижки спецпропозиції",
    pageAboutMe_title: "Про нас",
    pageAboutMe_description: "Дізнайтесь більше ",
    pageAboutMe_firstShop: "Перший магазин 'Станіславський",
    pageAboutMe_text1: `"Станіславський" - мережа невеличких продуктових магазинів,
    павільйонів і кіосків сімейного типу у м.Калуші. Перший наш магазин
    відкрився у м. Калуш у 2002 році який започаткував мережу
    "Станіславський", що тепер налічує 7 торгових точок. З тих пір ми
    дбаємо про якість бренду "Станіславський", надаючи нашим покупцям
    високу якість обслуговування та даруючи їм відчуття сімейного затишку та
    повного задоволення. Ми завжди дбаємо про те, щоб наш покупець
    залишав наші магазини тільки в хорошому настрої і з позитивними
    емоціями. Ну і звичайно ж, з повними сумками якісних продуктів`,
    pageAboutMe_text2: `Щоро запрошуємо відвідати наші торгові точки. Ви не пошкодуєте!!!`,
    // pageShops_title: "Магазини",
    // pageShops_description: "Наші торгові точки",
    // pageShops_m1Title: "Магазин 'Станіславський'",
    // pageShops_m1Descr: "Адреса: вул.Тихого,2",
    // pageShops_m2Title: "Павільйон 'Продукти'",
    // pageShops_m2Descr: "Адреса: вул.Б.Хмельницького,66",
    // pageShops_m3Title: "Магазин 'Продукти'",
    // pageShops_m3Descr: "Адреса: вул.Пушкіна,2",
    // pageShops_m4Title: "Магазин'Дворик'",
    // pageShops_m4Descr: "Адреса: вул.Л.Українки,2",
    // pageShops_m5Title: "Магазин 'Тютюн' ",
    // pageShops_m5Descr: "Адреса: вул.Дзвонарська,2",
    // pageShops_m6Title: "Павільйон '5*5' ",
    // pageShops_m6Descr: "Адреса: вул.Винниченка,2",
    // pageShops_m7Title: "Магазин 'Станіславський' ",
    // pageShops_m7Descr: "Адреса: вул.С.Бандери,2",
    pageShops_onMap: "Показати на карті"
  }
};

export default translations;
