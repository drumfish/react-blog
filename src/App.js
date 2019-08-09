import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Page404 from './components/404';
import Home from './components/home';
import About from './components/about';
import todoList from './components/todo/todoList';
import './scss/src/app.scss';
import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Home} exact/>
          <Route path={'/todos'} component={todoList}/>
          <Route path={'/about'} component={About}/>
          <Route component={Page404}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
