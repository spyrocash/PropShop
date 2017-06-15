import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

import { IntlProvider } from 'react-redux-multilingual';
import rootReducer from './reducers';

import translations from './translations';

import Header from './containers/Header';
import Footer from './containers/Footer';

import Home from './pages/Home';
import Realestate from './pages/Realestate';
import Sell from './pages/Sell';
import Agent from './pages/Agent';
import AgentDetail from './pages/AgentDetail';
import Login from './pages/Login';
import Register from './pages/Register';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Propshop.css';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware,
    thunk,
  )
);

class PropShop extends Component {

  render() {

    const routes = [
      { path: '/',
        exact: true,
        header: Header,
        content: Home,
        footer: Footer,
      },
      { path: '/realestate/:id',
        exact: false,
        header: Header,
        content: Realestate,
        footer: Footer,
      },
      { path: '/sell',
        exact: false,
        header: Header,
        content: Sell,
        footer: Footer,
      },
      { path: '/agent',
        exact: false,
        header: Header,
        content: Agent,
        footer: Footer,
      },
      { path: '/agent/:id',
        exact: false,
        header: Header,
        content: AgentDetail,
        footer: Footer,
      },
      { path: '/login',
        exact: false,
        header: Header,
        content: Login,
      },
      { path: '/register',
        exact: false,
        header: Header,
        content: Register,
      },
    ]

    return (
      <Provider store={store} locale='th'>
        <IntlProvider translations={translations}>
          <Router>
            <div className="PropShop">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.header}
                />
              ))}
              <div id="Content">
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.content}
                  />
                ))}
              </div>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.footer}
                />
              ))}
            </div>
          </Router>
        </IntlProvider>
      </Provider>
    );
  }
}

export default PropShop;