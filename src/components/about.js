import React, {Component} from 'react';
import Menu from "./menu";

class About extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Menu/>
          <h1>About page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et ex facere illo mollitia nisi odio
            quia quibusdam quis sapiente! Aliquid dicta distinctio error fugiat pariatur placeat quis, sint
            veritatis.</p>
        </div>
      </>
    );
  }
}

export default About;
