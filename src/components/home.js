import React from 'react';
import Form from "../components/blog/form";
import Posts from "../components/blog/posts";
import Menu from "./menu";

function Home() {
  return (
      <div className="App">
        <Menu/>
        <Form/>
        <Posts/>
      </div>
  );
}

export default Home;
