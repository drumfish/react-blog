import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Page404 from './components/404';
import Home from './components/home';
import About from './components/about';
import './scss/src/app.scss';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={Home} exact/>
        <Route path={'/about'} component={About}/>
        <Route component={Page404}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
