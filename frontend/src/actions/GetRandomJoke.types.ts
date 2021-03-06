
export const GET_RANDOM_JOKE = "GET_RANDOM_JOKE";



export type RandomJoke = {
    icon_url:string
  	value:string
}
export interface GetRandomJoke {
  type: typeof GET_RANDOM_JOKE,
  payload:RandomJoke
}



// export interface FetchCategories{
//   type: typeof FETCH_CATEGORIES
// }

export type GetRandomJokeDispatchTypes = GetRandomJoke