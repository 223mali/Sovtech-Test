import {TogglePopupDispatchTypes, TOGGLE_POPUP} from "../actions/TogglePopup.types";

interface DefaultStateI {
  isOpen:boolean
}

const defaultState: DefaultStateI = {
  isOpen:false
};

const TogglePopupReducer = (state: DefaultStateI = defaultState, action: TogglePopupDispatchTypes) : DefaultStateI => {
  console.log('reducer',state)
  // alert('ggg')
  switch (action.type) {
    case TOGGLE_POPUP:
      console.log('reducer',state.isOpen)
      return { ...state,
        isOpen: !state.isOpen,
      }
    default:
      return state
  }
};


export default TogglePopupReducer