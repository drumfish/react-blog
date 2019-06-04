import React, {Component} from 'react';
import Menu from "./menu";

class Page404 extends Component {
  render() {
    return (
      <div className="page_404">
        <Menu/>
        <h1>404</h1>
        <div>This page doesn't exist.</div>
      </div>
    );
  }
}

export default Page404;
