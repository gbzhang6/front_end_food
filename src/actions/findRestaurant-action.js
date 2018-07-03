export const FIND_RESTAURANTS = "restaurants: new"

export default function findRestaurant(matches){
  // debugger
  return {
    type: FIND_RESTAURANTS,
    payload: {
      searchTerm: [...matches]
    }
  }
}
