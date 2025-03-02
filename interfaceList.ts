export interface Character{
    id: number,
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: number,
    films: number[],
    species: number[],
    vehicles: number[],
    starships: number[],
    created: Date,
    edited: Date,
    url: string
}

export interface Film{
    id: number,
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: Date,
    characters: number[],
    planets: number[],
    starships: number[],
    vehicles: number[],
    created: Date,
    edited: Date,
    url: string
}

export interface Starship{
    id: number,
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    consumables: string,
    hyperdrive_rating: string,
    MGLT: string,
    starship_class: string,
    pilots: number[],
    films: number[],
    created: Date,
    edited: Date,
    url: string
}