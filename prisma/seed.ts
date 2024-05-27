import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getWatches() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      price: 990,
      oldPrice: 1100,
      mainImg: 'adriatica-main.jpg',
      folder: 'adriatica',
      Img1: 'adriatica-rest.jpg',
      Img2: 'adriatica-rest1.jpg',
      Img3: 'adriatica-rest2.jpg',
      name: 'ADRIATICA CLASSIC',
      category: 'Women',
      model: 'A3601.1111QFZ',
      description:
        'Zegarek damski Adriatica A3601.1111QFZ to wyrafinowany wybór dla kobiety, która szuka połączenia elegancji i precyzji szwajcarskiego rzemiosła. Koperta wykonana z wysokiej jakości stali szlachetnej 316L, pokryta złotym odcieniem, jest wykończona zdobieniami z kryształków Swarovskiego, dodając zegarkowi luksusowego blasku. Tarcza wzbogacona o funkcjonalne sub-tarcze z datownikiem dni miesiąca i tygodnia oraz cykl księżycowy, co sprawia, że zegarek jest nie tylko piękny, ale i użyteczny. Wytrzymałe szafirowe szkiełko gwarantuje ochronę przed uszkodzeniami, a bransoleta, również ze stali szlachetnej, łączy w sobie wytrzymałość i ponadczasową estetykę. Mechanizm kwarcowy Ronda 706 SWISS MADE zapewnia niezawodną precyzję, a wodoszczelność do 50 metrów pozwala na bezproblemowe użytkowanie w codziennych sytuacjach',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17789',
      price: 1276,
      oldPrice: 1450,
      mainImg: 'luminox-main.jpg',
      folder: 'luminox',
      Img1: 'luminox-rest.jpg',
      Img2: 'luminox-rest1.jpg',
      Img3: 'luminox-rest2.png',
      name: 'LUMINOX',
      category: 'Men',
      model: 'XS.0321.BO.L',
      description:
        'Luminox Leatherback Sea Turtle Giant 0320 XS.0321.BO.L to kolejna propozycja marki Luminox, znanej z survivalowych modeli. Ten casualowy zegarek męski działa w oparciu o precyzyjny mechanizm kwarcowy Ronda 515 Swiss Made. Na analogowej tarczy umieszczone zostały datownik dni miesiąca, subtarcza czasu dobowego oraz silne podświetlenie trytowe. Całość zabezpieczona jest utwardzanym szkłem mineralnym, osadzona w kopercie z CARBONOX-u i umocowana na gumowym pasku. Urządzenie utrzymano w czarnej kolorystyce. Wodoszczelność rzędu 100 metrów zapewnia ochronę zegarka podczas pływania powierzchniowego. Gwarancja producenta wynosi 2 lata na cały model i 10 lat na podświetlenie trytowe.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a19890',
      price: 3136,
      oldPrice: 3690,
      mainImg: 'frederique-main.jpg',
      folder: 'frederique',
      Img1: 'frederique-rest.jpg',
      Img2: 'frederique-rest1.jpg',
      Img3: 'frederique-rest2.jpg',
      name: 'FREDERIQUE CONSTANT',
      category: 'Men',
      model: 'FC-220SS5B6',
      description:
        'Zegarek męski Frederique Constant Classics FC-220SS5B6 to elegancki model pasujący do garnituru. Jednak doskonale dopełni również mniej oficjalny ubiór. Delikatny wygląd to zasługa połączenia srebrnej koperty ze stali szlachetnej ze srebrną tarczą zdobioną szlifem słonecznym. Klasyczny design dopełniono brązowym paskiem uszytym ze skóry, który zapewnia tym samym doskonałą jakość i wygodę użytkowania. Użytkownik zegarka nie musi się martwić o zachlapanie urządzenia. Do zakupu dołączona jest 2-letnia gwarancja producenta oraz oryginalne pudełko.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c89378a17297',
      price: 2600,
      oldPrice: undefined,
      mainImg: 'tissot-main.jpg',
      folder: 'tissot',
      Img1: 'tissot-rest.jpg',
      Img2: 'tissot-rest1.jpg',
      Img3: 'tissot-rest2.jpg',
      name: 'TISSOT',
      category: 'Men',
      model: 'T006.407.16.033.00',
      description:
        'Zegarek męski Tissot T006.407.16.033.00 z serii Le Locle to model ceniony na całym świecie. Wyposażono go w mechanizm automatyczny Powermatic 80 Swiss Made oraz twarde szafirowe szkiełko. Wodoszczelność produktu wynosi 30 metrów. Koperta zegarka T0064071603300 została wykonana z wysokiej jakości stali szlachetnej 316L. Gwarancja producenta liczy 2 lata i jest ważna od daty zakupu',
    },
    {
      id: 'fd105551-0f0d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105541-0f0d-4ag6-bc41-c559c8a17256',
      price: 319,
      oldPrice: 485,
      mainImg: 'timex-main.jpg',
      folder: 'timex',
      Img1: 'timex-rest.jpg',
      Img2: 'timex-rest1.jpg',
      Img3: 'timex-rest2.jpg',
      name: 'Timex Essential Fairfield',
      category: 'Women',
      model: 'TW2R26500',
      description:
        'Zegarek damski Fairfield TW2R26500 to ciekawy czasomierz o indywidualnym charakterze. Podstawę stanowi solidna koperta z mosiądzu. Osadzono w niej wyraźną, jasną tarczę, wyposażoną w niezawodne podświetlenie Indiglo, charakterystyczne dla wielu zegarków marki Timex. Całość dopełnia złota bransoleta ze stali nierdzewnej. Wysokiej jakości materiały zapewniają wygodę i trwałość czasomierza. Wodoszczelność klasy 30 metrów oznacza odporność na zachlapania. Zegarek damski Fairfield TW2R26500 objęto 2-letnią gwarancją',
    },

    {
      id: 'fd105531-0f0d-4ag6-bc41-c559c8a17256',
      price: 239,
      oldPrice: undefined,
      mainImg: 'bowa-main.jpg',
      folder: 'bowa',
      Img1: 'bowa-rest.jpg',
      Img2: 'bowa-rest1.jpg',
      Img3: 'bowa-rest2.jpg',
      name: 'Bowa Praha',
      category: 'Women',
      model: 'PH385-95-185M',
      description:
        'Bowa-PH385-95-185M Praha to model charakteryzujący się wyjątkowym odcieniem tarczy w odcieniu Tiffany Blue, kojarzonym z luksusem i elegancją. By podkreślić tę wyjątkową barwę, tarcze ozdobiono dodatkowo szlifem słonecznym. Wysublimowane analogowe wskazówki i indeksy liniowe w odcieniu srebrnym, tworzą unikalne zestawienie z jego tłem. Bransoleta typu mesh w kolorze srebra podkreśla piękno każdego detalu i nadaje modelowi nieco biżuteryjnego charakteru. Produkt jest objęty dwuletnią gwarancją.',
    },
    {
      id: 'fd105521-0f0d-4ag6-bc41-c559c8a17256',
      price: 1140,
      oldPrice: undefined,
      mainImg: 'adriaticamoon-main.jpg',
      folder: 'adriatica',
      Img1: 'adriaticamoon-rest.jpg',
      Img2: 'adriaticamoon-rest1.jpg',
      Img3: 'adriaticamoon-rest2.jpg',
      name: 'Adriatica Moonphase ',
      category: 'Women',
      model: 'A3802.2193QF',
      description:
        'Adriatica Moonphase A3802.2193QF to zdecydowanie wyjątkowy, damski model, który zwraca uwagę. Srebrna tarcza zdobiona kilkoma kryształkami została wyposażona w subtarczę datownika dnia miesiąca i dnia tygodnia, a także we wskaźnik faz księżyca. Cyferblat posiada także zabezpieczenie, które wykonano z utwardzanego szkła mineralnego. Szwajcarski mechanizm kwarcowy, dokładnie i precyzyjnie odmierza czas. Wodoszczelność wynosi 5 ATM.',
    },
    {
      id: 'fd105511-0f0d-4ag6-bc41-c559c8a17256',
      price: 2940,
      oldPrice: undefined,
      mainImg: 'herbelin-main.jpg',
      folder: 'herbelin',
      Img1: 'herbelin-rest.jpg',
      Img2: 'herbelin-rest1.jpg',
      Img3: 'herbelin-rest2.jpg',
      name: 'Herbelin Art Deco',
      category: 'Women',
      model: '17478BP59 (17478/P59B2P)',
      description:
        'Zegarek damski Herbelin Art Deco 17478/P59B2P to zjawiskowy i niezwykle elegancki model, który idealnie dopasuje się do eleganckich stylizacji. Perłowa tarcza, została ozdobiona diamentami, które umieszczono w miejscu odpowiednich godzin. Zabezpieczenie cyferblatu, stanowi niezwykle twarde szkło szafirowe, które w skali twardości Mohsa widnieje na 9 pozycji. Wodoodporność oceniona w klasie 50 metrów, zapewnia ochronę mechanizmu, podczas przypadkowego, większego kontaktu z wodą.',
    },

    {
      id: 'fd105501-0f0d-4ag6-bc41-c559c8a17256',
      price: 1839,
      oldPrice: undefined,
      mainImg: 'suunto-main.jpg',
      folder: 'suunto',
      Img1: 'suunto-rest.jpg',
      Img2: 'suunto-rest1.jpg',
      Img3: 'suunto-rest2.jpg',
      name: 'Suunto Race All Black',
      category: 'Smartwatch',
      model: 'SS050929000',
      description:
        'Suunto Race All Black SS050929000 to zegarek sportowy z dużym wyświetlaczem, idealny na trening i zawody. Zarówno koperta z poliamidu wzmocnionego włóknem szklanym, jak i silikonowy pasek utrzymane są w klasycznej czerni. Dotykowy ekran AMOLED przed uszkodzeniami zabezpiecza szkło szafirowe. Cyfrowa koronka znacząco ułatwia nawigację po menu. Model wyposażono w wiele praktycznych funkcji dotyczących treningów (ponad 95 trybów sportowych), zdrowia i życia codziennego. Znajdziemy tu m.in. barometr, wysokość na podstawie GPS, funkcje pogodowe, kompas, nawigację z punktami orientacyjnymi i wizualizacją trasy czy też wskaźniki spalania kalorii i tętna podczas codziennych aktywności. Licząca 100 metrów wodoszczelność umożliwia nurkowanie z urządzeniem na nadgarstku. Produkt został objęty dwuletnią gwarancją producenta.',
    },
    {
      id: 'fd105551-1f0d-4ag6-bc41-c559c8a17256',
      price: 383,
      oldPrice: undefined,
      mainImg: 'alexa-main.jpg',
      folder: 'alexa',
      Img1: 'alexa-rest.jpg',
      Img2: 'alexa-rest1.jpg',
      Img3: 'alexa-rest2.jpg',
      name: 'Alexa Lux Gold SET ',
      category: 'Smartwatch',
      model: 'SWU501LGD ',
      description:
        'Manta Alexa Lux Gold SET SWU501LGD to casualowy smartwatch damski dla osób, które szukają funkcjonalnego dodatku o gustownym wyglądzie. Zarówno okrągła koperta, jak i bransoleta mesh utrzymane są w pięknym złotym kolorze. Nowoczesny wyświetlacz okala okrągła obudowa, która stanowi świetne dopełnienie każdego elementu. Dzięki ultracienkiej obudowie urządzenie z łatwością zmieści się pod mankietem koszuli. Uniwersalność zegarka zawdzięczamy obecności różnorodnych funkcji połączonych z eleganckim designem. Jeśli chcesz, by towarzyszyły Ci 22 tryby sportowe, alarm, akcelerometr, krokomierz, licznik kalorii, minutnik, monitor snu, pulsometr, żyroskop, przypomnienie o ruchu czy możliwość sterowania muzyką z telefonu, to nie czekaj i wybierz odpowiedni dla siebie Smartwatch Manta!',
    },
    {
      id: 'fd105551-2f0d-4ag6-bc41-c559c8a17256',
      price: 254,
      oldPrice: 299,
      mainImg: 'garett-main.jpg',
      folder: 'garett',
      Img1: 'garett-rest.jpg',
      Img2: 'garett-rest1.jpg',
      Img3: 'garett-rest2.jpg',
      name: 'Smartwatch Garett GRC STYLE Gold ',
      category: 'Smartwatch',
      model: '5904238484852 ',
      description:
        'Garett GRC STYLE Gold 5904238484852 to stylowy smartwatch, idealny na każdą okazję. Wyświetlacz obsługiwany dotykowo z podświetleniem i personalizacją za pomocą różnych tarcz do wyboru został zabezpieczony szkłem hesalitowym. Urządzenie posiada szereg ciekawych funkcji, wśród których znajdują się: wykonywanie zdjęć telefonem, sterowanie odtwarzaniem muzyki z telefonu, alarm rozładowania, pulsometr, ciśnieniomierz, pulsoksymetr, krokomierz, monitor braku aktywności, przypomnienia o nawodnieniu, monitor snu, informacje pogodowe, odtworzenie pokonanej trasy, stoper, minutnik oraz budzik. Powiadomienie o przychodzącej wiadomości SMS, połączeniu lub aplikacji zegarek poinformuje Cię w formie sygnału dźwiękowego lub wibracji. Na co dzień sprawdzi się także funkcja szukania telefonu, czy funkcja szukania urządzenia. Miłośnicy różnego rodzaju ruchu i aktywności fizycznej będą zachwyceni szerokim wyborem trybów sportowych. Wodoszczelność została oceniona na poziomie IP68.',
    },

    {
      id: 'fd105551-3f0d-4ag6-bc41-c559c8a17256',
      price: 1170,
      oldPrice: 1499,
      mainImg: 'polar-main.jpg',
      folder: 'polar',
      Img1: 'polar-rest.jpg',
      Img2: 'polar-rest1.jpg',
      Img3: 'polar-rest2.jpg',
      name: 'Zegarek sportowy Polar Ignite 3 Night Black',
      category: 'Smartwatch',
      model: '725882062488',
      description:
        'Polar Ignite 3 Night Black 725882062488 to najnowsza wersja sportowego zegarka dla osób, które chcą zadbać o swoje zdrowie oraz kondycję. Model nie tylko zmotywuje do codziennego treningu i aktywności, ale również pomoże odnaleźć rytm twojego organizmu. Polar Ignite 3 to sportowa wytrzymałość i funkcjonalność połączona ze stylowym designem. Zegarek sportowy składa się z czarnej koperty z lekkiego tworzywa, ciemnego paska z elastycznego silikonu oraz kolorowego, dotykowego wyświetlacza AMOLED zabezpieczonego szkiełkiem Gorilla Glass. Płynne i niezawodne działanie urządzenia to zasługa zaawansowanego procesora z dwa razy szybszym interfejsem. Polar Ignite 3 Night Black to również mocniejsza bateria, dłuższy czas działania oraz najnowocześniejsza technologia dzięki Precision Prime™. Wodoszczelność licząca 30 metrów oraz zgodność z normą ISO 22810 pozwala na uprawianie aktywności wodnych w tym również pływanie. Do zestawu dołączono kabel ładujący.',
    },
    /*
    {
      id: 'fd105551-4f0d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-5f0d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-6f0d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-7f0d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-8f0d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-9f0d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f1d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f2d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f3d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f4d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f5d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f6d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f7d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f8d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f9d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f0d-4ag5-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f0d-4ag4-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f0d-4ag3-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f0d-4ag2-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    {
      id: 'fd105551-0f0d-4ag1-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      folder: 'certina',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      category: 'Women',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
    */
  ];
}

function getClients() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17201',
      name: 'John Doe',
      address: '123 Main Street, London',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17202',
      name: 'Jane Doe',
      address: 'Baker Street 12B, New York',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17203',
      name: 'Thomas Jefferson',
      address: '321 Main Street, London',
    },
  ];
}

function getOrders() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17203',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      productId: 'fd105551-0f0d-4a9f-bc41-c89378a17297',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17202',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      productId: 'fd105551-0f0d-4a9f-bc41-c89378a17297',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17201',
    },
  ];
}

async function seed() {
  await db.watch.deleteMany();
  await db.client.deleteMany();
  await db.order.deleteMany();

  await Promise.all(
    getWatches().map((watch) => {
      return db.watch.create({ data: watch });
    }),
  );

  await Promise.all(
    getClients().map((client) => {
      return db.client.create({ data: client });
    }),
  );

  await Promise.all(
    getOrders().map(({ productId, clientId, ...orderData }) => {
      return db.order.create({
        data: {
          ...orderData,
          product: {
            connect: { id: productId },
          },
          client: {
            connect: { id: clientId },
          },
        },
      });
    }),
  );
}

seed();
