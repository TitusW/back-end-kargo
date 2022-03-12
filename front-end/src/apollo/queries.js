import gql from 'graphql-tag'

export const GET_ALL_FILMS = gql`
  query allFilms {
    allFilms {
        films {
            id
            title      
            director
            releaseDate
        }  
    }
}    
`

export const GET_FILM = gql`
query getFilm($idFilm: ID!){
    film(id: $idFilm){
        title
        releaseDate
        director
        producers
        openingCrawl
        characterConnection{
          characters{
            id
            name
            gender
            birthYear
            skinColor
            species{
                id
                name
            }
          }
        }
      }
}
`

export const GET_ALL_CHARACTERS = gql`
query getAllCharacters{
    allPeople{
        people{
            id
            name
            gender
            birthYear
            skinColor
            species{
                id
                name
            }
        }
    }
}
`

export const GET_CHARACTER = gql`
query getCharacter($idChar: ID!){
    person(id: $idChar){
        name
        gender
        birthYear
        hairColor
        height
        mass
        species{
            name
        }
    }
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
