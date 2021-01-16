import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import HomePage from './HomePage';
import PostDetail from './PostDetail';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Container maxWidth='md'>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/post/:id/:slug' component={PostDetail} />
        </Container>
      </Switch>
    </Router>
  );
};

export default Routes;
