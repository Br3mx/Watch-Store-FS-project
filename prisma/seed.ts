import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getWatches() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      price: 990,
      oldPrice: 1100,
      mainImg: 'adriatica-main.jpg',
      Img1: 'adriatica-rest.jpg',
      Img2: 'adriatica-rest1.jpg',
      Img3: 'adriatica-rest2.jpg',
      name: 'ADRIATICA CLASSIC',
      model: 'A3601.1111QFZ',
      description:
        'Zegarek damski Adriatica A3601.1111QFZ to wyrafinowany wybór dla kobiety, która szuka połączenia elegancji i precyzji szwajcarskiego rzemiosła. Koperta wykonana z wysokiej jakości stali szlachetnej 316L, pokryta złotym odcieniem, jest wykończona zdobieniami z kryształków Swarovskiego, dodając zegarkowi luksusowego blasku. Tarcza wzbogacona o funkcjonalne sub-tarcze z datownikiem dni miesiąca i tygodnia oraz cykl księżycowy, co sprawia, że zegarek jest nie tylko piękny, ale i użyteczny. Wytrzymałe szafirowe szkiełko gwarantuje ochronę przed uszkodzeniami, a bransoleta, również ze stali szlachetnej, łączy w sobie wytrzymałość i ponadczasową estetykę. Mechanizm kwarcowy Ronda 706 SWISS MADE zapewnia niezawodną precyzję, a wodoszczelność do 50 metrów pozwala na bezproblemowe użytkowanie w codziennych sytuacjach',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17789',
      price: 1276,
      oldPrice: 1450,
      mainImg: 'luminox-main.jpg',
      Img1: 'luminox-rest.jpg',
      Img2: 'luminox-rest1.jpg',
      Img3: 'luminox-rest2.jpg',
      name: 'LUMINOX',
      model: 'XS.0321.BO.L',
      description:
        'Luminox Leatherback Sea Turtle Giant 0320 XS.0321.BO.L to kolejna propozycja marki Luminox, znanej z survivalowych modeli. Ten casualowy zegarek męski działa w oparciu o precyzyjny mechanizm kwarcowy Ronda 515 Swiss Made. Na analogowej tarczy umieszczone zostały datownik dni miesiąca, subtarcza czasu dobowego oraz silne podświetlenie trytowe. Całość zabezpieczona jest utwardzanym szkłem mineralnym, osadzona w kopercie z CARBONOX-u i umocowana na gumowym pasku. Urządzenie utrzymano w czarnej kolorystyce. Wodoszczelność rzędu 100 metrów zapewnia ochronę zegarka podczas pływania powierzchniowego. Gwarancja producenta wynosi 2 lata na cały model i 10 lat na podświetlenie trytowe.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a19890',
      price: 3136,
      oldPrice: 3690,
      mainImg: 'frederique-main.jpg',
      Img1: 'frederique-rest.jpg',
      Img2: 'frederique-rest1.jpg',
      Img3: 'frederique-rest2.jpg',
      name: 'FREDERIQUE CONSTANT',
      model: 'FC-220SS5B6',
      description:
        'Zegarek męski Frederique Constant Classics FC-220SS5B6 to elegancki model pasujący do garnituru. Jednak doskonale dopełni również mniej oficjalny ubiór. Delikatny wygląd to zasługa połączenia srebrnej koperty ze stali szlachetnej ze srebrną tarczą zdobioną szlifem słonecznym. Klasyczny design dopełniono brązowym paskiem uszytym ze skóry, który zapewnia tym samym doskonałą jakość i wygodę użytkowania. Użytkownik zegarka nie musi się martwić o zachlapanie urządzenia. Do zakupu dołączona jest 2-letnia gwarancja producenta oraz oryginalne pudełko.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c89378a17297',
      price: 2600,
      oldPrice: undefined,
      mainImg: 'tissot-main.jpg',
      Img1: 'tissot-rest.jpg',
      Img2: 'tissot-rest1.jpg',
      Img3: 'tissot-rest2.jpg',
      name: 'TISSOT',
      model: 'T006.407.16.033.00',
      description:
        'Zegarek męski Tissot T006.407.16.033.00 z serii Le Locle to model ceniony na całym świecie. Wyposażono go w mechanizm automatyczny Powermatic 80 Swiss Made oraz twarde szafirowe szkiełko. Wodoszczelność produktu wynosi 30 metrów. Koperta zegarka T0064071603300 została wykonana z wysokiej jakości stali szlachetnej 316L. Gwarancja producenta liczy 2 lata i jest ważna od daty zakupu',
    },
    {
      id: 'fd105551-0f0d-4ag6-bc41-c559c8a17256',
      price: 3600,
      oldPrice: undefined,
      mainImg: 'certina-main.jpg',
      Img1: 'certina-rest.jpg',
      Img2: 'certina-rest1.jpg',
      Img3: 'certina-rest2.jpg',
      name: 'CERTINA',
      model: 'C033.051.22.118.01',
      description:
        'Tradycyjne szwajcarskie zegarmistrzostwo, klasyczna kolorystyka, materiały premium i nowoczesne rozwiązania – taki właśnie jest damski zegarek DS-8 Lady COSC C033.051.22.118.01 od marki Certina. Produkt, dzięki srebrno-złotej stylistyce, wkomponuje się w wiele formalnych i codziennych stylizacji. Subtelny kobiecy projekt podkreśla tarcza z masy perłowej. Model jest wysokiej klasy chronometrem wyposażonym w mechanizm kwarcowy z technologią Precidrive™ i funkcją datownika. Jego precyzję potwierdza certyfikat COSC. Zegarek Certina C0330512211801 został wyposażony w system zabezpieczeń Double Security. Jest wodoszczelny w klasie 10 ATM.',
    },
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
