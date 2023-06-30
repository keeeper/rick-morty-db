export const GET_CHARACTERS = `query getCharacters {
  characters {
    results {
      id
      image
      name
    }
  }
}`;

export const GET_CHARACTER = `query getCharacter($characterId: ID!) {
  character(id: $characterId) {
    id
    image
    location {
      name
      id
      dimension
    }
    name
    gender
    episode {
      id
      name
    }
    status
    type
    species
    origin {
      name
    }
  }
}`;

export const GET_EPISODE = `query getEpisode($episodeId: ID!) {
  episode(id: $episodeId) {
    id
    name
    characters {
      id
      image
      name
    }
    episode
    air_date
  }
}`;

// export const GET_FILM = `query getFilm($filmId: ID) {
//   film(id: $filmId) {
//     title
//     created
//     director
//     openingCrawl
//     characterConnection {
//       characters {
//         id
//         name
//       }
//     }
//   }
// }`;

// export const GET_CHARACTER = `query getCharacter($personId: ID) {
//   person(id: $personId) {
//     name
//     birthYear
//     eyeColor
//     height
//     hairColor
//     id
//     homeworld {
//       id
//       name
//     }
//   }
// }`