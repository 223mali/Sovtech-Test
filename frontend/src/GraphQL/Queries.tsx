import { gql } from "@apollo/client";

export const LOAD_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`


export const GET_RANDOM_JOKE = gql`
query GRJ($category:String!) {
    randomeJoke(cat:$category){
         icon_url
         value
     }
     
   }
`