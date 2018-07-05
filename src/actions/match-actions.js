const URL = 'http://localhost:3000/api/v1/restaurants/yelpSearch'
const URL2 = ''

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

export function matchRestaurant(matchRestaurant){
  return {
    type: "ADD_TO_MATCHES",
    payload: matchRestaurant
  }
}

export function rejectRestaurant(rejectedRestaurant){
  return {
    type: "ADD_TO_REJECTS",
    payload: rejectRestaurant
  }
}
