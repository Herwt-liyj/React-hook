import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Form from '../pages/form';
import Content from '../pages/content';
import Detail from '../pages/detail';
import Home from '../pages/home';
import User from '../pages/user';

const history = createBrowserHistory();

class RouterConfig extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/form' component={Form} />
                    <Route path='/content' component={Content} />
                    <Route exact path='/home' component={Home} />
                    <Route path='/user' component={User} />
                    <Route path='/detail' component={Detail} />
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig