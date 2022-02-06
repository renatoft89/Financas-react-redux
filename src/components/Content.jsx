import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
    );
  }
}

export default Content;