export function findMyRestaurants(searchTermForRestaurants){
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/restaurants/yelpSearch')
      .then(res => res.json())
      .then(json => json.results.businesses)
      .then(businesses => dispatch(
        {type: "UPDATE_RESTAURANT_STATE",
        payload: businesses}
      )
    )
  }
}

export function updateSearchTerm(searchTerm){
  return {
    type: "UPDATE_SEARCH_TERM",
    payload: searchTerm
  }
}

export function updateSearchCity(searchCity){
  return {
    type: "UPDATE_SEARCH_CITY",
    payload: searchCity
  }
}

export function findRestaurantsByQuery(searchTermForRestaurants){
  return {
    type: "FIND_RESTAURANTS_BY_QUERY",
    payload: searchTermForRestaurants
  }
}
