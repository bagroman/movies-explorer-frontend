import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

import { cards } from '../../utils/data';

function App() {
  return (
    <div className="App">
      <>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route exact path='/movies'>
            <Header />
            <Movies cards={cards} />
            <Footer />
          </Route>
          <Route exact path='/saved-movies'>
            <Header />
            <SavedMovies cards={cards} />
            <Footer />
          </Route>
          <Route exact path='/profile'>
            <Header />
            <Profile />
          </Route>
          <Route exact path='/signup'>
            <Register />
          </Route>
          <Route exact path='/signin'>
            <Login />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </>
    </div>
  );
}

export default App;
