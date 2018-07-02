import { FIND_ALL_MY_MATCHES } from '../actions/match-actions'
import { defaultState } from '../index'

export default function homepageReducer(state={...defaultState}, { type, payload }){
    switch(type){
        case FIND_ALL_MY_MATCHES:
            return {...state, ...state.homepage, myPlays: payload.myPlays}
        default:
            return state
    }
}
