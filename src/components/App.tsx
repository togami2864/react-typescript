import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Calender from '../pages/Calender';
import Room from '../pages/Room';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Calender} />
                <Route exact path='/room' component={Room} />
            </Switch>
        </Router>
    )
}

export default App