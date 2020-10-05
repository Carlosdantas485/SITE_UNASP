import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Selection from '../src/pages/Selection';
import InfosUsers from '../src/pages/InfosUsers';
import InfosCoordenation from '../src/pages/InfosCoordenation';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/selection" component={Selection} />
                <Route path="/infosusers" component={InfosUsers} />
                <Route path="/infoscoordenation" component={InfosCoordenation} />
            </Switch>
        </BrowserRouter>
    );
}