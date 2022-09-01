import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import UploadForm from "./components/UploadFormPage/UploadFormPage";
import UpdateForm from "./components/UpdateFormPage/UpdateFormPage";
import AboutMe from "./components/About/about";
import SplashPage from "./components/Splash/splashpage";
import Navigation from "./components/Navigation";
import SongPage from "./components/SongPage/SongPage";
import AllSongs from "./components/AllSongs/AllSongs";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
           <Route exact path="/">
            <SplashPage />
          </Route>
          <Route exact path="/about">
          <Navigation isLoaded={isLoaded} />
            <AboutMe />
          </Route>
          <Route exact path="/upload">
          <Navigation isLoaded={isLoaded} />
            <UploadForm />
          </Route>
          <Route exact path='/song/edit/:songId'>
          <Navigation isLoaded={isLoaded} />
            <UpdateForm />
          </Route>
          <Route path="/songs/:songId">
          <Navigation isLoaded={isLoaded} />
            <SongPage />
          </Route>
          <Route exact path="/songs">
          <Navigation isLoaded={isLoaded} />
            <AllSongs />
          </Route>
          <Route path="/songs/:songId">
          <Navigation isLoaded={isLoaded} />
            <SongPage isLoaded={isLoaded} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;