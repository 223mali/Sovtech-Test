import {Dispatch} from "redux";
import {SAMPLE_FAIL, SAMPLE_LOADING, SAMPLE_SUCCESS, SampleDispatchTypes} from "./SampleActionTypes";
// import axios from "axios";

export const GetSample = () => async (dispatch: Dispatch<SampleDispatchTypes>) => {
  try {
    dispatch({
      type: SAMPLE_LOADING
    })

    

    dispatch({
      type: SAMPLE_SUCCESS,
      payload: {message:"Hey There"}
    })

  } catch(e) {
    dispatch({
      type: SAMPLE_FAIL
    })
  }
};