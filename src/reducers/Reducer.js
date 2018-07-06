export const defaultState = {
  user: {
    matches:[],
    rejects:[],
    comments:[],
  },
  userID: '',
  restaurants: [],
  searchTerm: '',
  searchCity: '',
  }

function homepageReducer(state=defaultState, action){
  switch(action.type){
    case "UPDATE_USER_ID":
      return {...state, userID: action.payload}
    case "FIND_ALL_MY_MATCHES":
      let matches = action.payload.filter(match => match.user_id === parseInt(state.userID))
      return {...state,
        user: {...state.user,
          matches: [...state.user.matches, matches],
        }
      }
    case "UPDATE_SEARCH_TERM":
      return {...state, searchTerm: action.payload}
    case "UPDATE_SEARCH_CITY":
      return {...state, searchCity: action.payload}
    case "UPDATE_RESTAURANT_STATE":
      return {...state, restaurants: action.payload}
    case "ADD_TO_MATCHES":
      return {...state,
        user: {...state.user,
          matches: [...state.user.matches, action.payload]
        }
      }
    case "ADD_TO_REJECTS":
      return {...state,
        user: {...state.user,
          rejects: [...state.user.rejects, action.payload]
        }
      }
    case "UPDATE_RESTAURANT_ARRAY":
      return {...state,
      restaurants: [...state.restaurants.filter(restaurant => restaurant.id !== action.payload)]}
    default:
      return state
  }
}

export default homepageReducer;
