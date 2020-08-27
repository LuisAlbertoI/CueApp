import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Intro, SignIn, SignUp } from '../views';
import Layout from '../layout';

function Routes() {
  return (
    <Router>
      <Layout>
        <SignUp />
      </Layout>
    </Router>
  );
}

export default Routes;