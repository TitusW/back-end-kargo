import gql from 'graphql-tag'

export const GET_ALL_TRUCKS = gql`
  query allFilms {
    
}    
`

export const GET_ALL_DRIVER = gql`
query getFilm{
}
`

export const GET_ALL_SHIPMENT = gql`
query getAllShipment{
}
`

export const GET_SHIPMENT = gql`
query getShipment($idChar: ID!){
    
}
`

// allFilms(first: 100){}(after: Stringfirst: Intbefore: Stringlast: Int): FilmsConnection

// film(id: IDfilmID: ID): Film

// allPeople(after: Stringfirst: Intbefore: Stringlast: Int): PeopleConnection

// person(id: IDpersonID: ID): Person

// allPlanets(after: Stringfirst: Intbefore: Stringlast: Int): PlanetsConnection

// planet(id: IDplanetID: ID): Planet

// allSpecies(after: Stringfirst: Intbefore: Stringlast: Int): SpeciesConnection

// species(id: IDspeciesID: ID): Species

// allStarships(after: Stringfirst: Intbefore: Stringlast: Int): StarshipsConnection

// starship(id: IDstarshipID: ID): Starship

// allVehicles(after: Stringfirst: Intbefore: Stringlast: Int): VehiclesConnection

// vehicle(id: IDvehicleID: ID): Vehicle

// node(id: ID!): Node
