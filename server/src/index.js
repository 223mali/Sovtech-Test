
const { ApolloServer } = require("apollo-server");
const axios = require('axios');
const {GraphQLObjectType,GraphQLString } = require('graphql')
// const schema = require('./schemas')

// const graphQLHTTP = require('expres')

// 1

// const CateggoriesType = new GraphQLObjectType({
//   name:'Query',
//   fields: ()=>({
//     categories: {type:new GraphQLList(GraphQLString)},
//     resolve: (root,args)=>{
      
//     }
//   })
// })


const typeDefs = `
  type Query {
    categories: [Category!]
    randomeJoke(cat: String!): Joke!
  }


  type Joke {
    icon_url: String!
    value: String!
  }

  type Category {
    name: String!
  }
  
`;


// axios(
//   {
//     url:'https://api.chucknorris.io/jokes/categories'
//   }
// ).then(response=>{
//   console.log (response.data)
// })


const resolvers = {
  Query: {
    categories: async () =>{
      let categoryList = []
      const response = await axios.get('https://api.chucknorris.io/jokes/categories')
      response.data.map(elem=>{categoryList.push({name:elem})})
      return categoryList
    },
    randomeJoke: async(obj,args)=>{
      console.log(args)
      const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${args.cat}`)
      return{
        icon_url: response.data.icon_url,
        value: response.data.value
      }

    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));

//fdfljbn
