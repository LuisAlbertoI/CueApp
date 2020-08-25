import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../layout';

function Routes() {
  return (
    <Router>
      <Layout>
        <div>content</div>
      </Layout>
    </Router>
  );
}

export default Routes;