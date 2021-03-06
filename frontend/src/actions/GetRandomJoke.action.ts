import {Dispatch} from "redux";
import {GET_RANDOM_JOKE,GetRandomJokeDispatchTypes, RandomJoke} from "./GetRandomJoke.types";

import { LOAD_CATEGORIES } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";



// import axios from "axios";

export const GetRandomJokeAction = (data:RandomJoke) => async (dispatch: Dispatch<GetRandomJokeDispatchTypes>) => {
   
    dispatch({
      type: GET_RANDOM_JOKE,
      payload:data
    })

  
};