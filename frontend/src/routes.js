import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import RegisterPlace from './pages/RegisterPlace';
import SearchPlace from './pages/SearchPlace';
import DetailPlace from './pages/DetailPlace';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register-place" component={RegisterPlace} />
            <Route exact path="/search-place" component={SearchPlace} />
            <Route exact path="/detail-place/:id" component={DetailPlace} />
        </Switch>
    </BrowserRouter>
);

export default Routes;