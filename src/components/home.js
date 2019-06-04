import React from 'react';
import Form from "../components/blog/form";
import Posts from "../components/blog/posts";
import {Provider} from "react-redux";

import store from '../store';
import Menu from "./menu";

function Home() {
  return (
    <Provider store={store}>
      <div className="App">
        <Menu/>
        <Form/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default Home;
