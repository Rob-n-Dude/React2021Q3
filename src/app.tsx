import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Header } from './components/Header/Header';
import HomePage from './components/pages/HomePage';
import './app.scss'
import { AboutPage } from './components/pages/AboutPage';
import { ErrorPage } from './components/pages/ErrorPage';
import { Details } from './components/pages/Details';
import { SearchArticle } from './shared/searchValue';

const App: React.FC = ():JSX.Element => {

  const routes = [
    {path: '/', Component: HomePage},
    {path: '/about', Component: AboutPage},
    {path: '/details/*', Component: Details},
    {path: '*', Component: ErrorPage},
  ]

  const [searchResults, setSearchResults] = useState<SearchArticle[]>([]);

  return (
    <BrowserRouter>
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
                      <Component setResults={setSearchResults} results={searchResults}/>
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
        </Switch>
      </TransitionGroup>
    </BrowserRouter>
  )   
}

export default App;