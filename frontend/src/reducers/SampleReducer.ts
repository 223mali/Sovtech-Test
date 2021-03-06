import {
  SAMPLE_FAIL,
  SAMPLE_LOADING,
  SAMPLE_SUCCESS,
  SampleDispatchTypes,
  SampleType
} from "../actions/SampleActionTypes";

interface DefaultStateI {
  loading: boolean,
  message?: SampleType
}

const defaultState: DefaultStateI = {
  loading: false
};

const sampleReducer = (state: DefaultStateI = defaultState, action: SampleDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case SAMPLE_FAIL:
      return {
        loading: false,
      }
    case SAMPLE_LOADING:
      return {
        loading: true,
      }
    case SAMPLE_SUCCESS:
      return {
        loading: false,
        message: action.payload
      }
    default:
      return state
  }
};


export default sampleReducer