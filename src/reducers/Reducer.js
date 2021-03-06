export const defaultState = {
  user: {
    longitude:'',
    latitude:'',
  },
  matches:[],
  rejects:[],
  comments:[],
  userID: '',
  restaurants: [],
  restaurantDetail: {},
  restaurantReview: {},
  searchTerm: 'Restaurant',
  searchCity: 'New York, NY',
  pricePoint: '',
  }

function masterReducer(state=defaultState, action){
  switch(action.type){
    case "UPDATE_USER_ID":
      return {...state, userID: action.payload}
    case "FIND_USER_LOCATION":
      return {...state,
        user: {...state.user,
          longitude: action.payload[0],
          latitude: action.payload[1],
        }
      }
    case "FIND_ALL_MY_MATCHES":
      return {...state,
        matches: [...state.matches, action.payload.filter(match => match.user_id === parseInt(state.userID, 10))]
      }
    case "UPDATE_ALL_MY_MATCHES":
      return {...state,
        matches: [...state.matches, action.payload.filter(match => match.user_id === parseInt(state.userID, 10))]
      }
    case "REMOVE_FROM_MATCHES_ARRAY":
      return {...state,
      matches: [...state.matches.filter(restaurant => restaurant.id !== action.payload)]}
    case "UPDATE_SEARCH_TERM":
      return {...state, searchTerm: action.payload}
    case "UPDATE_SEARCH_CITY":
      return {...state, searchCity: action.payload}
    case "UPDATE_PRICE_POINT":
      return {...state, pricePoint: action.payload}
    case "UPDATE_RESTAURANT_STATE":
      return {...state, restaurants: action.payload}
    case "ADD_TO_MATCHES":
      return {...state,
        matches: [...state.matches, action.payload]
      }
    case "ADD_TO_REJECTS":
      return {...state,
        rejects: [...state.rejects, action.payload]
      }
    case "UPDATE_RESTAURANT_ARRAY":
      return {...state,
      restaurants: [...state.restaurants.filter(restaurant => restaurant.id !== action.payload)]}
    case "GET_RESTAURANT_DETAIL":
      return {...state,
        restaurantDetail: action.payload
      }
    case "GET_RESTAURANT_REVIEW":
      return {...state,
        restaurantReview: action.payload
      }
    case "DETAILS_TOGGLE":
      return {...state,
        details:!state.details
      }
    case "REVIEWS_TOGGLE":
      return {...state,
        reviews:!state.reviews
      }
    default:
      return state
  }
}

export default masterReducer;
