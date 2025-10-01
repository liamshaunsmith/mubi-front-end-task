import type { Film } from './types/types.ts';

export const MOCK_FILM_REVIEWS: Film[] = [
  {
    id: 'annie-hall',
    title: 'Annie Hall',
    release_year: 1977,
    genres: ['Comedy', 'Romance', 'Drama'],
    cast: [
      {
        id: 'woody-allen',
        name: 'Woody Allen',
        credits: ['Director', 'Cast', 'Screenplay'],
      },
      {
        id: 'diane-keaton',
        name: 'Diane Keaton',
        credits: ['Cast'],
      },
      {
        id: 'tony-roberts',
        name: 'Tony Roberts',
        credits: ['Cast'],
      },
      {
        id: 'carol-kane',
        name: 'Carol Kane',
        credits: ['Cast'],
      },
      {
        id: 'marshall-brickman',
        name: 'Marshall Brickman',
        credits: ['Screenplay'],
      },
      {
        id: 'gordon-willis',
        name: 'Gordon Willis',
        credits: ['Cinematography'],
      },
      {
        id: 'wendy-greene-bricmont',
        name: 'Wendy Greene Bricmont',
        credits: ['Editing'],
      },
      {
        id: 'ralph-rosenblum',
        name: 'Ralph Rosenblum',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/188/image-w1280.jpg?1481117586',
    video_url:
      'https://trailers.mubi.com/188/c-annie-hall_xx_xx_640_683_188.mp4',
  },
  {
    id: 'breathless',
    title: 'Breathless',
    release_year: 1960,
    genres: ['Avant-Garde', 'Drama'],
    cast: [
      {
        id: 'jean-luc-godard',
        name: 'Jean-Luc Godard',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'jean-seberg',
        name: 'Jean Seberg',
        credits: ['Cast'],
      },
      {
        id: 'jean-paul-belmondo',
        name: 'Jean-Paul Belmondo',
        credits: ['Cast'],
      },
      {
        id: 'daniel-boulanger',
        name: 'Daniel Boulanger',
        credits: ['Cast'],
      },
      {
        id: 'henri-jacques-huet',
        name: 'Henri-Jacques Huet',
        credits: ['Cast'],
      },
      {
        id: 'francois-truffaut',
        name: 'François Truffaut',
        credits: ['Screenplay'],
      },
      {
        id: 'raoul-coutard',
        name: 'Raoul Coutard',
        credits: ['Cinematography'],
      },
      {
        id: 'martial-solal',
        name: 'Martial Solal',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/268/image-w1280.jpg?1528506003',
    video_url:
      'https://trailers.mubi.com/268/t-breathless_xx_xx_476_392_268.mp4',
  },
  {
    id: 'aguirre-the-wrath-of-god',
    title: 'Aguirre, the Wrath of God',
    release_year: 1972,
    genres: ['Adventure', 'Drama', 'History'],
    cast: [
      {
        id: 'werner-herzog',
        name: 'Werner Herzog',
        credits: ['Director', 'Screenplay', 'Producer'],
      },
      {
        id: 'klaus-kinski',
        name: 'Klaus Kinski',
        credits: ['Cast'],
      },
      {
        id: 'helena-rojo',
        name: 'Helena Rojo',
        credits: ['Cast'],
      },
      {
        id: 'del-negro',
        name: 'Del Negro',
        credits: ['Cast'],
      },
      {
        id: 'ruy-guerra',
        name: 'Ruy Guerra',
        credits: ['Cast'],
      },
      {
        id: 'thomas-mauch',
        name: 'Thomas Mauch',
        credits: ['Cinematography'],
      },
      {
        id: 'popol-vuh',
        name: 'Popol Vuh',
        credits: ['Music'],
      },
      {
        id: 'beate-mainka-jellinghaus',
        name: 'Beate Mainka-Jellinghaus',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/301/image-w1280.jpg?1530240326',
    video_url:
      'https://trailers.mubi.com/301/t-aguirre-the-wrath-of-god_640w_700.m4v',
  },
  {
    id: 'blue-velvet',
    title: 'Blue Velvet',
    release_year: 1986,
    genres: ['Mystery', 'Drama', 'Cult'],
    cast: [
      {
        id: 'david-lynch',
        name: 'David Lynch',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'isabella-rossellini',
        name: 'Isabella Rossellini',
        credits: ['Cast'],
      },
      {
        id: 'kyle-maclachlan',
        name: 'Kyle MacLachlan',
        credits: ['Cast'],
      },
      {
        id: 'dennis-hopper',
        name: 'Dennis Hopper',
        credits: ['Cast'],
      },
      {
        id: 'laura-dern',
        name: 'Laura Dern',
        credits: ['Cast'],
      },
      {
        id: 'frederick-elmes',
        name: 'Frederick Elmes',
        credits: ['Cinematography'],
      },
      {
        id: 'angelo-badalamenti',
        name: 'Angelo Badalamenti',
        credits: ['Music'],
      },
      {
        id: 'duwayne-dunham',
        name: 'Duwayne Dunham',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/1309/image-w1280.jpg?1504764257',
    video_url: 'https://trailers.mubi.com/1309/t-blue-velvet-640w-700.m4v',
  },
  {
    id: 'being-john-malkovich',
    title: 'Being John Malkovich',
    release_year: 1999,
    genres: ['Comedy', 'Sci-Fi', 'Drama'],
    cast: [
      {
        id: 'spike-jonze',
        name: 'Spike Jonze',
        credits: ['Director'],
      },
      {
        id: 'john-cusack',
        name: 'John Cusack',
        credits: ['Cast'],
      },
      {
        id: 'cameron-diaz',
        name: 'Cameron Diaz',
        credits: ['Cast'],
      },
      {
        id: 'catherine-keener',
        name: 'Catherine Keener',
        credits: ['Cast'],
      },
      {
        id: 'john-malkovich',
        name: 'John Malkovich',
        credits: ['Cast'],
      },
      {
        id: 'charlie-kaufman',
        name: 'Charlie Kaufman',
        credits: ['Screenplay', 'Executive Producer'],
      },
      {
        id: 'lance-acord',
        name: 'Lance Acord',
        credits: ['Cinematography'],
      },
      {
        id: 'carter-burwell',
        name: 'Carter Burwell',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/258/image-w1280.jpg?1522057684',
    video_url:
      'https://trailers.mubi.com/258/t-being-john-malkovich_640w_700.m4v',
  },
  {
    id: 'breaking-the-waves',
    title: 'Breaking the Waves',
    release_year: 1996,
    genres: ['Drama'],
    cast: [
      {
        id: 'lars-von-trier',
        name: 'Lars von Trier',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'emily-watson',
        name: 'Emily Watson',
        credits: ['Cast'],
      },
      {
        id: 'stellan-skarsgard',
        name: 'Stellan Skarsgård',
        credits: ['Cast'],
      },
      {
        id: 'katrin-cartlidge',
        name: 'Katrin Cartlidge',
        credits: ['Cast'],
      },
      {
        id: 'jean-marc-barr',
        name: 'Jean-Marc Barr',
        credits: ['Cast'],
      },
      {
        id: 'peter-asmussen',
        name: 'Peter Asmussen',
        credits: ['Screenplay'],
      },
      {
        id: 'david-pirie',
        name: 'David Pirie',
        credits: ['Screenplay'],
      },
      {
        id: 'robby-muller',
        name: 'Robby Müller',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/108/image-w1280.jpg?1529717614',
    video_url:
      'https://trailers.mubi.com/108/t-breaking-the-waves_en_us_1280_540_1470290269.mp4',
  },
  {
    id: 'city-of-god',
    title: 'City of God',
    release_year: 2002,
    genres: ['Crime', 'Drama', 'Thriller'],
    cast: [
      {
        id: 'fernando-meirelles',
        name: 'Fernando Meirelles',
        credits: ['Director'],
      },
      {
        id: 'katia-lund',
        name: 'Kátia Lund',
        credits: ['Director'],
      },
      {
        id: 'leandro-firmino',
        name: 'Leandro Firmino',
        credits: ['Cast'],
      },
      {
        id: 'alexandre-rodrigues',
        name: 'Alexandre Rodrigues',
        credits: ['Cast'],
      },
      {
        id: 'phellipe-haagensen',
        name: 'Phellipe Haagensen',
        credits: ['Cast'],
      },
      {
        id: 'jonathan-haagensen',
        name: 'Jonathan Haagensen',
        credits: ['Cast'],
      },
      {
        id: 'paulo-lins',
        name: 'Paulo Lins',
        credits: ['Screenplay'],
      },
      {
        id: 'braulio-mantovani',
        name: 'Bráulio Mantovani',
        credits: ['Screenplay'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/160/image-w1280.jpg?1481539725',
    video_url:
      'https://trailers.mubi.com/160/c-city-of-god_xx_xx_640_683_160.mp4',
  },
  {
    id: 'chinatown',
    title: 'Chinatown',
    release_year: 1974,
    genres: ['Crime', 'Drama', 'Thriller'],
    cast: [
      {
        id: 'roman-polanski',
        name: 'Roman Polanski',
        credits: ['Director', 'Screenplay', 'Cast'],
      },
      {
        id: 'jack-nicholson',
        name: 'Jack Nicholson',
        credits: ['Cast'],
      },
      {
        id: 'faye-dunaway',
        name: 'Faye Dunaway',
        credits: ['Cast'],
      },
      {
        id: 'john-huston',
        name: 'John Huston',
        credits: ['Cast'],
      },
      {
        id: 'perry-lopez',
        name: 'Perry Lopez',
        credits: ['Cast'],
      },
      {
        id: 'robert-towne',
        name: 'Robert Towne',
        credits: ['Screenplay'],
      },
      {
        id: 'john-a-alonzo',
        name: 'John A. Alonzo',
        credits: ['Cinematography'],
      },
      {
        id: 'jerry-goldsmith',
        name: 'Jerry Goldsmith',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/325/image-w1280.jpg?1493163826',
    video_url: 'https://trailers.mubi.com/325/t-chinatown-640w-700.m4v',
  },
  {
    id: 'once-upon-a-time-in-the-west',
    title: 'Once Upon a Time in the West',
    release_year: 1968,
    genres: ['Western'],
    cast: [
      {
        id: 'sergio-leone',
        name: 'Sergio Leone',
        credits: ['Director', 'Screenplay'],
      },
      {
        id: 'henry-fonda',
        name: 'Henry Fonda',
        credits: ['Cast'],
      },
      {
        id: 'claudia-cardinale',
        name: 'Claudia Cardinale',
        credits: ['Cast'],
      },
      {
        id: 'jason-robards',
        name: 'Jason Robards',
        credits: ['Cast'],
      },
      {
        id: 'charles-bronson',
        name: 'Charles Bronson',
        credits: ['Cast'],
      },
      {
        id: 'sergio-donati',
        name: 'Sergio Donati',
        credits: ['Screenplay'],
      },
      {
        id: 'dario-argento',
        name: 'Dario Argento',
        credits: ['Screenplay'],
      },
      {
        id: 'bernardo-bertolucci',
        name: 'Bernardo Bertolucci',
        credits: ['Screenplay'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/166/image-w1280.jpg?1510740663',
    video_url:
      'https://trailers.mubi.com/166/c-once-upon-a-time-in-the-west_xx_xx_640_740_166.mp4',
  },
  {
    id: 'dr-strangelove-or-how-i-learned-to-stop-worrying-and-love-the-bomb',
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    release_year: 1964,
    genres: ['Comedy', 'War', 'Drama'],
    cast: [
      {
        id: 'stanley-kubrick',
        name: 'Stanley Kubrick',
        credits: ['Director', 'Screenplay', 'Producer'],
      },
      {
        id: 'peter-sellers',
        name: 'Peter Sellers',
        credits: ['Cast'],
      },
      {
        id: 'george-c-scott',
        name: 'George C. Scott',
        credits: ['Cast'],
      },
      {
        id: 'sterling-hayden',
        name: 'Sterling Hayden',
        credits: ['Cast'],
      },
      {
        id: 'keenan-wynn',
        name: 'Keenan Wynn',
        credits: ['Cast'],
      },
      {
        id: 'peter-george',
        name: 'Peter George',
        credits: ['Screenplay', 'Novel'],
      },
      {
        id: 'terry-southern',
        name: 'Terry Southern',
        credits: ['Screenplay'],
      },
      {
        id: 'gilbert-taylor',
        name: 'Gilbert Taylor',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/315/image-w1280.jpg?1517472137',
    video_url: 'https://trailers.mubi.com/315/t-dr-strangelove_640w_700.m4v',
  },
  {
    id: 'the-seventh-seal',
    title: 'The Seventh Seal',
    release_year: 1957,
    genres: ['Drama', 'Fantasy'],
    cast: [
      {
        id: 'ingmar-bergman',
        name: 'Ingmar Bergman',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'gunnar-bjornstrand',
        name: 'Gunnar Björnstrand',
        credits: ['Cast'],
      },
      {
        id: 'bengt-ekerot',
        name: 'Bengt Ekerot',
        credits: ['Cast'],
      },
      {
        id: 'nils-poppe',
        name: 'Nils Poppe',
        credits: ['Cast'],
      },
      {
        id: 'max-von-sydow',
        name: 'Max von Sydow',
        credits: ['Cast'],
      },
      {
        id: 'gunnar-fischer',
        name: 'Gunnar Fischer',
        credits: ['Cinematography'],
      },
      {
        id: 'erik-nordgren',
        name: 'Erik Nordgren',
        credits: ['Music'],
      },
      {
        id: 'lennart-wallen',
        name: 'Lennart Wallén',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/173/image-w1280.jpg?1523053944',
    video_url:
      'https://trailers.mubi.com/173/t-the-seventh-seal_xx_xx_448_488_173.mp4',
  },
  {
    id: 'donnie-darko',
    title: 'Donnie Darko',
    release_year: 2001,
    genres: ['Cult', 'Fantasy', 'Mystery'],
    cast: [
      {
        id: 'richard-kelly',
        name: 'Richard Kelly',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'jake-gyllenhaal',
        name: 'Jake Gyllenhaal',
        credits: ['Cast'],
      },
      {
        id: 'mary-mcdonnell',
        name: 'Mary McDonnell',
        credits: ['Cast'],
      },
      {
        id: 'james-duval',
        name: 'James Duval',
        credits: ['Cast'],
      },
      {
        id: 'drew-barrymore',
        name: 'Drew Barrymore',
        credits: ['Cast', 'Executive Producer'],
      },
      {
        id: 'steven-poster',
        name: 'Steven Poster',
        credits: ['Cinematography'],
      },
      {
        id: 'michael-andrews',
        name: 'Michael Andrews',
        credits: ['Music'],
      },
      {
        id: 'sam-bauer',
        name: 'Sam Bauer',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/159/image-w1280.jpg?1529586881',
    video_url: 'https://trailers.mubi.com/159/t-donnie-darko-640w-700.m4v',
  },
  {
    id: 'eternal-sunshine-of-the-spotless-mind',
    title: 'Eternal Sunshine of the Spotless Mind',
    release_year: 2004,
    genres: ['Drama', 'Romance', 'Sci-Fi'],
    cast: [
      {
        id: 'michel-gondry',
        name: 'Michel Gondry',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'jim-carrey',
        name: 'Jim Carrey',
        credits: ['Cast'],
      },
      {
        id: 'kate-winslet',
        name: 'Kate Winslet',
        credits: ['Cast'],
      },
      {
        id: 'elijah-wood',
        name: 'Elijah Wood',
        credits: ['Cast'],
      },
      {
        id: 'mark-ruffalo',
        name: 'Mark Ruffalo',
        credits: ['Cast'],
      },
      {
        id: 'pierre-bismuth',
        name: 'Pierre Bismuth',
        credits: ['Screenplay'],
      },
      {
        id: 'charlie-kaufman',
        name: 'Charlie Kaufman',
        credits: ['Executive Producer', 'Screenplay'],
      },
      {
        id: 'ellen-kuras',
        name: 'Ellen Kuras',
        credits: ['Screenplay', 'Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/92/image-w1280.jpg?1486940308',
    video_url:
      'https://trailers.mubi.com/92/t-eternal-sunshine2_none_700_640x352.mp4',
  },
  {
    id: 'pans-labyrinth',
    title: "Pan's Labyrinth",
    release_year: 2006,
    genres: ['Drama', 'Fantasy', 'Thriller'],
    cast: [
      {
        id: 'guillermo-del-toro',
        name: 'Guillermo del Toro',
        credits: ['Screenplay', 'Director', 'Producer'],
      },
      {
        id: 'ivana-baquero',
        name: 'Ivana Baquero',
        credits: ['Cast'],
      },
      {
        id: 'sergi-lopez',
        name: 'Sergi López',
        credits: ['Cast'],
      },
      {
        id: 'maribel-verdu',
        name: 'Maribel Verdú',
        credits: ['Cast'],
      },
      {
        id: 'doug-jones',
        name: 'Doug Jones',
        credits: ['Cast'],
      },
      {
        id: 'guillermo-navarro',
        name: 'Guillermo Navarro',
        credits: ['Cinematography'],
      },
      {
        id: 'javier-navarrete',
        name: 'Javier Navarrete',
        credits: ['Music'],
      },
      {
        id: 'bernat-vilaplana',
        name: 'Bernat Vilaplana',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/485/image-w1280.jpg?1528750802',
    video_url:
      'https://trailers.mubi.com/485/t-pans-labyr_1280_720x400_485.mp4',
  },
  {
    id: 'eraserhead',
    title: 'Eraserhead',
    release_year: 1977,
    genres: ['Avant-Garde', 'Horror'],
    cast: [
      {
        id: 'david-lynch',
        name: 'David Lynch',
        credits: [
          'Screenplay',
          'Producer',
          'Editing',
          'Music',
          'Production Design',
          'Director',
        ],
      },
      {
        id: 'jack-nance',
        name: 'Jack Nance',
        credits: ['Cast'],
      },
      {
        id: 'charlotte-stewart',
        name: 'Charlotte Stewart',
        credits: ['Cast'],
      },
      {
        id: 'allen-joseph',
        name: 'Allen Joseph',
        credits: ['Cast'],
      },
      {
        id: 'jeanne-bates',
        name: 'Jeanne Bates',
        credits: ['Cast'],
      },
      {
        id: 'herbert-cardwell',
        name: 'Herbert Cardwell',
        credits: ['Cinematography'],
      },
      {
        id: 'frederick-elmes',
        name: 'Frederick Elmes',
        credits: ['Cinematography'],
      },
      {
        id: 'fred-baker',
        name: 'Fred Baker',
        credits: ['Executive Producer'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/196/image-w1280.jpg?1500591858',
    video_url:
      'https://trailers.mubi.com/196/t-eraserhead_448w_500.20090806.m4v',
  },
  {
    id: 'in-the-mood-for-love',
    title: 'In the Mood for Love',
    release_year: 2000,
    genres: ['Romance', 'Drama'],
    cast: [
      {
        id: 'wong-kar-wai',
        name: 'Wong Kar-wai',
        credits: ['Producer', 'Screenplay', 'Director'],
      },
      {
        id: 'maggie-cheung',
        name: 'Maggie Cheung',
        credits: ['Cast'],
      },
      {
        id: 'tony-leung-chiu-wai',
        name: 'Tony Leung Chiu Wai',
        credits: ['Cast'],
      },
      {
        id: 'ping-lam-siu',
        name: 'Ping Lam Siu',
        credits: ['Cast'],
      },
      {
        id: 'rebecca-pan',
        name: 'Rebecca Pan',
        credits: ['Cast'],
      },
      {
        id: 'christopher-doyle',
        name: 'Christopher Doyle',
        credits: ['Cinematography'],
      },
      {
        id: 'lee-ping-bin',
        name: 'Lee Ping-Bin',
        credits: ['Cinematography'],
      },
      {
        id: 'kwan-pung-leung',
        name: 'Kwan Pung-Leung',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/198/image-w1280.jpg?1510785775',
    video_url:
      'https://trailers.mubi.com/198/c-in-the-mood-for-love_xx_xx_640_683_198.mp4',
  },
  {
    id: 'fanny-and-alexander-the-theatrical-version',
    title: 'Fanny and Alexander (Theatrical Version)',
    release_year: 1982,
    genres: ['Drama', 'History'],
    cast: [
      {
        id: 'ingmar-bergman',
        name: 'Ingmar Bergman',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'pernilla-allwin',
        name: 'Pernilla Allwin',
        credits: ['Cast'],
      },
      {
        id: 'bertil-guve',
        name: 'Bertil Guve',
        credits: ['Cast'],
      },
      {
        id: 'borje-ahlstedt',
        name: 'Börje Ahlstedt',
        credits: ['Cast'],
      },
      {
        id: 'allan-edwall',
        name: 'Allan Edwall',
        credits: ['Cast'],
      },
      {
        id: 'sven-nykvist',
        name: 'Sven Nykvist',
        credits: ['Cinematography'],
      },
      {
        id: 'daniel-bell',
        name: 'Daniel Bell',
        credits: ['Music', 'Cast'],
      },
      {
        id: 'sylvia-ingemarsson',
        name: 'Sylvia Ingemarsson',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/201/image-w1280.jpg?1515269406',
    video_url:
      'https://trailers.mubi.com/201/t-fanny-and-alexander-the-theatrical-version_en_us_1280_720_1529321945.mp4',
  },
  {
    id: 'fitzcarraldo',
    title: 'Fitzcarraldo',
    release_year: 1982,
    genres: ['Drama', 'Action'],
    cast: [
      {
        id: 'werner-herzog',
        name: 'Werner Herzog',
        credits: ['Producer', 'Screenplay', 'Director'],
      },
      {
        id: 'klaus-kinski',
        name: 'Klaus Kinski',
        credits: ['Cast'],
      },
      {
        id: 'claudia-cardinale',
        name: 'Claudia Cardinale',
        credits: ['Cast'],
      },
      {
        id: 'jose-lewgoy',
        name: 'José Lewgoy',
        credits: ['Cast'],
      },
      {
        id: 'miguel-angel-fuentes',
        name: 'Miguel Ángel Fuentes',
        credits: ['Cast'],
      },
      {
        id: 'thomas-mauch',
        name: 'Thomas Mauch',
        credits: ['Cinematography'],
      },
      {
        id: 'popol-vuh',
        name: 'Popol Vuh',
        credits: ['Music'],
      },
      {
        id: 'beate-mainka-jellinghaus',
        name: 'Beate Mainka-Jellinghaus',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/283/image-w1280.jpg?1525961546',
    video_url:
      'https://trailers.mubi.com/283/t-fitzcarraldo_en_us_1280_720_1473606669.mp4',
  },
  {
    id: 'groundhog-day',
    title: 'Groundhog Day',
    release_year: 1993,
    genres: ['Comedy'],
    cast: [
      {
        id: 'harold-ramis',
        name: 'Harold Ramis',
        credits: ['Producer', 'Screenplay', 'Director', 'Cast'],
      },
      {
        id: 'bill-murray',
        name: 'Bill Murray',
        credits: ['Cast'],
      },
      {
        id: 'andie-macdowell',
        name: 'Andie MacDowell',
        credits: ['Cast'],
      },
      {
        id: 'chris-elliott',
        name: 'Chris Elliott',
        credits: ['Cast'],
      },
      {
        id: 'stephen-tobolowsky',
        name: 'Stephen Tobolowsky',
        credits: ['Cast'],
      },
      {
        id: 'danny-rubin',
        name: 'Danny Rubin',
        credits: ['Screenplay'],
      },
      {
        id: 'john-bailey',
        name: 'John Bailey',
        credits: ['Cinematography'],
      },
      {
        id: 'george-fenton',
        name: 'George Fenton',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/2202/image-w1280.jpg?1513098953',
    video_url:
      'https://trailers.mubi.com/2202/t-groundhog-day_en_us_1485217473.mp4',
  },
  {
    id: 'ghost-world',
    title: 'Ghost World',
    release_year: 2001,
    genres: ['Comedy', 'Drama'],
    cast: [
      {
        id: 'terry-zwigoff',
        name: 'Terry Zwigoff',
        credits: ['Director', 'Screenplay', 'Music'],
      },
      {
        id: 'thora-birch',
        name: 'Thora Birch',
        credits: ['Cast'],
      },
      {
        id: 'scarlett-johansson',
        name: 'Scarlett Johansson',
        credits: ['Cast'],
      },
      {
        id: 'steve-buscemi',
        name: 'Steve Buscemi',
        credits: ['Cast'],
      },
      {
        id: 'brad-renfro',
        name: 'Brad Renfro',
        credits: ['Cast'],
      },
      {
        id: 'daniel-clowes',
        name: 'Daniel Clowes',
        credits: ['Story', 'Screenplay', 'Art Department', 'Lyrics'],
      },
      {
        id: 'affonso-beato',
        name: 'Affonso Beato',
        credits: ['Cinematography'],
      },
      {
        id: 'david-kitay',
        name: 'David Kitay',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/1834/image-w1280.jpg?1525122366',
    video_url:
      'https://trailers.mubi.com/1834/t-ghost-world_en_us_1477292155.mp4',
  },
  {
    id: 'good-will-hunting',
    title: 'Good Will Hunting',
    release_year: 1997,
    genres: ['Drama'],
    cast: [
      {
        id: 'gus-van-sant',
        name: 'Gus Van Sant',
        credits: ['Director'],
      },
      {
        id: 'robin-williams',
        name: 'Robin Williams',
        credits: ['Cast'],
      },
      {
        id: 'matt-damon',
        name: 'Matt Damon',
        credits: ['Screenplay', 'Cast'],
      },
      {
        id: 'ben-affleck',
        name: 'Ben Affleck',
        credits: ['Screenplay', 'Cast'],
      },
      {
        id: 'minnie-driver',
        name: 'Minnie Driver',
        credits: ['Cast'],
      },
      {
        id: 'jean-yves-escoffier',
        name: 'Jean-Yves Escoffier',
        credits: ['Cinematography'],
      },
      {
        id: 'danny-elfman',
        name: 'Danny Elfman',
        credits: ['Music'],
      },
      {
        id: 'elliott-smith',
        name: 'Elliott Smith',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/3384/image-w1280.jpg?1486940494',
    video_url:
      'https://trailers.mubi.com/3384/t-good-will-hunting_640w_700.m4v',
  },
  {
    id: 'hiroshima-mon-amour',
    title: 'Hiroshima mon amour',
    release_year: 1959,
    genres: ['Drama', 'Romance'],
    cast: [
      {
        id: 'alain-resnais',
        name: 'Alain Resnais',
        credits: ['Director'],
      },
      {
        id: 'emmanuelle-riva',
        name: 'Emmanuelle Riva',
        credits: ['Cast'],
      },
      {
        id: 'eiji-okada',
        name: 'Eiji Okada',
        credits: ['Cast'],
      },
      {
        id: 'stella-dassas',
        name: 'Stella Dassas',
        credits: ['Cast'],
      },
      {
        id: 'pierre-barbaud',
        name: 'Pierre Barbaud',
        credits: ['Cast'],
      },
      {
        id: 'marguerite-duras',
        name: 'Marguerite Duras',
        credits: ['Screenplay'],
      },
      {
        id: 'sacha-vierny',
        name: 'Sacha Vierny',
        credits: ['Cinematography'],
      },
      {
        id: 'michio-takahashi',
        name: 'Michio Takahashi',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/217/image-w1280.jpg?1528856795',
    video_url:
      'https://trailers.mubi.com/217/t-hiroshima-mon-amour_fr_en_1280_1103_217.mp4',
  },
  {
    id: 'grave-of-the-fireflies',
    title: 'Grave of the Fireflies',
    release_year: 1988,
    genres: ['Animation', 'Drama', 'War'],
    cast: [
      {
        id: 'isao-takahata',
        name: 'Isao Takahata',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'tsutomu-tatsumi',
        name: 'Tsutomu Tatsumi',
        credits: ['Cast'],
      },
      {
        id: 'ayano-shiraishi',
        name: 'Ayano Shiraishi',
        credits: ['Cast'],
      },
      {
        id: 'yoshiko-shinohara',
        name: 'Yoshiko Shinohara',
        credits: ['Cast'],
      },
      {
        id: 'akemi-yamaguchi',
        name: 'Akemi Yamaguchi',
        credits: ['Cast'],
      },
      {
        id: 'akiyuki-nosaka',
        name: 'Akiyuki Nosaka',
        credits: ['Screenplay'],
      },
      {
        id: 'nobuo-koyama',
        name: 'Nobuo Koyama',
        credits: ['Cinematography'],
      },
      {
        id: 'michio-mamiya',
        name: 'Michio Mamiya',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/179/image-w1280.jpg?1490057494',
    video_url:
      'https://trailers.mubi.com/179/c-grave-of-the-fireflies_xx_xx_480_812_179.mp4',
  },
  {
    id: 'howls-moving-castle',
    title: "Howl's Moving Castle",
    release_year: 2004,
    genres: ['Animation', 'Fantasy', 'Family'],
    cast: [
      {
        id: 'hayao-miyazaki',
        name: 'Hayao Miyazaki',
        credits: ['Director', 'Screenplay', 'Executive Producer'],
      },
      {
        id: 'chieko-baisho',
        name: 'Chieko Baishô',
        credits: ['Cast'],
      },
      {
        id: 'takuya-kimura',
        name: 'Takuya Kimura',
        credits: ['Cast'],
      },
      {
        id: 'akihiro-miwa',
        name: 'Akihiro Miwa',
        credits: ['Cast'],
      },
      {
        id: 'tatsuya-gashuin',
        name: 'Tatsuya Gashûin',
        credits: ['Cast'],
      },
      {
        id: 'cindy-davis-hewitt',
        name: 'Cindy Davis Hewitt',
        credits: ['Screenplay'],
      },
      {
        id: 'donald-h-hewitt',
        name: 'Donald H. Hewitt',
        credits: ['Screenplay'],
      },
      {
        id: 'diana-wynne-jones',
        name: 'Diana Wynne Jones',
        credits: ['Novel'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/930/image-w1280.jpg?1489451535',
    video_url:
      'https://trailers.mubi.com/930/t-hauru-no-ugoku-shiro_xx_xx_480_418_930.mp4',
  },
  {
    id: 'its-a-wonderful-life',
    title: "It's a Wonderful Life",
    release_year: 1946,
    genres: ['Drama'],
    cast: [
      {
        id: 'frank-capra',
        name: 'Frank Capra',
        credits: ['Producer', 'Screenplay', 'Director'],
      },
      {
        id: 'james-stewart',
        name: 'James Stewart',
        credits: ['Cast'],
      },
      {
        id: 'donna-reed',
        name: 'Donna Reed',
        credits: ['Cast'],
      },
      {
        id: 'lionel-barrymore',
        name: 'Lionel Barrymore',
        credits: ['Cast'],
      },
      {
        id: 'thomas-mitchell',
        name: 'Thomas Mitchell',
        credits: ['Cast'],
      },
      {
        id: 'philip-van-doren-stern',
        name: 'Philip Van Doren Stern',
        credits: ['Screenplay'],
      },
      {
        id: 'frances-goodrich',
        name: 'Frances Goodrich',
        credits: ['Screenplay'],
      },
      {
        id: 'albert-hackett',
        name: 'Albert Hackett',
        credits: ['Screenplay'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/3388/image-w1280.jpg?1497439012',
    video_url:
      'https://trailers.mubi.com/3388/t-its-a-wonderful-life_en_xx_540_455_3388.mp4',
  },
  {
    id: 'irreversible',
    title: 'Irreversible',
    release_year: 2002,
    genres: ['Drama', 'Avant-Garde', 'LGBT+'],
    cast: [
      {
        id: 'gaspar-noe',
        name: 'Gaspar Noé',
        credits: [
          'Director',
          'Screenplay',
          'Cinematography',
          'Editing',
          'Cast',
        ],
      },
      {
        id: 'vincent-cassel',
        name: 'Vincent Cassel',
        credits: ['Producer', 'Cast'],
      },
      {
        id: 'monica-bellucci',
        name: 'Monica Bellucci',
        credits: ['Cast'],
      },
      {
        id: 'albert-dupontel',
        name: 'Albert Dupontel',
        credits: ['Cast'],
      },
      {
        id: 'philippe-nahon',
        name: 'Philippe Nahon',
        credits: ['Cast'],
      },
      {
        id: 'benoit-debie',
        name: 'Benoît Debie',
        credits: ['Cinematography'],
      },
      {
        id: 'thomas-bangalter',
        name: 'Thomas Bangalter',
        credits: ['Music'],
      },
      {
        id: 'ludwig-van-beethoven',
        name: 'Ludwig van Beethoven',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/111/image-w1280.jpg?1528683465',
    video_url:
      'https://trailers.mubi.com/111/t-irreversible_en_us_1280_720_1490237963.mp4',
  },
  {
    id: 'into-the-wild',
    title: 'Into the Wild',
    release_year: 2007,
    genres: ['Drama', 'Biography', 'Adventure'],
    cast: [
      {
        id: 'sean-penn',
        name: 'Sean Penn',
        credits: ['Screenplay', 'Producer', 'Director'],
      },
      {
        id: 'emile-hirsch',
        name: 'Emile Hirsch',
        credits: ['Cast'],
      },
      {
        id: 'marcia-gay-harden',
        name: 'Marcia Gay Harden',
        credits: ['Cast'],
      },
      {
        id: 'william-hurt',
        name: 'William Hurt',
        credits: ['Cast'],
      },
      {
        id: 'jena-malone',
        name: 'Jena Malone',
        credits: ['Cast'],
      },
      {
        id: 'jon-krakauer',
        name: 'Jon Krakauer',
        credits: ['Screenplay'],
      },
      {
        id: 'eric-gautier',
        name: 'Éric Gautier',
        credits: ['Cinematography'],
      },
      {
        id: 'michael-brook',
        name: 'Michael Brook',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/340/image-w1280.jpg?1530240154',
    video_url:
      'https://trailers.mubi.com/340/t-into-the-wild_en_us_1280_536_1461813685.mp4',
  },
  {
    id: 'jules-and-jim',
    title: 'Jules and Jim',
    release_year: 1962,
    genres: ['Drama'],
    cast: [
      {
        id: 'francois-truffaut',
        name: 'François Truffaut',
        credits: ['Screenplay', 'Producer', 'Director'],
      },
      {
        id: 'jeanne-moreau',
        name: 'Jeanne Moreau',
        credits: ['Cast'],
      },
      {
        id: 'oskar-werner',
        name: 'Oskar Werner',
        credits: ['Cast'],
      },
      {
        id: 'henri-serre',
        name: 'Henri Serre',
        credits: ['Cast'],
      },
      {
        id: 'vanna-urbino',
        name: 'Vanna Urbino',
        credits: ['Cast'],
      },
      {
        id: 'jean-gruault',
        name: 'Jean Gruault',
        credits: ['Screenplay'],
      },
      {
        id: 'henri-pierre-roche',
        name: 'Henri-Pierre Roché',
        credits: ['Screenplay'],
      },
      {
        id: 'raoul-coutard',
        name: 'Raoul Coutard',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/218/image-w1280.jpg?1528448546',
    video_url:
      'https://trailers.mubi.com/218/t-jules-and-jim_en_us_4297.0_1024_576_1530042647.mp4',
  },
  {
    id: 'jackie-brown',
    title: 'Jackie Brown',
    release_year: 1997,
    genres: ['Crime', 'Drama', 'Thriller'],
    cast: [
      {
        id: 'quentin-tarantino',
        name: 'Quentin Tarantino',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'pam-grier',
        name: 'Pam Grier',
        credits: ['Cast'],
      },
      {
        id: 'samuel-l-jackson',
        name: 'Samuel L. Jackson',
        credits: ['Cast'],
      },
      {
        id: 'robert-forster',
        name: 'Robert Forster',
        credits: ['Cast'],
      },
      {
        id: 'michael-keaton',
        name: 'Michael Keaton',
        credits: ['Cast'],
      },
      {
        id: 'elmore-leonard',
        name: 'Elmore Leonard',
        credits: ['Screenplay', 'Executive Producer'],
      },
      {
        id: 'guillermo-navarro',
        name: 'Guillermo Navarro',
        credits: ['Cinematography'],
      },
      {
        id: 'sally-menke',
        name: 'Sally Menke',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/1050/image-w1280.jpg?1509626070',
    video_url: 'https://trailers.mubi.com/1050/t-jackie-brown_640w_700.m4v',
  },
  {
    id: 'a-separation',
    title: 'A Separation',
    release_year: 2011,
    genres: ['Drama'],
    cast: [
      {
        id: 'asghar-farhadi',
        name: 'Asghar Farhadi',
        credits: ['Director', 'Screenplay', 'Producer'],
      },
      {
        id: 'leila-hatami',
        name: 'Leila Hatami',
        credits: ['Cast'],
      },
      {
        id: 'peyman-moadi',
        name: 'Peyman Moadi',
        credits: ['Cast'],
      },
      {
        id: 'shahab-hosseini',
        name: 'Shahab Hosseini',
        credits: ['Cast'],
      },
      {
        id: 'sareh-bayat',
        name: 'Sareh Bayat',
        credits: ['Cast'],
      },
      {
        id: 'mahmoud-kalari',
        name: 'Mahmoud Kalari',
        credits: ['Cinematography'],
      },
      {
        id: 'hayedeh-safiyari',
        name: 'Hayedeh Safiyari',
        credits: ['Editing'],
      },
      {
        id: 'keyvan-moghaddam',
        name: 'Keyvan Moghaddam',
        credits: ['Production Design'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/38332/image-w1280.jpg?1498808395',
    video_url:
      'https://trailers.mubi.com/38332/t-a-separation_en_1280w_1024.m4v',
  },
  {
    id: 'kill-bill-vol-1',
    title: 'Kill Bill: Vol. 1',
    release_year: 2003,
    genres: ['Action', 'Cult', 'Crime'],
    cast: [
      {
        id: 'quentin-tarantino',
        name: 'Quentin Tarantino',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'uma-thurman',
        name: 'Uma Thurman',
        credits: ['Cast'],
      },
      {
        id: 'lucy-liu',
        name: 'Lucy Liu',
        credits: ['Cast'],
      },
      {
        id: 'vivica-a-fox',
        name: 'Vivica A. Fox',
        credits: ['Cast'],
      },
      {
        id: 'daryl-hannah',
        name: 'Daryl Hannah',
        credits: ['Cast'],
      },
      {
        id: 'robert-richardson',
        name: 'Robert Richardson',
        credits: ['Cinematography'],
      },
      {
        id: 'rza',
        name: 'RZA',
        credits: ['Music'],
      },
      {
        id: 'sally-menke',
        name: 'Sally Menke',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/1656/image-w1280.jpg?1486940319',
    video_url: 'https://trailers.mubi.com/1656/t-kill-bill-vol-1-640w-700.m4v',
  },
  {
    id: 'kill-bill-vol-2',
    title: 'Kill Bill: Vol. 2',
    release_year: 2004,
    genres: ['Action', 'Drama'],
    cast: [
      {
        id: 'quentin-tarantino',
        name: 'Quentin Tarantino',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'uma-thurman',
        name: 'Uma Thurman',
        credits: ['Cast'],
      },
      {
        id: 'david-carradine',
        name: 'David Carradine',
        credits: ['Cast'],
      },
      {
        id: 'daryl-hannah',
        name: 'Daryl Hannah',
        credits: ['Cast'],
      },
      {
        id: 'michael-madsen',
        name: 'Michael Madsen',
        credits: ['Cast'],
      },
      {
        id: 'robert-richardson',
        name: 'Robert Richardson',
        credits: ['Cinematography'],
      },
      {
        id: 'robert-rodriguez',
        name: 'Robert Rodriguez',
        credits: ['Music'],
      },
      {
        id: 'sally-menke',
        name: 'Sally Menke',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/1657/image-w1280.jpg?1474855763',
    video_url: 'https://trailers.mubi.com/1657/t-kill-bill-vol-2-640w-700.m4v',
  },
  {
    id: 'dogtooth',
    title: 'Dogtooth',
    release_year: 2009,
    genres: ['Drama', 'Cult'],
    cast: [
      {
        id: 'yorgos-lanthimos',
        name: 'Yorgos Lanthimos',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'christos-stergioglou',
        name: 'Christos Stergioglou',
        credits: ['Cast'],
      },
      {
        id: 'mary-tsoni',
        name: 'Mary Tsoni',
        credits: ['Cast'],
      },
      {
        id: 'aggeliki-papoulia',
        name: 'Aggeliki Papoulia',
        credits: ['Cast'],
      },
      {
        id: 'michele-valley',
        name: 'Michele Valley',
        credits: ['Cast'],
      },
      {
        id: 'efthymis-filippou',
        name: 'Efthymis Filippou',
        credits: ['Screenplay'],
      },
      {
        id: 'thimios-bakatatakis',
        name: 'Thimios Bakatakis',
        credits: ['Cinematography'],
      },
      {
        id: 'yorgos-mavropsaridis',
        name: 'Yorgos Mavropsaridis',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/2740/image-w1280.jpg?1528683471',
    video_url:
      'https://trailers.mubi.com/2740/t-dogtooth_en_us_1280_720_1472189995.mp4',
  },
  {
    id: 'amelie',
    title: 'Amélie',
    release_year: 2001,
    genres: ['Comedy', 'Romance', 'Fantasy'],
    cast: [
      {
        id: 'jean-pierre-jeunet',
        name: 'Jean-Pierre Jeunet',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'audrey-tautou',
        name: 'Audrey Tautou',
        credits: ['Cast'],
      },
      {
        id: 'mathieu-kassovitz',
        name: 'Mathieu Kassovitz',
        credits: ['Cast'],
      },
      {
        id: 'rufus',
        name: 'Rufus',
        credits: ['Cast'],
      },
      {
        id: 'dominique-pinon',
        name: 'Dominique Pinon',
        credits: ['Cast'],
      },
      {
        id: 'guillaume-laurant',
        name: 'Guillaume Laurant',
        credits: ['Screenplay'],
      },
      {
        id: 'bruno-delbonnel',
        name: 'Bruno Delbonnel',
        credits: ['Cinematography'],
      },
      {
        id: 'yann-tiersen',
        name: 'Yann Tiersen',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/205/image-w1280.jpg?1529586216',
    video_url: 'https://trailers.mubi.com/205/t-amelie_fr_en_1280_1267_205.mp4',
  },
  {
    id: 'the-400-blows',
    title: 'The 400 Blows',
    release_year: 1959,
    genres: ['Drama'],
    cast: [
      {
        id: 'francois-truffaut',
        name: 'François Truffaut',
        credits: ['Producer', 'Screenplay', 'Director'],
      },
      {
        id: 'jean-pierre-leaud',
        name: 'Jean-Pierre Léaud',
        credits: ['Cast'],
      },
      {
        id: 'claire-maurier',
        name: 'Claire Maurier',
        credits: ['Cast'],
      },
      {
        id: 'albert-remy',
        name: 'Albert Remy',
        credits: ['Cast'],
      },
      {
        id: 'guy-decomble',
        name: 'Guy Decomble',
        credits: ['Cast'],
      },
      {
        id: 'marcel-moussy',
        name: 'Marcel Moussy',
        credits: ['Screenplay'],
      },
      {
        id: 'henri-decae',
        name: 'Henri Decae',
        credits: ['Cinematography'],
      },
      {
        id: 'jean-constantin',
        name: 'Jean Constantin',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/151/image-w1280.jpg?1528452208',
    video_url:
      'https://trailers.mubi.com/151/t-the-400-blows_en_us_1280_720_1528759369.mp4',
  },
  {
    id: 'lost-in-translation',
    title: 'Lost in Translation',
    release_year: 2003,
    genres: ['Drama', 'Romance'],
    cast: [
      {
        id: 'sofia-coppola',
        name: 'Sofia Coppola',
        credits: ['Director', 'Screenplay', 'Producer'],
      },
      {
        id: 'scarlett-johansson',
        name: 'Scarlett Johansson',
        credits: ['Cast'],
      },
      {
        id: 'bill-murray',
        name: 'Bill Murray',
        credits: ['Cast'],
      },
      {
        id: 'giovanni-ribisi',
        name: 'Giovanni Ribisi',
        credits: ['Cast'],
      },
      {
        id: 'anna-faris',
        name: 'Anna Faris',
        credits: ['Cast'],
      },
      {
        id: 'lance-acord',
        name: 'Lance Acord',
        credits: ['Cinematography'],
      },
      {
        id: 'kevin-shields',
        name: 'Kevin Shields',
        credits: ['Music'],
      },
      {
        id: 'air',
        name: 'Air',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/289/image-w1280.jpg?1517472268',
    video_url:
      'https://trailers.mubi.com/289/t-lost-in-translation-640w-700.m4v',
  },
  {
    id: 'mulholland-drive',
    title: 'Mulholland Drive',
    release_year: 2001,
    genres: ['Drama', 'Mystery', 'Thriller'],
    cast: [
      {
        id: 'david-lynch',
        name: 'David Lynch',
        credits: ['Director', 'Screenplay', 'Sound'],
      },
      {
        id: 'naomi-watts',
        name: 'Naomi Watts',
        credits: ['Cast'],
      },
      {
        id: 'laura-harring',
        name: 'Laura Harring',
        credits: ['Cast'],
      },
      {
        id: 'justin-theroux',
        name: 'Justin Theroux',
        credits: ['Cast'],
      },
      {
        id: 'ann-miller',
        name: 'Ann Miller',
        credits: ['Cast'],
      },
      {
        id: 'peter-deming',
        name: 'Peter Deming',
        credits: ['Cinematography'],
      },
      {
        id: 'angelo-badalamenti',
        name: 'Angelo Badalamenti',
        credits: ['Music', 'Cast'],
      },
      {
        id: 'mary-sweeney',
        name: 'Mary Sweeney',
        credits: ['Producer', 'Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/187/image-w1280.jpg?1529328659',
    video_url: 'https://trailers.mubi.com/187/t-mulholland-drive-640w_700.m4v',
  },
  {
    id: 'memento',
    title: 'Memento',
    release_year: 2000,
    genres: ['Thriller', 'Mystery'],
    cast: [
      {
        id: 'christopher-nolan',
        name: 'Christopher Nolan',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'guy-pearce',
        name: 'Guy Pearce',
        credits: ['Cast'],
      },
      {
        id: 'carrie-anne-moss',
        name: 'Carrie-Anne Moss',
        credits: ['Cast'],
      },
      {
        id: 'joe-pantoliano',
        name: 'Joe Pantoliano',
        credits: ['Cast'],
      },
      {
        id: 'mark-boone-junior',
        name: 'Mark Boone Junior',
        credits: ['Cast'],
      },
      {
        id: 'jonathan-nolan',
        name: 'Jonathan Nolan',
        credits: ['Screenplay'],
      },
      {
        id: 'wally-pfister',
        name: 'Wally Pfister',
        credits: ['Cinematography'],
      },
      {
        id: 'david-julyan',
        name: 'David Julyan',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/142/image-w1280.jpg?1515009665',
    video_url: 'https://trailers.mubi.com/142/t-memento-2_640w_700.m4v',
  },
  {
    id: 'monty-python-and-the-holy-grail',
    title: 'Monty Python and the Holy Grail',
    release_year: 1975,
    genres: ['Comedy', 'Adventure'],
    cast: [
      {
        id: 'terry-gilliam',
        name: 'Terry Gilliam',
        credits: ['Cast', 'Screenplay', 'Director'],
      },
      {
        id: 'terry-jones',
        name: 'Terry Jones',
        credits: ['Director', 'Screenplay', 'Cast'],
      },
      {
        id: 'graham-chapman',
        name: 'Graham Chapman',
        credits: ['Screenplay', 'Cast'],
      },
      {
        id: 'john-cleese',
        name: 'John Cleese',
        credits: ['Screenplay', 'Cast'],
      },
      {
        id: 'eric-idle',
        name: 'Eric Idle',
        credits: ['Screenplay', 'Cast'],
      },
      {
        id: 'michael-palin',
        name: 'Michael Palin',
        credits: ['Screenplay', 'Cast'],
      },
      {
        id: 'terry-bedford',
        name: 'Terry Bedford',
        credits: ['Cinematography'],
      },
      {
        id: 'john-hackney',
        name: 'John Hackney',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/319/image-w1280.jpg?1481117871',
    video_url:
      'https://trailers.mubi.com/319/t-monthy-python-and-the-holy-grail-640w-700.m4v',
  },
  {
    id: 'no-country-for-old-men',
    title: 'No Country for Old Men',
    release_year: 2007,
    genres: ['Drama', 'Thriller'],
    cast: [
      {
        id: 'joel-coen',
        name: 'Joel Coen',
        credits: ['Director', 'Screenplay', 'Producer', 'Editing'],
      },
      {
        id: 'ethan-coen',
        name: 'Ethan Coen',
        credits: ['Director', 'Screenplay', 'Producer', 'Editing'],
      },
      {
        id: 'tommy-lee-jones',
        name: 'Tommy Lee Jones',
        credits: ['Cast'],
      },
      {
        id: 'javier-bardem',
        name: 'Javier Bardem',
        credits: ['Cast'],
      },
      {
        id: 'josh-brolin',
        name: 'Josh Brolin',
        credits: ['Cast'],
      },
      {
        id: 'woody-harrelson',
        name: 'Woody Harrelson',
        credits: ['Cast'],
      },
      {
        id: 'cormac-mccarthy',
        name: 'Cormac McCarthy',
        credits: ['Novel'],
      },
      {
        id: 'roger-deakins',
        name: 'Roger Deakins',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/117/image-w1280.jpg?1524490935',
    video_url:
      'https://trailers.mubi.com/117/t_no-country_en_xx_10240_1280x720_117.mp4',
  },
  {
    id: 'nosferatu',
    title: 'Nosferatu',
    release_year: 1922,
    genres: ['Horror', 'Silent'],
    cast: [
      {
        id: 'f-w-murnau',
        name: 'F.W. Murnau',
        credits: ['Director'],
      },
      {
        id: 'max-schreck',
        name: 'Max Schreck',
        credits: ['Cast'],
      },
      {
        id: 'gustav-von-wangenheim',
        name: 'Gustav von Wangenheim',
        credits: ['Cast'],
      },
      {
        id: 'greta-schroder',
        name: 'Greta Schröder',
        credits: ['Cast'],
      },
      {
        id: 'alexander-granach',
        name: 'Alexander Granach',
        credits: ['Cast'],
      },
      {
        id: 'henrik-galeen',
        name: 'Henrik Galeen',
        credits: ['Screenplay'],
      },
      {
        id: 'bram-stoker',
        name: 'Bram Stoker',
        credits: ['Novel'],
      },
      {
        id: 'fritz-arno-wagner',
        name: 'Fritz Arno Wagner',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/178/image-w1280.jpg?1498801638',
    video_url:
      'https://trailers.mubi.com/178/c-nosferatu_xx_xx_458_875_178.mp4',
  },
  {
    id: 'network',
    title: 'Network',
    release_year: 1976,
    genres: ['Drama'],
    cast: [
      {
        id: 'sidney-lumet',
        name: 'Sidney Lumet',
        credits: ['Director'],
      },
      {
        id: 'faye-dunaway',
        name: 'Faye Dunaway',
        credits: ['Cast'],
      },
      {
        id: 'william-holden',
        name: 'William Holden',
        credits: ['Cast'],
      },
      {
        id: 'peter-finch',
        name: 'Peter Finch',
        credits: ['Cast'],
      },
      {
        id: 'robert-duvall',
        name: 'Robert Duvall',
        credits: ['Cast'],
      },
      {
        id: 'paddy-chayefsky',
        name: 'Paddy Chayefsky',
        credits: ['Screenplay'],
      },
      {
        id: 'owen-roizman',
        name: 'Owen Roizman',
        credits: ['Cinematography'],
      },
      {
        id: 'elliot-lawrence',
        name: 'Elliot Lawrence',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/256/image-w1280.jpg?1445915361',
    video_url: 'https://trailers.mubi.com/256/t-network_448w_500.20090814.m4v',
  },
  {
    id: 'once-upon-a-time-in-america',
    title: 'Once Upon a Time in America',
    release_year: 1984,
    genres: ['Drama', 'Crime'],
    cast: [
      {
        id: 'sergio-leone',
        name: 'Sergio Leone',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'robert-de-niro',
        name: 'Robert De Niro',
        credits: ['Cast'],
      },
      {
        id: 'james-woods',
        name: 'James Woods',
        credits: ['Cast'],
      },
      {
        id: 'elizabeth-mcgovern',
        name: 'Elizabeth McGovern',
        credits: ['Cast'],
      },
      {
        id: 'tuesday-weld',
        name: 'Tuesday Weld',
        credits: ['Cast'],
      },
      {
        id: 'leonardo-benvenuti',
        name: 'Leonardo Benvenuti',
        credits: ['Screenplay'],
      },
      {
        id: 'piero-de-bernardi',
        name: 'Piero De Bernardi',
        credits: ['Screenplay'],
      },
      {
        id: 'enrico-medioli',
        name: 'Enrico Medioli',
        credits: ['Screenplay'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/1541/image-w1280.jpg?1512140879',
    video_url:
      'https://trailers.mubi.com/1541/t-once-upon-a-time-in-america-640w-700.m4v',
  },
  {
    id: 'o-brother-where-art-thou',
    title: 'O Brother, Where Art Thou?',
    release_year: 2000,
    genres: ['Comedy', 'Crime', 'Music'],
    cast: [
      {
        id: 'joel-coen',
        name: 'Joel Coen',
        credits: ['Producer', 'Screenplay', 'Editing', 'Director'],
      },
      {
        id: 'ethan-coen',
        name: 'Ethan Coen',
        credits: ['Director', 'Screenplay', 'Editing', 'Producer'],
      },
      {
        id: 'george-clooney',
        name: 'George Clooney',
        credits: ['Cast'],
      },
      {
        id: 'john-turturro',
        name: 'John Turturro',
        credits: ['Cast'],
      },
      {
        id: 'tim-blake-nelson',
        name: 'Tim Blake Nelson',
        credits: ['Cast'],
      },
      {
        id: 'john-goodman',
        name: 'John Goodman',
        credits: ['Cast'],
      },
      {
        id: 'homer',
        name: 'Homer',
        credits: ['Screenplay'],
      },
      {
        id: 'roger-deakins',
        name: 'Roger Deakins',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/963/image-w1280.jpg?1445915350',
    video_url:
      'https://trailers.mubi.com/963/t-o-brother-where-art-thou_640w_700.m4v',
  },
  {
    id: 'the-sacrifice',
    title: 'The Sacrifice',
    release_year: 1986,
    genres: ['Drama', 'Sci-Fi'],
    cast: [
      {
        id: 'andrei-tarkovsky',
        name: 'Andrei Tarkovsky',
        credits: ['Editing', 'Screenplay', 'Director'],
      },
      {
        id: 'erland-josephson',
        name: 'Erland Josephson',
        credits: ['Cast'],
      },
      {
        id: 'susan-fleetwood',
        name: 'Susan Fleetwood',
        credits: ['Cast'],
      },
      {
        id: 'tommy-kjellqvist',
        name: 'Tommy Kjellqvist',
        credits: ['Cast'],
      },
      {
        id: 'allan-edwall',
        name: 'Allan Edwall',
        credits: ['Cast'],
      },
      {
        id: 'sven-nykvist',
        name: 'Sven Nykvist',
        credits: ['Cinematography'],
      },
      {
        id: 'michel-leszczylowski',
        name: 'Michal Leszczylowski',
        credits: ['Editing'],
      },
      {
        id: 'anna-lena-wibom',
        name: 'Anna-Lena Wibom',
        credits: ['Producer'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/401/image-w1280.jpg?1525748401',
    video_url:
      'https://trailers.mubi.com/401/t-the-sacrifice_en_us_1280_720_1508020387.mp4',
  },
  {
    id: 'pulp-fiction',
    title: 'Pulp Fiction',
    release_year: 1994,
    genres: ['Crime', 'Drama', 'Comedy'],
    cast: [
      {
        id: 'quentin-tarantino',
        name: 'Quentin Tarantino',
        credits: ['Director', 'Screenplay', 'Cast'],
      },
      {
        id: 'john-travolta',
        name: 'John Travolta',
        credits: ['Cast'],
      },
      {
        id: 'bruce-willis',
        name: 'Bruce Willis',
        credits: ['Cast'],
      },
      {
        id: 'samuel-l-jackson',
        name: 'Samuel L. Jackson',
        credits: ['Cast'],
      },
      {
        id: 'uma-thurman',
        name: 'Uma Thurman',
        credits: ['Cast'],
      },
      {
        id: 'roger-avary',
        name: 'Roger Avary',
        credits: ['Screenplay'],
      },
      {
        id: 'andrzej-sekula',
        name: 'Andrzej Sekula',
        credits: ['Cinematography'],
      },
      {
        id: 'sally-menke',
        name: 'Sally Menke',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/161/image-w1280.jpg?1507153142',
    video_url:
      'https://trailers.mubi.com/161/t_pulp-ficti_en_xx_10240_1280x720_161.mp4',
  },
  {
    id: 'psycho',
    title: 'Psycho',
    release_year: 1960,
    genres: ['Thriller', 'Mystery'],
    cast: [
      {
        id: 'alfred-hitchcock',
        name: 'Alfred Hitchcock',
        credits: ['Producer', 'Director'],
      },
      {
        id: 'anthony-perkins',
        name: 'Anthony Perkins',
        credits: ['Cast'],
      },
      {
        id: 'janet-leigh',
        name: 'Janet Leigh',
        credits: ['Cast'],
      },
      {
        id: 'john-gavin',
        name: 'John Gavin',
        credits: ['Cast'],
      },
      {
        id: 'vera-miles',
        name: 'Vera Miles',
        credits: ['Cast'],
      },
      {
        id: 'joseph-stefano',
        name: 'Joseph Stefano',
        credits: ['Screenplay'],
      },
      {
        id: 'robert-bloch',
        name: 'Robert Bloch',
        credits: ['Screenplay'],
      },
      {
        id: 'john-l-russell',
        name: 'John L. Russell',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/148/image-w1280.jpg?1445915238',
    video_url: 'https://trailers.mubi.com/148/t-psycho-624w_700.m4v',
  },
  {
    id: 'persona',
    title: 'Persona',
    release_year: 1966,
    genres: ['Drama', 'Avant-Garde', 'LGBT+'],
    cast: [
      {
        id: 'ingmar-bergman',
        name: 'Ingmar Bergman',
        credits: ['Director', 'Screenplay', 'Producer'],
      },
      {
        id: 'bibi-andersson',
        name: 'Bibi Andersson',
        credits: ['Cast'],
      },
      {
        id: 'liv-ullmann',
        name: 'Liv Ullmann',
        credits: ['Cast'],
      },
      {
        id: 'gunnar-bjornstrand',
        name: 'Gunnar Björnstrand',
        credits: ['Cast'],
      },
      {
        id: 'margaretha-krook',
        name: 'Margaretha Krook',
        credits: ['Cast'],
      },
      {
        id: 'sven-nykvist',
        name: 'Sven Nykvist',
        credits: ['Cinematography'],
      },
      {
        id: 'lars-johan-werle',
        name: 'Lars Johan Werle',
        credits: ['Music'],
      },
      {
        id: 'johann-sebastian-bach',
        name: 'Johann Sebastian Bach',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/299/image-w1280.jpg?1530510798',
    video_url: 'https://trailers.mubi.com/299/t-persona_640w_700.m4v',
  },
  {
    id: 'millennium-mambo',
    title: 'Millennium Mambo',
    release_year: 2001,
    genres: ['Drama'],
    cast: [
      {
        id: 'hou-hsiao-hsien',
        name: 'Hou Hsiao-hsien',
        credits: ['Director'],
      },
      {
        id: 'shu-qi',
        name: 'Shu Qi',
        credits: ['Cast'],
      },
      {
        id: 'jack-kao',
        name: 'Jack Kao',
        credits: ['Cast'],
      },
      {
        id: 'tuan-chun-hao',
        name: 'Tuan Chun-hao',
        credits: ['Cast'],
      },
      {
        id: 'chu-t-ien-wen',
        name: "Chu T'ien-wen",
        credits: ['Screenplay', 'Producer'],
      },
      {
        id: 'lee-ping-bin',
        name: 'Lee Ping-Bin',
        credits: ['Cinematography'],
      },
      {
        id: 'yoshihiro-hanno',
        name: 'Yoshihiro Hanno',
        credits: ['Music'],
      },
      {
        id: 'lim-giong',
        name: 'Lim Giong',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/2843/image-w1280.jpg?1481125246',
    video_url:
      'https://trailers.mubi.com/2843/t-millennium-mambo_en_us_1280_720_1527819311.mp4',
  },
  {
    id: 'rebels-of-the-neon-god',
    title: 'Rebels of the Neon God',
    release_year: 1992,
    genres: ['Drama'],
    cast: [
      {
        id: 'tsai-ming-liang',
        name: 'Tsai Ming-liang',
        credits: ['Director', 'Screenplay'],
      },
      {
        id: 'chen-chao-jung',
        name: 'Chen Chao-jung',
        credits: ['Cast'],
      },
      {
        id: 'chang-bin-jen',
        name: 'Jen Chang-bin',
        credits: ['Cast'],
      },
      {
        id: 'kang-sheng-lee',
        name: 'Lee Kang-sheng',
        credits: ['Cast'],
      },
      {
        id: 'lu-yi-ching',
        name: 'Lu Yi-Ching',
        credits: ['Cast'],
      },
      {
        id: 'liao-pen-jung',
        name: 'Liao Pen-jung',
        credits: ['Cinematography'],
      },
      {
        id: 'shu-jun-huang',
        name: 'Huang Shu-Jun',
        credits: ['Music'],
      },
      {
        id: 'yang-wang-chi',
        name: 'Yang Wang-chi',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/20896/image-w1280.jpg?1514041202',
    video_url:
      'https://trailers.mubi.com/20896/t-rebels_of_the_neon_god_xx_2560_854x480.mp4',
  },
  {
    id: 'querelle',
    title: 'Querelle',
    release_year: 1982,
    genres: ['Drama'],
    cast: [
      {
        id: 'rainer-werner-fassbinder',
        name: 'Rainer Werner Fassbinder',
        credits: ['Editing', 'Screenplay', 'Director'],
      },
      {
        id: 'brad-davis',
        name: 'Brad Davis',
        credits: ['Cast'],
      },
      {
        id: 'franco-nero',
        name: 'Franco Nero',
        credits: ['Cast'],
      },
      {
        id: 'jeanne-moreau',
        name: 'Jeanne Moreau',
        credits: ['Cast'],
      },
      {
        id: 'laurent-malet',
        name: 'Laurent Malet',
        credits: ['Cast'],
      },
      {
        id: 'jean-genet',
        name: 'Jean Genet',
        credits: ['Screenplay'],
      },
      {
        id: 'burkhard-driest',
        name: 'Burkhard Driest',
        credits: ['Screenplay', 'Cast'],
      },
      {
        id: 'xaver-schwarzenberger',
        name: 'Xaver Schwarzenberger',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/21382/image-w1280.jpg?1486032446',
    video_url:
      'https://trailers.mubi.com/21382/t-querelle_en_us_1280_720_1487919097.mp4',
  },
  {
    id: 'rear-window',
    title: 'Rear Window',
    release_year: 1954,
    genres: ['Thriller', 'Mystery', 'Crime'],
    cast: [
      {
        id: 'alfred-hitchcock',
        name: 'Alfred Hitchcock',
        credits: ['Producer', 'Director'],
      },
      {
        id: 'james-stewart',
        name: 'James Stewart',
        credits: ['Cast'],
      },
      {
        id: 'grace-kelly',
        name: 'Grace Kelly',
        credits: ['Cast'],
      },
      {
        id: 'wendell-corey',
        name: 'Wendell Corey',
        credits: ['Cast'],
      },
      {
        id: 'thelma-ritter',
        name: 'Thelma Ritter',
        credits: ['Cast'],
      },
      {
        id: 'cornell-woolrich',
        name: 'Cornell Woolrich',
        credits: ['Screenplay'],
      },
      {
        id: 'john-michael-hayes',
        name: 'John Michael Hayes',
        credits: ['Screenplay'],
      },
      {
        id: 'robert-burks',
        name: 'Robert Burks',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/162/image-w1280.jpg?1445915545',
    video_url: 'https://trailers.mubi.com/162/t-rear-window_640w_700.m4v',
  },
  {
    id: 'reservoir-dogs',
    title: 'Reservoir Dogs',
    release_year: 1992,
    genres: ['Crime', 'Drama', 'Thriller'],
    cast: [
      {
        id: 'quentin-tarantino',
        name: 'Quentin Tarantino',
        credits: ['Cast', 'Screenplay', 'Director'],
      },
      {
        id: 'harvey-keitel',
        name: 'Harvey Keitel',
        credits: ['Cast'],
      },
      {
        id: 'tim-roth',
        name: 'Tim Roth',
        credits: ['Cast'],
      },
      {
        id: 'michael-madsen',
        name: 'Michael Madsen',
        credits: ['Cast'],
      },
      {
        id: 'chris-penn',
        name: 'Chris Penn',
        credits: ['Cast'],
      },
      {
        id: 'roger-avary',
        name: 'Roger Avary',
        credits: ['Screenplay'],
      },
      {
        id: 'andrzej-sekula',
        name: 'Andrzej Sekula',
        credits: ['Cinematography'],
      },
      {
        id: 'sally-menke',
        name: 'Sally Menke',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/192/image-w1280.jpg?1498806339',
    video_url: 'https://trailers.mubi.com/192/t-reservoir-dogs-640w-700.m4v',
  },
  {
    id: 'requiem-for-a-dream',
    title: 'Requiem for a Dream',
    release_year: 2000,
    genres: ['Drama'],
    cast: [
      {
        id: 'darren-aronofsky',
        name: 'Darren Aronofsky',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'ellen-burstyn',
        name: 'Ellen Burstyn',
        credits: ['Cast'],
      },
      {
        id: 'jared-leto',
        name: 'Jared Leto',
        credits: ['Cast'],
      },
      {
        id: 'jennifer-connelly',
        name: 'Jennifer Connelly',
        credits: ['Cast'],
      },
      {
        id: 'marlon-wayans',
        name: 'Marlon Wayans',
        credits: ['Cast'],
      },
      {
        id: 'hubert-selby-jr',
        name: 'Hubert Selby Jr.',
        credits: ['Screenplay'],
      },
      {
        id: 'matthew-libatique',
        name: 'Matthew Libatique',
        credits: ['Cinematography'],
      },
      {
        id: 'clint-mansell',
        name: 'Clint Mansell',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/143/image-w1280.jpg?1486940329',
    video_url:
      'https://trailers.mubi.com/143/t-requiem-for-a-dream-640w-700.m4v',
  },
  {
    id: 'spirited-away',
    title: 'Spirited Away',
    release_year: 2001,
    genres: ['Animation', 'Adventure', 'Family'],
    cast: [
      {
        id: 'hayao-miyazaki',
        name: 'Hayao Miyazaki',
        credits: ['Director', 'Screenplay'],
      },
      {
        id: 'rumi-hiragi',
        name: 'Rumi Hîragi',
        credits: ['Cast'],
      },
      {
        id: 'miyu-irino',
        name: 'Miyu Irino',
        credits: ['Cast'],
      },
      {
        id: 'mari-natsuki',
        name: 'Mari Natsuki',
        credits: ['Cast'],
      },
      {
        id: 'takashi-naito',
        name: 'Takashi Naitô',
        credits: ['Cast'],
      },
      {
        id: 'atsushi-okui',
        name: 'Atsushi Okui',
        credits: ['Cinematography'],
      },
      {
        id: 'joe-hisaishi',
        name: 'Joe Hisaishi',
        credits: ['Music'],
      },
      {
        id: 'kazumi-inaki',
        name: 'Kazumi Inaki',
        credits: ['Sound', 'Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/979/image-w1280.jpg?1489451475',
    video_url:
      'https://trailers.mubi.com/979/t_Spirited-A_ja_en_800_480x304_979.mp4',
  },
  {
    id: 'seven-samurai',
    title: 'Seven Samurai',
    release_year: 1954,
    genres: ['Drama', 'Action', 'Adventure'],
    cast: [
      {
        id: 'akira-kurosawa',
        name: 'Akira Kurosawa',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'toshiro-mifune',
        name: 'Toshirô Mifune',
        credits: ['Cast'],
      },
      {
        id: 'takashi-shimura',
        name: 'Takashi Shimura',
        credits: ['Cast'],
      },
      {
        id: 'kokuten-kodo',
        name: 'Kokuten Kôdô',
        credits: ['Cast'],
      },
      {
        id: 'yoshio-inaba',
        name: 'Yoshio Inaba',
        credits: ['Cast'],
      },
      {
        id: 'hideo-oguni',
        name: 'Hideo Oguni',
        credits: ['Screenplay'],
      },
      {
        id: 'shinobu-hashimoto',
        name: 'Shinobu Hashimoto',
        credits: ['Screenplay'],
      },
      {
        id: 'asakazu-nakai',
        name: 'Asakazu Nakai',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/165/image-w1280.jpg?1445915637',
    video_url:
      'https://trailers.mubi.com/165/t-seven-samurai_en_us_1280_720_1493669843.mp4',
  },
  {
    id: 'wild-strawberries',
    title: 'Wild Strawberries',
    release_year: 1957,
    genres: ['Drama'],
    cast: [
      {
        id: 'ingmar-bergman',
        name: 'Ingmar Bergman',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'victor-sjostrom',
        name: 'Victor Sjöström',
        credits: ['Cast'],
      },
      {
        id: 'bibi-andersson',
        name: 'Bibi Andersson',
        credits: ['Cast'],
      },
      {
        id: 'ingrid-thulin',
        name: 'Ingrid Thulin',
        credits: ['Cast'],
      },
      {
        id: 'gunnar-bjornstrand',
        name: 'Gunnar Björnstrand',
        credits: ['Cast'],
      },
      {
        id: 'gunnar-fischer',
        name: 'Gunnar Fischer',
        credits: ['Cinematography'],
      },
      {
        id: 'erik-nordgren',
        name: 'Erik Nordgren',
        credits: ['Music'],
      },
      {
        id: 'gote-loven',
        name: 'Göte Lovén',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/175/image-w1280.jpg?1523054481',
    video_url:
      'https://trailers.mubi.com/175/c-wild-strawberries_xx_xx_640_712_175.mp4',
  },
  {
    id: 'taxi-driver',
    title: 'Taxi Driver',
    release_year: 1976,
    genres: ['Drama', 'Crime'],
    cast: [
      {
        id: 'martin-scorsese',
        name: 'Martin Scorsese',
        credits: ['Director', 'Cast'],
      },
      {
        id: 'robert-de-niro',
        name: 'Robert De Niro',
        credits: ['Cast'],
      },
      {
        id: 'jodie-foster',
        name: 'Jodie Foster',
        credits: ['Cast'],
      },
      {
        id: 'albert-brooks',
        name: 'Albert Brooks',
        credits: ['Cast'],
      },
      {
        id: 'harvey-keitel',
        name: 'Harvey Keitel',
        credits: ['Cast'],
      },
      {
        id: 'paul-schrader',
        name: 'Paul Schrader',
        credits: ['Screenplay'],
      },
      {
        id: 'michael-chapman',
        name: 'Michael Chapman',
        credits: ['Cinematography'],
      },
      {
        id: 'bernard-herrmann',
        name: 'Bernard Herrmann',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/204/image-w1280.jpg?1523307946',
    video_url:
      'https://trailers.mubi.com/204/c-taxi-driver_xx_xx_640_712_204.mp4',
  },
  {
    id: 'there-will-be-blood',
    title: 'There Will Be Blood',
    release_year: 2007,
    genres: ['Drama'],
    cast: [
      {
        id: 'paul-thomas-anderson',
        name: 'Paul Thomas Anderson',
        credits: ['Screenplay', 'Producer', 'Director'],
      },
      {
        id: 'daniel-day-lewis',
        name: 'Daniel Day-Lewis',
        credits: ['Cast'],
      },
      {
        id: 'paul-dano',
        name: 'Paul Dano',
        credits: ['Cast'],
      },
      {
        id: 'kevin-j-o-connor',
        name: "Kevin J. O'Connor",
        credits: ['Cast'],
      },
      {
        id: 'ciaran-hinds',
        name: 'Ciarán Hinds',
        credits: ['Cast'],
      },
      {
        id: 'upton-sinclair',
        name: 'Upton Sinclair',
        credits: ['Screenplay'],
      },
      {
        id: 'robert-elswit',
        name: 'Robert Elswit',
        credits: ['Cinematography'],
      },
      {
        id: 'jonny-greenwood',
        name: 'Jonny Greenwood',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/75/image-w1280.jpg?1476279937',
    video_url:
      'https://trailers.mubi.com/75/t-there-will-be-blood_en_us_1280_720_1466361943.mp4',
  },
  {
    id: 'trainspotting',
    title: 'Trainspotting',
    release_year: 1996,
    genres: ['Drama', 'Crime', 'Cult'],
    cast: [
      {
        id: 'danny-boyle',
        name: 'Danny Boyle',
        credits: ['Director'],
      },
      {
        id: 'ewan-mcgregor',
        name: 'Ewan McGregor',
        credits: ['Cast'],
      },
      {
        id: 'ewen-bremner',
        name: 'Ewen Bremner',
        credits: ['Cast'],
      },
      {
        id: 'jonny-lee-miller',
        name: 'Jonny Lee Miller',
        credits: ['Cast'],
      },
      {
        id: 'kevin-mckidd',
        name: 'Kevin McKidd',
        credits: ['Cast'],
      },
      {
        id: 'john-hodge',
        name: 'John Hodge',
        credits: ['Screenplay'],
      },
      {
        id: 'irvine-welsh',
        name: 'Irvine Welsh',
        credits: ['Cast', 'Screenplay'],
      },
      {
        id: 'brian-tufano',
        name: 'Brian Tufano',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/144/image-w1280.jpg?1481117504',
    video_url: 'https://trailers.mubi.com/144/t-trainspotting_640w_700.m4v',
  },
  {
    id: 'un-chien-andalou',
    title: 'Un chien andalou',
    release_year: 1929,
    genres: ['Avant-Garde', 'Short', 'Cult'],
    cast: [
      {
        id: 'luis-bunuel',
        name: 'Luis Buñuel',
        credits: ['Screenplay', 'Producer', 'Editing', 'Cast', 'Director'],
      },
      {
        id: 'simone-mareuil',
        name: 'Simone Mareuil',
        credits: ['Cast'],
      },
      {
        id: 'pierre-batcheff',
        name: 'Pierre Batcheff',
        credits: ['Cast'],
      },
      {
        id: 'salvador-dali',
        name: 'Salvador Dalí',
        credits: ['Screenplay', 'Cast'],
      },
      {
        id: 'albert-duverger',
        name: 'Albert Duverger',
        credits: ['Cinematography'],
      },
      {
        id: 'jimmy-berliet',
        name: 'Jimmy Berliet',
        credits: ['Cinematography'],
      },
      {
        id: 'pierre-schild',
        name: 'Pierre Schild',
        credits: ['Production Design'],
      },
      {
        id: 'robert-hommet',
        name: 'Robert Hommet',
        credits: ['Cast'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/294/image-w1280.jpg?1498806220',
    video_url:
      'https://trailers.mubi.com/294/t-un-chien-andalou_xx_xx_240_245_294.mp4',
  },
  {
    id: 'ugetsu',
    title: 'Ugetsu',
    release_year: 1953,
    genres: ['Drama', 'Romance', 'Fantasy'],
    cast: [
      {
        id: 'kenji-mizoguchi',
        name: 'Kenji Mizoguchi',
        credits: ['Director'],
      },
      {
        id: 'masayuki-mori',
        name: 'Masayuki Mori',
        credits: ['Cast'],
      },
      {
        id: 'machiko-kyo',
        name: 'Machiko Kyô',
        credits: ['Cast'],
      },
      {
        id: 'kinuyo-tanaka',
        name: 'Kinuyo Tanaka',
        credits: ['Cast'],
      },
      {
        id: 'matsutaro-kawaguchi',
        name: 'Matsutaro Kawaguchi',
        credits: ['Screenplay'],
      },
      {
        id: 'yoshikata-yoda',
        name: 'Yoshikata Yoda',
        credits: ['Screenplay'],
      },
      {
        id: 'kazuo-miyagawa',
        name: 'Kazuo Miyagawa',
        credits: ['Cinematography'],
      },
      {
        id: 'fumio-hayasaka',
        name: 'Fumio Hayasaka',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/369/image-w1280.jpg?1530240161',
    video_url:
      'https://trailers.mubi.com/369/t-ugetsu_en_us_1280_720_1530305701.mp4',
  },
  {
    id: 'a-man-escaped',
    title: 'A Man Escaped',
    release_year: 1956,
    genres: ['Drama'],
    cast: [
      {
        id: 'robert-bresson',
        name: 'Robert Bresson',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'francois-leterrier',
        name: 'François Leterrier',
        credits: ['Cast'],
      },
      {
        id: 'charles-le-clainche',
        name: 'Charles Le Clainche',
        credits: ['Cast'],
      },
      {
        id: 'maurice-beerblock',
        name: 'Maurice Beerblock',
        credits: ['Cast'],
      },
      {
        id: 'roland-monod',
        name: 'Roland Monod',
        credits: ['Cast'],
      },
      {
        id: 'andre-devigny',
        name: 'André Devigny',
        credits: ['Screenplay'],
      },
      {
        id: 'leonce-henri-burel',
        name: 'Léonce-Henri Burel',
        credits: ['Cinematography'],
      },
      {
        id: 'raymond-lamy',
        name: 'Raymond Lamy',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/2091/image-w1280.jpg?1498807886',
    video_url:
      'https://trailers.mubi.com/2091/t-a-man-escaped_en_us_1280_720_1482453405.mp4',
  },
  {
    id: 'vivre-sa-vie',
    title: 'Vivre sa vie',
    release_year: 1962,
    genres: ['Drama'],
    cast: [
      {
        id: 'jean-luc-godard',
        name: 'Jean-Luc Godard',
        credits: ['Screenplay', 'Editing', 'Director'],
      },
      {
        id: 'anna-karina',
        name: 'Anna Karina',
        credits: ['Cast'],
      },
      {
        id: 'sady-rebbot',
        name: 'Sady Rebbot',
        credits: ['Cast'],
      },
      {
        id: 'andre-labarthe',
        name: 'André Labarthe',
        credits: ['Cast'],
      },
      {
        id: 'guylaine-schlumberger',
        name: 'Guylaine Schlumberger',
        credits: ['Cast'],
      },
      {
        id: 'marcel-sacotte',
        name: 'Marcel Sacotte',
        credits: ['Screenplay'],
      },
      {
        id: 'raoul-coutard',
        name: 'Raoul Coutard',
        credits: ['Cinematography'],
      },
      {
        id: 'michel-legrand',
        name: 'Michel Legrand',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/3060/image-w1280.jpg?1481542885',
    video_url:
      'https://trailers.mubi.com/3060/t-vivre-sa-vie_xx_xx_640_585_3060.mp4',
  },
  {
    id: 'cries-and-whispers',
    title: 'Cries and Whispers',
    release_year: 1972,
    genres: ['Drama'],
    cast: [
      {
        id: 'ingmar-bergman',
        name: 'Ingmar Bergman',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'harriet-andersson',
        name: 'Harriet Andersson',
        credits: ['Cast'],
      },
      {
        id: 'kari-sylwan',
        name: 'Kari Sylwan',
        credits: ['Cast'],
      },
      {
        id: 'ingrid-thulin',
        name: 'Ingrid Thulin',
        credits: ['Cast'],
      },
      {
        id: 'liv-ullmann',
        name: 'Liv Ullmann',
        credits: ['Cast'],
      },
      {
        id: 'sven-nykvist',
        name: 'Sven Nykvist',
        credits: ['Cinematography'],
      },
      {
        id: 'frederic-chopin',
        name: 'Frédéric Chopin',
        credits: ['Music'],
      },
      {
        id: 'johann-sebastian-bach',
        name: 'Johann Sebastian Bach',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/237/image-w1280.jpg?1523055912',
    video_url:
      'https://trailers.mubi.com/237/t-cries-and-whispers_en_us_1280_720_1497366840.mp4',
  },
  {
    id: 'videodrome',
    title: 'Videodrome',
    release_year: 1983,
    genres: ['Sci-Fi', 'Thriller'],
    cast: [
      {
        id: 'david-cronenberg',
        name: 'David Cronenberg',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'james-woods',
        name: 'James Woods',
        credits: ['Cast'],
      },
      {
        id: 'sonja-smits',
        name: 'Sonja Smits',
        credits: ['Cast'],
      },
      {
        id: 'deborah-harry',
        name: 'Deborah Harry',
        credits: ['Cast'],
      },
      {
        id: 'peter-dvorsky',
        name: 'Peter Dvorsky',
        credits: ['Cast'],
      },
      {
        id: 'mark-irwin',
        name: 'Mark Irwin',
        credits: ['Cinematography'],
      },
      {
        id: 'howard-shore',
        name: 'Howard Shore',
        credits: ['Music'],
      },
      {
        id: 'ronald-sanders',
        name: 'Ronald Sanders',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/240/image-w1280.jpg?1529034647',
    video_url:
      'https://trailers.mubi.com/240/t-videodrome_en_us_1280_720_1530055284.mp4',
  },
  {
    id: 'crouching-tiger-hidden-dragon',
    title: 'Crouching Tiger, Hidden Dragon',
    release_year: 2000,
    genres: ['Action', 'Romance', 'Fantasy'],
    cast: [
      {
        id: 'ang-lee',
        name: 'Ang Lee',
        credits: ['Producer', 'Director'],
      },
      {
        id: 'chow-yun-fat',
        name: 'Chow Yun-fat',
        credits: ['Cast'],
      },
      {
        id: 'michelle-yeoh',
        name: 'Michelle Yeoh',
        credits: ['Cast'],
      },
      {
        id: 'ziyi-zhang',
        name: 'Zhang Ziyi',
        credits: ['Cast'],
      },
      {
        id: 'chang-chen',
        name: 'Chang Chen',
        credits: ['Cast'],
      },
      {
        id: 'hui-ling-wang',
        name: 'Wang Hui-Ling',
        credits: ['Screenplay'],
      },
      {
        id: 'james-schamus',
        name: 'James Schamus',
        credits: ['Executive Producer', 'Screenplay'],
      },
      {
        id: 'tsai-kuo-jung',
        name: 'Tsai Kuo-jung',
        credits: ['Screenplay'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/1872/image-w1280.jpg?1498801005',
    video_url:
      'https://trailers.mubi.com/1872/t-crouching-tiger-hidden-dragon_en_us_1280_720_1487913194.mp4',
  },
  {
    id: 'wild-at-heart',
    title: 'Wild at Heart',
    release_year: 1990,
    genres: ['Comedy', 'Crime', 'Thriller'],
    cast: [
      {
        id: 'david-lynch',
        name: 'David Lynch',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'nicolas-cage',
        name: 'Nicolas Cage',
        credits: ['Cast'],
      },
      {
        id: 'laura-dern',
        name: 'Laura Dern',
        credits: ['Cast'],
      },
      {
        id: 'willem-dafoe',
        name: 'Willem Dafoe',
        credits: ['Cast'],
      },
      {
        id: 'j-e-freeman',
        name: 'J.E. Freeman',
        credits: ['Cast'],
      },
      {
        id: 'barry-gifford',
        name: 'Barry Gifford',
        credits: ['Screenplay'],
      },
      {
        id: 'frederick-elmes',
        name: 'Frederick Elmes',
        credits: ['Cinematography'],
      },
      {
        id: 'angelo-badalamenti',
        name: 'Angelo Badalamenti',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/2227/image-w1280.jpg?1518580328',
    video_url: 'https://trailers.mubi.com/2227/t-wild-at-heart_640w_700.m4v',
  },
  {
    id: 'we-need-to-talk-about-kevin',
    title: 'We Need to Talk About Kevin',
    release_year: 2011,
    genres: ['Drama'],
    cast: [
      {
        id: 'lynne-ramsay',
        name: 'Lynne Ramsay',
        credits: ['Screenplay', 'Executive Producer', 'Director'],
      },
      {
        id: 'tilda-swinton',
        name: 'Tilda Swinton',
        credits: ['Executive Producer', 'Cast'],
      },
      {
        id: 'john-c-reilly',
        name: 'John C. Reilly',
        credits: ['Cast'],
      },
      {
        id: 'ezra-miller',
        name: 'Ezra Miller',
        credits: ['Cast'],
      },
      {
        id: 'jasper-newell',
        name: 'Jasper Newell',
        credits: ['Cast'],
      },
      {
        id: 'rory-kinnear',
        name: 'Rory Kinnear',
        credits: ['Screenplay'],
      },
      {
        id: 'lionel-shriver',
        name: 'Lionel Shriver',
        credits: ['Screenplay'],
      },
      {
        id: 'seamus-mcgarvey',
        name: 'Seamus McGarvey',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/39858/image-w1280.jpg?1529581535',
    video_url:
      'https://trailers.mubi.com/39858/t-we-need-to-talk-about-kevin_en_us_1280_720_1493773845.mp4',
  },
  {
    id: 'xxy',
    title: 'XXY',
    release_year: 2007,
    genres: ['Drama', 'LGBT+'],
    cast: [
      {
        id: 'lucia-puenzo',
        name: 'Lucía Puenzo',
        credits: ['Director', 'Screenplay'],
      },
      {
        id: 'ricardo-darin',
        name: 'Ricardo Darín',
        credits: ['Cast'],
      },
      {
        id: 'valeria-bertuccelli',
        name: 'Valeria Bertuccelli',
        credits: ['Cast'],
      },
      {
        id: 'german-palacios',
        name: 'Germán Palacios',
        credits: ['Cast'],
      },
      {
        id: 'carolina-pelleritti',
        name: 'Carolina Pelleritti',
        credits: ['Cast'],
      },
      {
        id: 'sergio-bizzio',
        name: 'Sergio Bizzio',
        credits: ['Story'],
      },
      {
        id: 'natasha-braier',
        name: 'Natasha Braier',
        credits: ['Cinematography'],
      },
      {
        id: 'andres-goldstein',
        name: 'Andrés Goldstein',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/260/image-w1280.jpg?1516653713',
    video_url: 'https://trailers.mubi.com/260/t-xxy_xx_xx_450_248_260.mp4',
  },
  {
    id: 'journey-to-the-west',
    title: 'Journey to the West',
    release_year: 2014,
    genres: ['Short', 'Drama'],
    cast: [
      {
        id: 'tsai-ming-liang',
        name: 'Tsai Ming-liang',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'kang-sheng-lee',
        name: 'Lee Kang-sheng',
        credits: ['Cast'],
      },
      {
        id: 'denis-lavant',
        name: 'Denis Lavant',
        credits: ['Cast'],
      },
      {
        id: 'antoine-heberle',
        name: 'Antoine Héberlé',
        credits: ['Cinematography'],
      },
      {
        id: 'sebastien-mauro',
        name: 'Sébastien Mauro',
        credits: ['Music'],
      },
      {
        id: 'lei-shen-qing',
        name: 'Lei Shen Qing',
        credits: ['Editing'],
      },
      {
        id: 'vincent-wang',
        name: 'Vincent Wang',
        credits: ['Producer'],
      },
      {
        id: 'fred-bellaiche',
        name: 'Fred Bellaïche',
        credits: ['Producer'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/113779/image-w1280.jpg?1515121643',
    video_url:
      'https://trailers.mubi.com/113779/t-journey-to-the-west_en_us_1476165169.mp4',
  },
  {
    id: 'made-in-hong-kong',
    title: 'Made in Hong Kong',
    release_year: 1997,
    genres: ['Comedy', 'Crime', 'Drama'],
    cast: [
      {
        id: 'fruit-chan',
        name: 'Fruit Chan',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'sam-lee',
        name: 'Sam Lee',
        credits: ['Cast'],
      },
      {
        id: 'neiky-yim-hui-chi',
        name: 'Neiky Yim Hui-Chi',
        credits: ['Cast'],
      },
      {
        id: 'lam-wah-chuen',
        name: 'Lam Wah-Chuen',
        credits: ['Cinematography'],
      },
      {
        id: 'o-sing-pui',
        name: 'O Sing-Pui',
        credits: ['Cinematography'],
      },
      {
        id: 'doris-yang',
        name: 'Doris Yang',
        credits: ['Producer'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/1965/image-w1280.jpg?1502239958',
    video_url:
      'https://trailers.mubi.com/1965/t-made-in-hong-kong_xx_xx_480_489_1965.mp4',
  },
  {
    id: 'yojimbo',
    title: 'Yojimbo',
    release_year: 1961,
    genres: ['Action', 'Comedy', 'Adventure'],
    cast: [
      {
        id: 'akira-kurosawa',
        name: 'Akira Kurosawa',
        credits: ['Producer', 'Screenplay', 'Editing', 'Director'],
      },
      {
        id: 'toshiro-mifune',
        name: 'Toshirô Mifune',
        credits: ['Cast'],
      },
      {
        id: 'tatsuya-nakadai',
        name: 'Tatsuya Nakadai',
        credits: ['Cast'],
      },
      {
        id: 'yoko-tsukasa',
        name: 'Yôko Tsukasa',
        credits: ['Cast'],
      },
      {
        id: 'isuzu-yamada',
        name: 'Isuzu Yamada',
        credits: ['Cast'],
      },
      {
        id: 'ryuzo-kikushima',
        name: 'Ryûzô Kikushima',
        credits: ['Executive Producer', 'Screenplay'],
      },
      {
        id: 'kazuo-miyagawa',
        name: 'Kazuo Miyagawa',
        credits: ['Cinematography'],
      },
      {
        id: 'masaru-sato',
        name: 'Masaru Satô',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/597/image-w1280.jpg?1445918497',
    video_url: 'https://trailers.mubi.com/597/t-yojimbo_xx_xx_640_585_597.mp4',
  },
  {
    id: 'y-tu-mama-tambien',
    title: 'Y tu mamá también',
    release_year: 2001,
    genres: ['Drama', 'Romance', 'Comedy'],
    cast: [
      {
        id: 'alfonso-cuaron',
        name: 'Alfonso Cuarón',
        credits: ['Editing', 'Producer', 'Screenplay', 'Director'],
      },
      {
        id: 'maribel-verdu',
        name: 'Maribel Verdú',
        credits: ['Cast'],
      },
      {
        id: 'diego-luna',
        name: 'Diego Luna',
        credits: ['Cast'],
      },
      {
        id: 'gael-garcia-bernal',
        name: 'Gael García Bernal',
        credits: ['Cast'],
      },
      {
        id: 'daniel-gimenez-cacho',
        name: 'Daniel Giménez Cacho',
        credits: ['Cast'],
      },
      {
        id: 'carlos-cuaron',
        name: 'Carlos Cuarón',
        credits: ['Screenplay'],
      },
      {
        id: 'emmanuel-lubezki',
        name: 'Emmanuel Lubezki',
        credits: ['Cinematography'],
      },
      {
        id: 'alex-rodriguez',
        name: 'Alex Rodríguez',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/287/image-w1280.jpg?1489451555',
    video_url:
      'https://trailers.mubi.com/287/t-y-tu-mama-tambien_448w_500.20091009.m4v',
  },
  {
    id: 'yi-yi-a-one-and-a-two',
    title: 'Yi Yi',
    release_year: 2000,
    genres: ['Drama'],
    cast: [
      {
        id: 'edward-yang',
        name: 'Edward Yang',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'wu-nien-jen',
        name: 'Wu Nien-Jen',
        credits: ['Cast'],
      },
      {
        id: 'elaine-jin',
        name: 'Elaine Jin',
        credits: ['Cast'],
      },
      {
        id: 'issei-ogata',
        name: 'Issei Ogata',
        credits: ['Cast'],
      },
      {
        id: 'kelly-lee',
        name: 'Kelly Lee',
        credits: ['Cast'],
      },
      {
        id: 'kaili-peng',
        name: 'Kaili Peng',
        credits: ['Music'],
      },
      {
        id: 'shinya-kawai',
        name: 'Shinya Kawai',
        credits: ['Producer'],
      },
      {
        id: 'naoko-tsukeda',
        name: 'Naoko Tsukeda',
        credits: ['Producer'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/781/image-w1280.jpg?1493343725',
    video_url: 'https://trailers.mubi.com/781/t-yi-yi_640w_700.m4v',
  },
  {
    id: 'the-mirror',
    title: 'The Mirror',
    release_year: 1974,
    genres: ['Avant-Garde', 'Drama'],
    cast: [
      {
        id: 'andrei-tarkovsky',
        name: 'Andrei Tarkovsky',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'margarita-terekhova',
        name: 'Margarita Terekhova',
        credits: ['Cast'],
      },
      {
        id: 'ignat-daniltsev',
        name: 'Ignat Daniltsev',
        credits: ['Cast'],
      },
      {
        id: 'larisa-tarkovskaya',
        name: 'Larisa Tarkovskaya',
        credits: ['Cast'],
      },
      {
        id: 'alla-demidova',
        name: 'Alla Demidova',
        credits: ['Cast'],
      },
      {
        id: 'aleksandr-misharin',
        name: 'Aleksandr Misharin',
        credits: ['Screenplay'],
      },
      {
        id: 'georgi-rerberg',
        name: 'Georgi Rerberg',
        credits: ['Cinematography'],
      },
      {
        id: 'eduard-artemyev',
        name: 'Eduard Artemyev',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/397/image-w1280.jpg?1528841362',
    video_url:
      'https://trailers.mubi.com/397/c-the-mirror_xx_xx_616_1250_397.mp4',
  },
  {
    id: 'z',
    title: 'Z',
    release_year: 1969,
    genres: ['Crime', 'Drama', 'Thriller'],
    cast: [
      {
        id: 'costa-gavras',
        name: 'Costa-Gavras',
        credits: ['Screenplay', 'Director'],
      },
      {
        id: 'yves-montand',
        name: 'Yves Montand',
        credits: ['Cast'],
      },
      {
        id: 'irene-papas',
        name: 'Irene Papas',
        credits: ['Cast'],
      },
      {
        id: 'jean-louis-trintignant',
        name: 'Jean-Louis Trintignant',
        credits: ['Cast'],
      },
      {
        id: 'jacques-perrin',
        name: 'Jacques Perrin',
        credits: ['Producer', 'Cast'],
      },
      {
        id: 'jorge-semprun',
        name: 'Jorge Semprún',
        credits: ['Screenplay'],
      },
      {
        id: 'raoul-coutard',
        name: 'Raoul Coutard',
        credits: ['Cinematography'],
      },
      {
        id: 'mikis-theodorakis',
        name: 'Mikis Theodorakis',
        credits: ['Music'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/1400/image-w1280.jpg?1494322695',
    video_url: 'https://trailers.mubi.com/1400/t-z_xx_xx_422_488_1400.mp4',
  },
  {
    id: 'zombieland',
    title: 'Zombieland',
    release_year: 2009,
    genres: ['Comedy', 'Horror'],
    cast: [
      {
        id: 'ruben-fleischer',
        name: 'Ruben Fleischer',
        credits: ['Director'],
      },
      {
        id: 'woody-harrelson',
        name: 'Woody Harrelson',
        credits: ['Cast'],
      },
      {
        id: 'jesse-eisenberg',
        name: 'Jesse Eisenberg',
        credits: ['Cast'],
      },
      {
        id: 'emma-stone',
        name: 'Emma Stone',
        credits: ['Cast'],
      },
      {
        id: 'abigail-breslin',
        name: 'Abigail Breslin',
        credits: ['Cast'],
      },
      {
        id: 'rhett-reese',
        name: 'Rhett Reese',
        credits: ['Executive Producer', 'Screenplay'],
      },
      {
        id: 'paul-wernick',
        name: 'Paul Wernick',
        credits: ['Screenplay', 'Executive Producer'],
      },
      {
        id: 'michael-bonvillain',
        name: 'Michael Bonvillain',
        credits: ['Cinematography'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/3508/image-w1280.jpg?1499968619',
    video_url:
      'https://trailers.mubi.com/3508/t-zombieland_en_us_1280_720_1500262968.mp4',
  },
];
