import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/home/home.page";
import Header from "./components/header/Header";
import { useSelector } from "react-redux";
import { RootStore } from "./Store";
import PopupComponent from "./components/popup/Popup.component";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`GraphQL Error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000" })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


function App() {
  
  const popupState = useSelector((state: RootStore)=>state.popup)
  console.log('app', popupState)

  const style = {
    root:{
      // overflow: popupState.isOpen? "hidden": "auto"
    },
    content: {
      width: "95%",
      display:'flex',
      FlexDirection :'column',
      justifyContent: 'center',
      
    },
  };

  return (
    <ApolloProvider client={client}>
      <div style={style.root} className="app-root ">
        <Header />
        <div style={style.content}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </ApolloProvider>
  );
}



export default App;
