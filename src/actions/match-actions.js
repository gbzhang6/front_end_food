const URL = 'http://localhost:3000/api/v1/restaurants/yelpSearch'
const URL2 = 'http://localhost:3000/api/v1/matches'

export function updateUser(userID){
  return {
    type: "UPDATE_USER_ID",
    payload: userID
  }
}

export function userLocation(longitude, latitude) {
  return {
    type: "FIND_USER_LOCATION",
    payload: [longitude, latitude]
  }
}

export function findMyRestaurants(searchTerm, searchCity, price){
  return (dispatch) => {
    return fetch(`${URL}?term=${searchTerm}&location=${searchCity}&price=${price}`)
      .then(res => res.json())
      .then(json => json.results.businesses)
      .then(businesses => dispatch(
        {
          type: "UPDATE_RESTAURANT_STATE",
          payload: businesses
        })
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

export function updatePricePoint(price){
  return {
    type: "UPDATE_PRICE_POINT",
    payload: price
  }
}

export function matchRestaurant(matchRestaurant, userID){
  return (dispatch) => {
    return fetch(URL2, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'restaurant': matchRestaurant, 'restaurant_id': `${matchRestaurant.id}`, 'user_id': userID})
    })
    .then(businesses => dispatch(
      {
        type: "ADD_TO_MATCHES",
        payload: matchRestaurant
      }
    ))
  }
}

export function findMyMatches(userID){
  return (dispatch) => {
    return fetch(URL2)
      .then(res => res.json())
      .then(json => {
        return dispatch({
          type: "FIND_ALL_MY_MATCHES",
          payload: json
        })
      })
  }
}

export function findUpdateMatches(userID){
  return (dispatch) => {
    return fetch(URL2)
      .then(res => res.json())
      .then(json => {
        console.log("inside match", json)
        return dispatch({
          type: "UPDATE_ALL_MY_MATCHES",
          payload: json
        })
      })
  }
}

export function rejectRestaurant(rejectRestaurant){
  return {
    type: "ADD_TO_REJECTS",
    payload: rejectRestaurant
  }
}

export function removeRest(rejectRestaurant, userID) {
  return (dispatch) => {
    return fetch(URL2 + `/${rejectRestaurant.id}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'restaurant': rejectRestaurant, 'restaurant_id': `${rejectRestaurant.id}`, 'user_id': userID})
    })
    .then(res => res.json())
    .then(businesses => dispatch(
      {
        type: "UPDATE_ALL_MY_MATCHES",
        payload: businesses
      }
    ))
  }
}

export function updateRestaurantArray(restaurantID){
  return {
    type: "UPDATE_RESTAURANT_ARRAY",
    payload: restaurantID
  }
}

export function restDetails(yelpID){
  
}
