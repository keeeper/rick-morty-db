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
      air_date
      episode
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

export const GET_EPISODES = `query getEpisodes {
  episodes {
    results {
      episode
      id
      name
      air_date
      characters {
        id
        image
        name
      }
    }
  }
}
`