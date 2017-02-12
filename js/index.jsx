import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { NAV_LINKS } from 'constants';
import $ from 'wfQuery';

const App = (props) => <div>{props.children}</div>;

const getComponent = to => (state, setComponent) => require([`widget/${to}/index`], com => setComponent(null, com.default));

const Main = () => <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute getComponent={getComponent('social')} />
        {NAV_LINKS.map(({index, to}) => <Route 
            key={to} path={`/${to}`}
            getComponent={getComponent(to)}
        />)}
    </Route>
</Router>;

ReactDOM.render(<Main/>, $(document.body).children('.main')[0]);