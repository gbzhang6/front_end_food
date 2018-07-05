const URL = 'http://localhost:3000/api/v1/restaurants/yelpSearch'

export function findMyRestaurants(searchTerm, searchCity){
  return (dispatch) => {
    return fetch(`${URL}?term=${searchTerm}&location=${searchCity}`)
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
