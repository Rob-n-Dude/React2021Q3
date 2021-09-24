import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Header } from './components/Header/Header';
import HomePage from './components/pages/HomePage';
import './app.scss'
import { AboutPage } from './components/pages/AboutPage';
import { ErrorPage } from './components/pages/ErrorPage';
import { Details } from './components/pages/Details';

const App: React.FC = ():JSX.Element => {

  const routes = [
    {path: '/', Component: HomePage},
    {path: '/about', Component: AboutPage},
    {path: '/details/id=*', Component: Details},
    {path: '*', Component: ErrorPage},
  ]

  return (
    <HashRouter>
      <Header />
        <TransitionGroup>
          <Switch>
          {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
        </Switch>
      </TransitionGroup>
    </HashRouter>
  )   
}

export default App;