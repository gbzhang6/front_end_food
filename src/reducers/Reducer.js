export const defaultState = {
  user: {
      matches:[],
      rejects:[],
      comments:[],
    },
    restaurants: [],
    searchTerm: '',
    searchCity: '',
}

function homepageReducer(state=defaultState, action){
 switch(action.type){
   case "FIND_ALL_MY_MATCHES":
    return {...state, ...state.homepage}
  case "UPDATE_SEARCH_TERM":
    return {...state, searchTerm: action.payload}
  case "UPDATE_SEARCH_CITY":
    return {...state, searchCity: action.payload}
  case "FIND_RESTAURANTS_BY_QUERY":
    return {...state, restaurants: action.payload}
  case "UPDATE_RESTAURANT_STATE":
    return {...state, restaurants: action.payload}
  default:
    return state
  }
}

export default homepageReducer;
