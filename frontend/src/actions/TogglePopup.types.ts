import { type } from "os";

export const TOGGLE_POPUP = "TOGGLE_POPUP";
export const CATEGORIES_SUCCESS = "CATEGORIES_SUCCESS";








export interface TogglePopup {
  type: typeof TOGGLE_POPUP,
  payload:boolean
}



// export interface FetchCategories{
//   type: typeof FETCH_CATEGORIES
// }

export type TogglePopupDispatchTypes = TogglePopup