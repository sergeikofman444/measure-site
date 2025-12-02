export type MediaItem = {
  title: string;
  year: number;
  description1: string;
  description2: string;
  link?: string;
};

export type ProductionCredit = {
    title: string,
    year: number;
    description: string;
    artist: string;
    label: string;
    link?: string;
}

export const mediaCredits: Record<string, MediaItem> = {
    the_hedonist: {
        title: 'The Hedonist',
        year: 2025,
        description1: 'Feature Film',
        description2: 'Nick Funess',
    },
    city_centre_dc:  {
        title: 'City Centre DC Holiday Campaign',
        year: 2025,
        description1: 'Commercial',
        description2: 'Corentin Leroux',
    },
    tams: {
        title: 'Tams Pants Campaign',
        year: 2025,
        description1: 'Commercial',
        description2: 'Ilya Sarossy',
    },
    softgrit: {
        title: 'Softgrit Launch Campaign',
        year: 2025,
        description1: 'Commercial',
        description2: 'Ilya Sarossy',
    },
    young_blondes: {
        title: 'Young Blondes, Stalked and Murdered',
        year: 2024,
        description1: 'Feature Film',
        description2: 'Nick Funess',
    },
    bum_peeper: {
        title: 'Bum Peeper',
        year: 2024,
        description1: 'Short Film',
        description2: 'Charlie Osler',
    },
    no_bodies_home: {
        title: `No Body's home`,
        year: 2023,
        description1: 'Experimental Short Film',
        description2: 'Hannah Stein',
    },
    corona_cuckoo: {
        title: 'Corona Cuckoo',
        year: 2021,
        description1: 'Short Film',
        description2: 'Stephen Roscoe'
    },
    project_pd: {
        title: 'Project PD',
        year: 2021,
        description1: 'Short Animated Film',
        description2: 'Miguel Ventura',
    },
    dinner_for_five: {
        title: 'Dinner For Five',
        year: 2019,
        description1: 'Short Film',
        description2: 'Giancarlo Corlucci',
    },
    in_passing: {
        title: 'In Passing',
        year: 2019,
        description1: 'Short Animated Film',
        description2: 'Esther Cheung',
    },
    insert_name: {
        title: 'Askew',
        year: 2019,
        description1: 'Short Animated Film',
        description2: 'Isaac Delaney',
    },
    duper: {
        title: 'Duper',
        year: 2019,
        description1: 'Podcast',
        description2: 'Luc Mandl',
    },
    canary_complex: {
        title: 'Canary Complex',
        year: 2019,
        description1: 'Short Film',
        description2: 'Algot Skog'
    },
    the_faces_we_wear: {
        title: 'The Faces We Wear',
        year: 2019,
        description1: 'Documentary',
        description2: 'Jean-Luc Moniz',
    },
    metro: {
        title: 'Metro',
        year: 2019,
        description1: 'Documentary',
        description2: 'Evan Winch',
    },
    movie_vs: {
        title: 'Movie Vs',
        year: 2018,
        description1: 'Youtube Series',
        description2: 'Emily Zhao & Dakota Deady',
    },
    juxtapod: {
        title: 'Juxtapod',
        year: 2018,
        description1: 'Podcast',
        description2: 'Benjamin Levy',
    },
    what_if_i: {
        title: 'What if I...',
        year: 2018,
        description1: 'Webseries',
        description2: 'Nat Roberts',
    },
    turniptheheat: {
        title: 'Turniptheheat',
        year: 2017,
        description1: 'Short Animated Film',
        description2: 'Richie Heng',
    },
    warrior_within: {
        title: 'Warrior Within',
        year: 2017,
        description1: 'Short Film',
        description2: 'Catharine Wachter'
    },
    oh_sheet: {
        title: 'Oh Sheet',
        year: 2016,
        description1: 'Short Animated Film',
        description2: 'Michael Petheric',
    },
    guidance: {
        title: 'Guidance',
        year: 2014,
        description1: 'Feature Film',
        description2: 'Pat Mills'
    },
}

export const releases: Record<string, MediaItem> = {
    artefacts: {
        title: 'Artefacts',
        year: 2026,
        description1: 'Full Length Album',
        description2: 'Halocline Trance',
    },
    change_and_stillness: {
        title: 'I Hear the Scenf of Change and Stillness',
        year: 2023,
        description1: 'EP',
        description2: 'Self Released',
    },
    dont_ask_me_to_stay: {
        title: `Don't Ask Me To Stay (with Nakul and Lazar Miric)`,
        year: 2022, 
        description1: 'Single',
        description2: 'Self Released'
    },
    hypnotized: {
        title: 'Hypnotized (with Wolfgang Gray)',
        year: 2022,
        description1: 'Single',
        description2: 'Self Released',
    },
    diamond: {
        title: 'Diamond',
        year: 2020,
        description1: 'EP',
        description2: 'Self Released'
    },
}

export const productionCredits: Record<string, MediaItem> = {
    905: {
        title: '905',
        year: 2025,
        description1: 'Co-produced, recorded, mixed',
        description2: 'Aiza Desaron',
    },
    run: {
        title: 'Run',
        year: 2025,
        description1: 'Co-produced, mixed',
        description2: 'Aiza Desaron',
    },
    sick: {
        title: 'Sick',
        year: 2025,
        description1: 'Co-produced',
        description2: 'IlyQuiet.',
    },
    final_girl: {
        title: 'Final Girl',
        year: 2024,
        description1: 'Recorded vocals, mixed, additional production',
        description2: 'Erin Browne',
    },
    when_limbs_die: {
        title: 'When Limbs Die',
        year: 2023,
        description1: 'Recorded & played piano, recorded cello & flute, arranged piano, cello, & flute',
        description2: 'Yoyo Comay',
    },
    bloody_lip: {
        title: 'Bloody Lip (reprise)',
        year: 2023,
        description1: 'Co-produced',
        description2: 'shemona',
    },
    candle: {
        title: 'Candle',
        year: 2022,
        description1: 'Additional production',
        description2: 'Lauren Babic & Milen Piltzen-Sorace',
    },
    next_saturday: {
        title: 'Til Next Saturday',
        year: 2022,
        description1: 'Additional production (string production)',
        description2: 'Brown Sugar Factory'
    },
    misfits: {
        title: 'Misfits',
        year: 2021,
        description1: 'Produced, recorded, mixed',
        description2: 'Nakul',
    }
}

export const danceCredits: Record<string, MediaItem> = {
    bvbk: {
        title: 'Be Vardų, Be Kojų',
        year: 2025,
        description1: 'Dance Piece',
        description2: 'Brigida Gedgaudas',
    },
    bed: {
        title: 'Bed',
        year: 2025,
        description1: 'Improvised Dance performance with Live Music Performance, in collaboration with Wolfang Gray and Samantha Goldman',
        description2: 'Dance by Hannah Stein & Evan Webb'
    },
    fascia: {
        title: 'Fascia',
        year: 2022,
        description1: 'Theatrical Dance Production with Live Music Performance, in collaboration with Wolfang Gray',
        description2: 'Hannah Stein and Cecilia Bartolino',
    },
    revelation_of_chaos: {
        title: 'A Revelation of Chaos',
        year: 2016,
        description1: 'Theatrical Dance Production',
        description2: 'Nate Gerber & Susheela Ramachradan',
    }
}

export const orchestraWorks: Record<string, MediaItem> = {
    conjunctio: {
        title: 'Conjunctio',
        year: 2019,
        description1: 'String Orchestra',
        description2: 'commissioned & premiered by the Whispering River Orchestra',
    },
    nips_and_porkington: {
        title: 'Nips and Porkington',
        year: 2019,
        description1: 'Orchestral Score for short animated film',
        description2: 'commissioned & premiered by the Scarborough Philharmonic Orchestra',
    },
    wings_of_fire: {
        title: 'On Wings of Fire',
        year: 2018,
        description1: 'Song Cycle for Solo Alto, Solo Clarinet, and String Orchestra',
        description2: 'commissioned & premiered by the Whispering River Orchestra',
    },
    land_of_reflection: {
        title: 'Land of Reflection',
        year: 2018,
        description1: 'Orchestral Overture',
        description2: 'commissioned & premiered by the Kawartha Youth Orchestra',
    },
    haunted_house: {
        title: 'Haunted House',
        year: 2018,
        description1: 'Orchestral Rescore (Murdoch Mysteries)',
        description2: 'read & recorded by the University of Toronto Symphony Orchestra for the SCGC ORS'
    },
    walkabout: {
        title: 'Walkabout',
        year: 2017,
        description1: 'Orchestra',
        description2: 'Read by the Wilfrid Laurier Symphony Orchestra '
    },
    overture: {
        title: 'Overture',
        year: 2014,
        description1: 'Orchestra',
        description2: 'Premiered by University of Toronto Schools Orchestra',
    },
}

export const chamberWorks: Record<string, MediaItem> = {
    change_and_stillness: {
        title: "I heard the scent of change and stillness",
        year: 2023,
        description1: 'Piano and Violin',
        description2: 'Recorded by Alex Toskov and Sergei Kofman, released as title track of EP'
    },
    wither_i_know_not: {
        title: 'wither i know not where',
        year: 2022,
        description1: 'String Quartet',
        description2: 'Recorded by the Odin Quartet for the Scarborough Philharmonic Orchestra'
    },
    what_does_the_water_get_in_return: {
        title: 'What Does the Water Get in Return?',
        year: 2021,
        description1: 'Theremin and Piano',
        description2: 'Recorded by Thorwald Jorgensen and Kamilla Bystrova for the East Chamber Music Festival Series',
    },
    metonym: {
        title: 'Metonym',
        year: 2019,
        description1: 'Wind Orchestra (2 Fl., 2 Ob., 2 Cl., 2 Bs., 2Hn., 1 Tpt., Perc., String Bass)',
        description2: 'Performed by musicians of the Scarborough Philharmonic Orchestra'
    },
    overgrowth: {
        title: 'Overgrowth',
        year: 2018,
        description1: 'Flute, Clarinet, Piano, Violin, Cello',
        description2: 'Performed by the Ensemble Contemporain de Montreal, conducted by Veronique Lacroix, at a reading session at the University of Toronto in 2018, Premiered by the Atlantic Music Festival Contemporary Ensemble in 2019'
    },
    when_but_wain_we: {
        title: 'when but wain we',
        year: 2018,
        description1: 'Fl, Cl., Bs., 2 Perc., 2 Vln., 2 Vc., Live Electronics',
        description2: 'Premiered at Wilfrid Laurier University Faculty of Music Student Composer Concert',
    },
    septet: {
        title: 'Septet',
        year: 2016,
        description1: 'Flute, Clarinet, Bassoon, Piano, Violin, Viola, Cello',
        description2: 'Premiered at Wilfrid Laurier University Faculty of Music Student Composer Concert',
    },
    string_quartet_in_d_minor: {
        title: 'String Quartet in D minor',
        year: 2016,
        description1: 'String Quartet',
        description2: 'Premiered at Wilfrid Laurier University Faculty of Music Student Composer Concert',
    },
    string_quartet_in_c_sharp_minor: {
        title: 'String Quartet in C# minor',
        year: 2013,
        description1: 'String Quartet',
        description2: 'Premiered at CMC Ping, at University of Toronto Schools',
    },
    andante_in_b_minor: {
        title: 'Andante in B minor',
        year: 2013,
        description1: '',
        description2: 'Premiered at University of Toronto Schools TedX',
    },
}

export const soloWorks: Record<string, MediaItem> = {
    taxidi: {
        title: 'Taxidi',
        year: 2018,
        description1: 'Piano',
        description2: 'Premiered at Wilfrid Laurier University Graduation Recital'
    },
    thin_ice: {
        title: 'Thin Ice',
        year: 2018,
        description1: 'Piano',
        description2: 'Premiered at Wilfrid Laurier University Faculty of Music Student Composer Concert'
    }
}
