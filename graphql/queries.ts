export const GET_CHARACTERS = `query getCharacters($page: Int) {
  characters(page: $page) {
    results {
      id
      image
      name
      species
    }
    info {
      count
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

export const GET_EPISODES = `query getEpisodes($page: Int) {
  episodes(page: $page) {
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
    info {
      count
    }
  }
}
`

export const GET_CHARACTER_BY_IDS = `query CharactersByIds($ids: [ID!]!) {
  charactersByIds(ids: $ids) {
    id
    image
    name
  }
}
`