import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./components/Header";
import Notfound from "./components/Notfound";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";

export const FavoritesContext = React.createContext(null);

const App = () => {
    const [favorites, setFavorites] = useState([]);
    const [defaultCity, setDefaultCity] = useState({});
    const [degreeType, setDegreeType] = useState('fahrenheit');

    const updateFavorites = (oldFavorites, newFavorite, delFavorite) => {
        if (newFavorite) {
            setFavorites([...oldFavorites, newFavorite])
        }
        if (delFavorite) {
            setFavorites(oldFavorites.filter(fav => fav.key !== delFavorite.key))
        }
    }
    return (
        <FavoritesContext.Provider value={{ favorites, defaultCity, updateFavorites, setDefaultCity, degreeType, setDegreeType }}>
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/favorites" component={Favorites} />
                        <Route component={Notfound} />
                    </Switch>
                </div>
            </Router>
        </FavoritesContext.Provider >
    )
}

export default App;


