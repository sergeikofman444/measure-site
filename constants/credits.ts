export type MediaItem = {
  title: string;
  year: number;
  type: string;
  director: string;
  link?: string;
};

export type ConcertWork = {
    title: string,
    year: number;
    ensemble: string;
    performed: string;
    link?: string;
}

export const mediaCredits: Record<string, MediaItem> = {
    the_hedonist: {
        title: 'The Hedonist',
        year: 2025,
        type: 'Feature Film',
        director: 'Nick Funess',
    },
    city_centre_dc:  {
        title: 'City Centre DC Holiday Campaign',
        year: 2025,
        type: 'Commercial',
        director: 'Corentin Leroux',
    },
    tams: {
        title: 'Tams Pants Campaign',
        year: 2025,
        type: 'Commercial',
        director: 'Ilya Sarossy',
    },
    softgrit: {
        title: 'Softgrit Launch Campaign',
        year: 2025,
        type: 'Commercial',
        director: 'Ilya Sarossy',
    },
    young_blondes: {
        title: 'Young Blondes, Stalked and Murdered',
        year: 2024,
        type: 'Feature Film',
        director: 'Nick Funess',
    },
    bum_peeper: {
        title: 'Bum Peeper',
        year: 2024,
        type: 'Short Film',
        director: 'Charlie Osler',
    },
    no_bodies_home: {
        title: `No Body's home`,
        year: 2023,
        type: 'Experimental Short Film',
        director: 'Hannah Stein',
    },
    corona_cuckoo: {
        title: 'Corona Cuckoo',
        year: 2021,
        type: 'Short Film',
        director: 'Stephen Roscoe'
    },
    project_pd: {
        title: 'Project PD',
        year: 2021,
        type: 'Short Animated Film',
        director: 'Miguel Ventura',
    },
    dinner_for_five: {
        title: 'Dinner For Five',
        year: 2019,
        type: 'Short Film',
        director: 'Giancarlo Corlucci',
    },
    in_passing: {
        title: 'In Passing',
        year: 2019,
        type: 'Short Animated Film',
        director: 'Esther Cheung',
    },
    insert_name: {
        title: 'Askew',
        year: 2019,
        type: 'Short Animated Film',
        director: 'Isaac Delaney',
    },
    duper: {
        title: 'Duper',
        year: 2019,
        type: 'Podcast',
        director: 'Luc Mandl',
    },
    canary_complex: {
        title: 'Canary Complex',
        year: 2019,
        type: 'Short Film',
        director: 'Algot Skog'
    },
    the_faces_we_wear: {
        title: 'The Faces We Wear',
        year: 2019,
        type: 'Documentary',
        director: 'Jean-Luc Moniz',
    },
    metro: {
        title: 'Metro',
        year: 2019,
        type: 'Documentary',
        director: 'Evan Winch',
    },
    movie_vs: {
        title: 'Movie Vs',
        year: 2018,
        type: 'Youtube Series',
        director: 'Emily Zhao & Dakota Deady',
    },
    juxtapod: {
        title: 'Juxtapod',
        year: 2018,
        type: 'Podcast',
        director: 'Benjamin Levy',
    },
    what_if_i: {
        title: 'What if I...',
        year: 2018,
        type: 'Webseries',
        director: 'Nat Roberts',
    },
    turniptheheat: {
        title: 'Turniptheheat',
        year: 2017,
        type: 'Short Animated Film',
        director: 'Richie Heng',
    },
    warrior_within: {
        title: 'Warrior Within',
        year: 2017,
        type: 'Short Film',
        director: 'Catharine Wachter'
    },
    oh_sheet: {
        title: 'Oh Sheet',
        year: 2016,
        type: 'Short Animated Film',
        director: 'Michael Petheric',
    },
    guidance: {
        title: 'Guidance',
        year: 2014,
        type: 'Feature Film',
        director: 'Pat Mills'
    },
}

export const danceCredits: Record<string, MediaItem> = {
    bvbk: {
        title: 'Be Vardų, Be Kojų',
        year: 2025,
        type: 'Dance Piece',
        director: 'Brigida Gedgaudas',
    },
    bed: {
        title: 'Bed',
        year: 2025,
        type: 'Improvised Dance performance with Live Music Performance, in collaboration with Wolfang Gray and Samantha Goldman',
        director: 'Dance by Hannah Stein & Evan Webb'
    },
    fascia: {
        title: 'Fascia',
        year: 2022,
        type: 'Theatrical Dance Production with Live Music Performance, in collaboration with Wolfang Gray',
        director: 'Hannah Stein and Cecilia Bartolino',
    },
    revelation_of_chaos: {
        title: 'A Revelation of Chaos',
        year: 2016,
        type: 'Theatrical Dance Production',
        director: 'Nate Gerber & Susheela Ramachradan',
    }
}

export const orchestraWorks: Record<string, ConcertWork> = {
    conjunctio: {
        title: 'Conjunctio',
        year: 2019,
        ensemble: 'String Orchestra',
        performed: 'commissioned & premiered by the Whispering River Orchestra',
    },
    nips_and_porkington: {
        title: 'Nips and Porkington',
        year: 2019,
        ensemble: 'Orchestral Score for short animated film',
        performed: 'commissioned & premiered by the Scarborough Philharmonic Orchestra',
    },
    wings_of_fire: {
        title: 'On Wings of Fire',
        year: 2018,
        ensemble: 'Song Cycle for Solo Alto, Solo Clarinet, and String Orchestra',
        performed: 'commissioned & premiered by the Whispering River Orchestra',
    },
    land_of_reflection: {
        title: 'Land of Reflection',
        year: 2018,
        ensemble: 'Orchestral Overture',
        performed: 'commissioned & premiered by the Kawartha Youth Orchestra',
    },
    haunted_house: {
        title: 'Haunted House',
        year: 2018,
        ensemble: 'Orchestral Rescore (Murdoch Mysteries)',
        performed: 'read & recorded by the University of Toronto Symphony Orchestra for the SCGC ORS'
    },
    walkabout: {
        title: 'Walkabout',
        year: 2017,
        ensemble: 'Orchestra',
        performed: 'Read by the Wilfrid Laurier Symphony Orchestra '
    },
    overture: {
        title: 'Overture',
        year: 2014,
        ensemble: 'Orchestra',
        performed: 'Premiered by University of Toronto Schools Orchestra',
    },
}

export const chamberWorks: Record<string, ConcertWork> = {
    change_and_stillness: {
        title: "I heard the scent of change and stillness",
        year: 2023,
        ensemble: 'Piano and Violin',
        performed: 'Recorded by Alex Toskov and Sergei Kofman, released as title track of EP'
    },
    wither_i_know_not: {
        title: 'wither i know not where',
        year: 2022,
        ensemble: 'String Quartet',
        performed: 'Recorded by the Odin Quartet for the Scarborough Philharmonic Orchestra'
    },
    what_does_the_water_get_in_return: {
        title: 'What Does the Water Get in Return?',
        year: 2021,
        ensemble: 'Theremin and Piano',
        performed: 'Recorded by Thorwald Jorgensen and Kamilla Bystrova for the East Chamber Music Festival Series',
    },
    metonym: {
        title: 'Metonym',
        year: 2019,
        ensemble: 'Wind Orchestra (2 Fl., 2 Ob., 2 Cl., 2 Bs., 2Hn., 1 Tpt., Perc., String Bass)',
        performed: 'Performed by musicians of the Scarborough Philharmonic Orchestra'
    },
    overgrowth: {
        title: 'Overgrowth',
        year: 2018,
        ensemble: 'Flute, Clarinet, Piano, Violin, Cello',
        performed: 'Performed by the Ensemble Contemporain de Montreal, conducted by Veronique Lacroix, at a reading session at the University of Toronto in 2018, Premiered by the Atlantic Music Festival Contemporary Ensemble in 2019'
    },
    when_but_wain_we: {
        title: 'when but wain we',
        year: 2018,
        ensemble: 'Fl, Cl., Bs., 2 Perc., 2 Vln., 2 Vc., Live Electronics',
        performed: 'Premiered at Wilfrid Laurier University Faculty of Music Student Composer Concert',
    },
    septet: {
        title: 'Septet',
        year: 2016,
        ensemble: 'Flute, Clarinet, Bassoon, Piano, Violin, Viola, Cello',
        performed: 'Premiered at Wilfrid Laurier University Faculty of Music Student Composer Concert',
    },
    string_quartet_in_d_minor: {
        title: 'String Quartet in D minor',
        year: 2016,
        ensemble: 'String Quartet',
        performed: 'Premiered at Wilfrid Laurier University Faculty of Music Student Composer Concert',
    },
    string_quartet_in_c_sharp_minor: {
        title: 'String Quartet in C# minor',
        year: 2013,
        ensemble: 'String Quartet',
        performed: 'Premiered at CMC Ping, at University of Toronto Schools',
    },
    andante_in_b_minor: {
        title: 'Andante in B minor',
        year: 2013,
        ensemble: '',
        performed: 'Premiered at University of Toronto Schools TedX',
    },
}

export const soloWorks: Record<string, ConcertWork> = {
    taxidi: {
        title: 'Taxidi',
        year: 2018,
        ensemble: 'Piano',
        performed: 'Premiered at Wilfrid Laurier University Graduation Recital'
    },
    thin_ice: {
        title: 'Thin Ice',
        year: 2018,
        ensemble: 'Piano',
        performed: 'Premiered at Wilfrid Laurier University Faculty of Music Student Composer Concert'
    }
}
