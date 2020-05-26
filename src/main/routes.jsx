import React from 'react';
import AuthOrApp from './authOrApp';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard/dashBoard';
import BillingCycle from '../billingCycle/billingCycle';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)