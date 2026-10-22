/* ==========================================================================
   BOOK DATA
   All books of the website, grouped into categories and series.
   The category pages (kategorie.html) are built automatically from this list.

   To add a real cover later, give the book a "cover" path, for example:
     { title: 'Haie', cover: 'bilder/03 Kack dich schlau & Kack mich schlau/Kack mich schlau/KMS Haie.jpg' }
   Books without a cover show the placeholder image.
   ========================================================================== */

const placeholderCoverPath = 'bilder/platzhalter-cover.svg';

const bookCategories = [

  /* ----- Kack dich schlau & Kack mich schlau ----- */
  {
    id: 'kack-dich-mich-schlau',
    title: 'Kack dich / mich schlau',
    emoji: '💩',
    description: 'Kurioses Wissen für das stille Örtchen – für Kinder ab 8, für Erwachsene und für Erstleser. Jeder Band steckt voller verrückter, echter Fakten rund um ein Thema.',
    series: [
      {
        id: 'kack-mich-schlau-junior',
        title: 'Kack mich schlau Junior',
        subtitle: 'für Kinder ab 8',
        books: [
          { title: 'Tiere-Edition' },
          { title: 'Haie' },
          { title: 'Dinosaurier' },
          { title: 'Tiefsee' },
          { title: 'Der menschliche Körper' },
          { title: 'Planeten, Sterne & das Universum' },
          { title: 'Schwarze Löcher-Edition' },
          { title: 'Aliens' },
          { title: 'Vulkane-Edition' },
          { title: 'Naturkatastrophen-Edition' },
          { title: 'Feuer-Edition' },
          { title: 'Geschichte-Edition' },
          { title: 'Verrückte Geschichte' },
          { title: 'Das alte Ägypten' },
          { title: 'Wikinger-Edition' },
          { title: 'Piraten-Edition' },
          { title: 'Frauen, die Geschichte schrieben' },
          { title: 'Erfindungen-Edition' },
          { title: 'Künstliche Intelligenz' },
          { title: 'Spannende Mathematik' },
          { title: 'Weltwunder' },
          { title: 'Rekorde', detail: '28 verrückte Weltrekorde' },
          { title: 'Verrückte Gesetze aus aller Welt' },
          { title: 'Verrückte Berufe' },
          { title: 'Absurde Hobbys aus aller Welt' },
          { title: 'Fußballbuch' },
          { title: 'WM-Edition', detail: 'Fußball-Fakten' },
          { title: 'Autos & Rennwagen-Edition' },
          { title: 'Gaming-Fakten' },
          { title: 'Fast-Food-Edition' },
          { title: 'Ekelige Fakten' },
          { title: 'Furz-Edition' },
          { title: 'Halloween-Edition' },
          { title: 'Advent-Edition' },
          { title: 'Einschulung' },
          { title: 'Mutmachbuch' },
          { title: 'Mutmachbuch', detail: 'weitere Ausgabe' },
          { title: 'Norwegen-Edition' },
          { title: 'Gross Out Junior' },
        ],
      },
      {
        id: 'kack-dich-schlau',
        title: 'Kack dich schlau',
        subtitle: 'für Erwachsene',
        books: [
          { title: 'Mama-Edition' },
          { title: 'Papa-Edition' },
          { title: 'Opa-Edition' },
          { title: 'Für frischgebackene Eltern' },
          { title: 'Patchwork-Familie' },
          { title: 'Hochzeits-Edition' },
          { title: 'Das Rentnerbuch' },
          { title: 'Midlife-Crisis-Edition' },
          { title: 'Lehrerin-Edition' },
          { title: 'Büro-Edition' },
          { title: 'Handwerker-Edition' },
          { title: 'Hausbau-Edition' },
          { title: 'Garten-Edition' },
          { title: 'Grillmeister-Edition' },
          { title: 'Angler-Edition' },
          { title: 'Hunde-Edition' },
          { title: 'Kaffee-Edition' },
          { title: 'Whisky-Edition' },
          { title: 'Winzer-Edition' },
          { title: 'Wichtelwissen' },
          { title: 'Kreuzfahrt-Edition' },
          { title: 'Schweiz-Edition' },
        ],
      },
      {
        id: 'kack-dich-schlau-camping',
        title: 'Kack dich schlau – Camping-Editionen',
        subtitle: 'für Camper & Dachzelt-Fans',
        books: [
          { title: 'Camping-Edition' },
          { title: 'Wohnmobil-Edition' },
          { title: 'Wohnmobil-Geschenk für Camper' },
          { title: 'Vanlife-Edition' },
          { title: 'Unnützes Wissen für Camper & Dachzelt-Fans' },
        ],
      },
      {
        id: 'stinktier-wissen',
        title: 'Stinktier-Wissen',
        subtitle: 'für Erstleser (6–8 Jahre)',
        books: [
          { title: 'Weltall-Edition' },
          { title: 'Tiere-Edition' },
          { title: 'Dinosaurier-Edition' },
        ],
      },
    ],
  },

  /* ----- Kinder- & Jugendbücher ----- */
  {
    id: 'kinderbuecher',
    title: 'Kinder- & Jugendbücher',
    emoji: '🧒',
    description: 'Vorlesegeschichten, Detektiv-Rätsel, witzige Bücher für Mädchen und Wissensbücher über Weltraum und Berufe – für Kinder von 4 bis 12.',
    series: [
      {
        id: 'lumo-trilogie',
        title: 'Die Lumo-Trilogie',
        subtitle: 'Vorlesebücher ab 4',
        books: [
          { title: 'Der Platz zwischen den Sternen', detail: 'Band 1' },
          { title: 'Der Stern, der einen Freund fand', detail: 'Band 2' },
          { title: 'Die Wolke, die nirgendwo blieb', detail: 'Band 3' },
        ],
      },
      {
        id: 'nele',
        title: 'Nele',
        subtitle: 'witzige Bücher für Mädchen ab 9',
        books: [
          { title: 'Das war der schlimmste Schulwechsel aller Zeiten', detail: 'Band 1' },
          { title: 'Das war das chaotischste Handy aller Zeiten' },
          { title: 'Das war das wildeste Ferienlager aller Zeiten', detail: 'Band 3' },
          { title: 'Das war die verrückteste Klassenfahrt aller Zeiten', detail: 'Band 4' },
          { title: 'Das war das turbulenteste Weihnachten aller Zeiten', detail: 'Band 5' },
        ],
      },
      {
        id: 'kleine-entdecker',
        title: 'Kleine Entdecker – Weltraum',
        subtitle: 'Wissensbücher ab 4',
        books: [
          { title: 'Sonnensystem & Planeten einfach erklärt', detail: 'Band 1 · ab 4' },
          { title: 'Raketen, Astronauten & Weltall', detail: 'Band 2 · ab 4' },
          { title: 'Mond, Mars & Raumfahrt', detail: 'Band 3 · ab 7' },
        ],
      },
      {
        id: 'ich-bin-dabei',
        title: 'Ich bin dabei!',
        subtitle: 'Berufe-Mitmachbücher ab 6',
        books: [
          { title: 'Ich bin Ärztin!' },
          { title: 'Ich bin Feuerwehrmann!' },
          { title: 'Ich bin Pilotin!' },
          { title: 'Ich bin Polizistin!' },
        ],
      },
      {
        id: 'bilder-vorlesebuecher',
        title: 'Bilder- & Vorlesebücher',
        subtitle: 'Mutmachgeschichten',
        books: [
          { title: 'Der kleine Hase, der sich traute' },
          { title: 'The Brave Little Bunny', detail: 'englische Ausgabe' },
          { title: 'The Brave Little Bunny’s Big Adventure', detail: 'englische Ausgabe' },
        ],
      },
      {
        id: 'blang-akten',
        title: 'Die B.L.A.N.G.-Akten',
        subtitle: 'Detektiv-Rätsel ab 8',
        books: [
          { title: 'Akte Sommer', detail: 'Band 1' },
          { title: 'Akte Herbst', detail: 'Band 2' },
        ],
      },
    ],
  },

  /* ----- Malen, Mitmachen & Freundebücher ----- */
  {
    id: 'malen-mitmachen',
    title: 'Malen, Mitmachen & Freundebücher',
    emoji: '🎨',
    description: 'Malbücher, Mitmachbücher für die Ferien, Freundebücher für Kita und Schule und alles rund um den Wichtel zur Weihnachtszeit.',
    series: [
      {
        id: 'malbuecher',
        title: 'Malbücher',
        subtitle: 'für Kinder und Erwachsene',
        books: [
          { title: 'Einhorn Malbuch', detail: 'ab 4 Jahren' },
          { title: 'Malbuch Feen und Einhörner', detail: 'ab 4 Jahren' },
          { title: 'Süßes Kawaii Malbuch', detail: '4–8 Jahre' },
          { title: 'Unicorn Coloring Book for Kids', detail: 'englisch' },
          { title: 'Cute Ghost Coloring Book', detail: 'englisch' },
          { title: 'Inspiring Coloring Book for Adults', detail: 'englisch' },
          { title: 'Inspiring Coloring Book for Adults', detail: 'weitere Ausgabe' },
        ],
      },
      {
        id: 'mitmachbuecher',
        title: 'Mitmachbücher',
        subtitle: 'Rätseln, Basteln, Backen',
        books: [
          { title: 'Sommerferien Mitmachbuch', detail: 'ab 6 Jahren' },
          { title: 'Weihnachtsbackbuch für Kinder' },
        ],
      },
      {
        id: 'freundebuecher',
        title: 'Freundebücher',
        subtitle: 'für Kita, Schule und Erwachsene',
        books: [
          { title: 'Mein Kindergarten-Freundebuch' },
          { title: 'Mein erstes Superhelden Freundebuch' },
          { title: 'Mein zauberhaftes Einhorn Freundebuch' },
          { title: 'Freundebuch Kindergarten für Mädchen', detail: 'Tschüss Kita, Hallo Schule!' },
          { title: 'Freundebuch für Erwachsene' },
        ],
      },
      {
        id: 'wichtelbuecher',
        title: 'Wichtel & Advent',
        subtitle: 'Ideen für die Weihnachtszeit',
        books: [
          { title: 'Wichteltür Ideen für Kinder', detail: 'Das große Wichtelbuch' },
          { title: 'Der Wichtel hat’s eilig', detail: '55 Wichtelstreiche in 5 Minuten' },
          { title: 'Der Wichtel im Kindergarten', detail: 'für Kita & Kindergarten' },
          { title: 'Wichteltür Zubehör zum Ausschneiden', detail: 'über 100 Vorlagen' },
          { title: 'Wichtel Malbuch', detail: 'ab 6 Jahren' },
        ],
      },
    ],
  },

  /* ----- Lustige Geschenke & Survival Guides ----- */
  {
    id: 'geschenke',
    title: 'Lustige Geschenke & Survival Guides',
    emoji: '😂',
    description: 'Humorvolle Geschenkbücher für Kollegen, Hundefans und Gamer, Überlebensbücher für Studium und Führerschein und alles für Hochzeit und JGA.',
    series: [
      {
        id: 'das-klobuch',
        title: 'Das Klobuch',
        subtitle: 'Lesestoff fürs stille Örtchen',
        books: [
          { title: 'Das Klobuch für Erzieherinnen' },
          { title: 'Das Klobuch für Lehrerinnen' },
          { title: 'Das Klobuch für Friseurinnen' },
          { title: 'Das Klobuch für Schwiegertöchter' },
          { title: 'Das Klobuch für Wohnmobilfahrer' },
          { title: 'Klo-Gästebuch' },
        ],
      },
      {
        id: 'absurde-fakten',
        title: '300 Absolut Absurde Fakten',
        subtitle: 'für jeden Beruf',
        books: [
          { title: '300 absurde IT-Fakten' },
          { title: '300 lustige Lehrer-Sprüche & Fakten' },
          { title: '300 lustige Pflege-Fakten & Sprüche' },
          { title: 'Lustiges Handwerker-Buch' },
        ],
      },
      {
        id: 'hunde',
        title: 'Was denkt mein Hund wirklich?',
        subtitle: 'für Hundefans',
        books: [
          { title: 'Was mein Mops wirklich denkt' },
          { title: 'Was mein Dackel wirklich denkt' },
          { title: 'Was mein Frenchie wirklich denkt' },
        ],
      },
      {
        id: 'ueberlebensbuch',
        title: 'Das Überlebensbuch',
        subtitle: 'für die großen Herausforderungen',
        books: [
          { title: 'Das Überlebensbuch fürs erste Semester', detail: 'mit Mia, Band 1' },
          { title: 'Das Überlebensbuch für die Prüfungsphase', detail: 'mit Mia, Band 2' },
          { title: 'Das Überlebensbuch für den Führerschein' },
          { title: 'Das Überlebensbuch fürs erste Ehejahr' },
          { title: 'Überlebensbuch Handwerker' },
          { title: 'Das Überlebenshandbuch für Väter' },
        ],
      },
      {
        id: 'hochzeit-jga',
        title: 'Hochzeit & JGA',
        subtitle: 'für Trauzeugen, Brautjungfern und Gäste',
        books: [
          { title: 'Trauzeuge Survival Guide' },
          { title: 'Trauzeuge Aufgaben' },
          { title: 'Brautjungfer Survival Guide' },
          { title: 'Schwiegermütter Survival Guide' },
          { title: 'Junggesellenabschied Gästebuch – R.I.P. Freiheit' },
          { title: 'R.I.P. Freedom – Bachelorette Party Guest Book', detail: 'englisch' },
        ],
      },
      {
        id: 'weitere-geschenkideen',
        title: 'Weitere Geschenkideen',
        subtitle: 'für alle, die schon alles haben',
        books: [
          { title: 'Dieses Buch enthält absolut nichts', detail: 'für Kollegen' },
          { title: 'Gamer Snacks – Essen ohne Respawn' },
          { title: 'Der Bier-Adventskalender für Männer', detail: 'Prost durch den Advent' },
          { title: 'Kack dich reich?', detail: 'Buch schreiben mit KI und bei Amazon KDP veröffentlichen' },
        ],
      },
    ],
  },

  /* ----- Familie & Paare ----- */
  {
    id: 'familie-paare',
    title: 'Familie & Paare',
    emoji: '👨‍👩‍👧',
    description: 'Persönliche Ausfüllbücher, ehrliche Mama-Bücher und emotionale Geschenke für Eltern, Paare und besondere Erinnerungen.',
    series: [
      {
        id: 'mama-papa',
        title: 'Mama & Papa',
        subtitle: 'Geschenke zum Muttertag und Vatertag',
        books: [
          { title: 'Das ehrliche Mama-Buch', detail: 'Schwangerschaft & erstes Kind' },
          { title: 'Mama hatte recht (leider)' },
          { title: 'Lustiges Mama-Buch' },
          { title: 'Muttertagsgeschenk für Mama', detail: 'Ausfüllbuch von der Tochter' },
          { title: 'Muttertagsgeschenk von Sohn' },
          { title: 'Erinnerungsbuch Papa', detail: 'Fragen an Papa' },
          { title: 'Papa-Geschenk von Tochter', detail: 'Ausfüllbuch' },
          { title: 'Vatertagsgeschenk von Sohn', detail: 'Ausfüllbuch' },
        ],
      },
      {
        id: 'fuer-paare',
        title: 'Für Paare',
        subtitle: 'zum Lachen, Erinnern und Näherkommen',
        books: [
          { title: 'Erinnerungsbuch für Paare – WIR, erzähl mal' },
          { title: 'Wie gut kennt ihr euch wirklich?', detail: '30 Challenges für Paare' },
          { title: 'Ich liebe dich… obwohl du nervst', detail: 'Ausfüllbuch für Paare' },
        ],
      },
      {
        id: 'erinnern-organisieren',
        title: 'Erinnern & Organisieren',
        subtitle: 'Begleiter für besondere Lebenslagen',
        books: [
          { title: 'Sternenkind Erinnerungsbuch' },
          { title: 'ADHS Planer für Erwachsene' },
        ],
      },
    ],
  },

  /* ----- Romane & Thriller ----- */
  {
    id: 'romane',
    title: 'Romane & Thriller',
    emoji: '📚',
    description: 'Dunkle Geheimnisse in Heidelberg, Dramen, Thriller und Dark Fantasy – Geschichten zum Abtauchen.',
    series: [
      {
        id: 'dark-academia',
        title: 'Dark Academia – Schatten über Heidelberg',
        subtitle: 'Romanreihe',
        books: [
          { title: 'Die Bibliothek der verlorenen Namen', detail: 'Band 1' },
          { title: 'Das Schweigen des Theo Warnecke' },
          { title: 'Das Schweigen des Theo Warnecke', detail: 'weitere Ausgabe' },
          { title: 'Was bleibt' },
          { title: 'Was bleibt', detail: 'Band 5' },
        ],
      },
      {
        id: 'weitere-romane',
        title: 'Weitere Romane',
        subtitle: 'Drama, Thriller & Fantasy',
        books: [
          { title: 'Rosenweg 9', detail: 'Drama / Thriller' },
          { title: 'Rosenweg 9', detail: 'weitere Ausgabe' },
          { title: 'Ich sehe dich' },
          { title: 'Zwischen den Zeilen' },
          { title: 'Klappe halten war gestern' },
          { title: 'Der Pakt der Verdammten', detail: 'Dark Fantasy Romance' },
        ],
      },
    ],
  },

  /* ----- Camping & Dachzelt ----- */
  {
    id: 'camping',
    title: 'Camping & Dachzelt',
    emoji: '⛺',
    description: 'Humorvolle Bücher und Ratgeber für Camping- und Dachzeltfans – aus echter Erfahrung geschrieben.',
    series: [
      {
        id: 'dachzelt-abenteuer',
        title: 'Dachzelt-Abenteuer',
        subtitle: 'für Familien mit Dachzelt',
        books: [
          { title: 'Dachzelt Buch' },
          { title: 'Dachzelt Abenteuer Familie – Zwei Zelte, ein Chaos' },
          { title: 'Dachzelt mit Kindern' },
          { title: 'Das große Dachzelt-Abenteuer', detail: 'Beschäftigungsbuch ab 5' },
        ],
      },
      {
        id: 'fuer-camper',
        title: 'Für Camper',
        subtitle: 'Geschenkideen',
        books: [
          { title: 'Camping-Adventskalender', detail: 'für Camper & Wohnmobilfans' },
        ],
      },
    ],
  },
];
