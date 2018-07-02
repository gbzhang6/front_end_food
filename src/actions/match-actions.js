export const FIND_ALL_MY_MATCHES = "user: matches"

export function findMyMatches(matches){
  return {
    type: FIND_ALL_MY_MATCHES,
    payload: {
      user: [...matches]
    }
  }
}
