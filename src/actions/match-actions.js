export function findMyMatches(matches){
  return {
    type: "FIND_ALL_MY_MATCHES",
    payload: {
      user: [...matches]
    }
  }
}

export function updateSearchTerm(searchTerm){
  return {
    type: "UPDATE_SEARCH_TERM",
    payload: searchTerm
  }
}

export function findRestaurantsByQuery(restaurants){
  return {
    type: "FIND_RESTAURANTS_BY_QUERY",
    payload: restaurants
  }
}
