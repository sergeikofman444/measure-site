export type MediaItem = {
  title: string;
  year: number;
  type: string;
  director: string;
  link?: string;
};

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
        type: 'corona',
        director: 'Stephen Roscoe'
    }
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
    }
}