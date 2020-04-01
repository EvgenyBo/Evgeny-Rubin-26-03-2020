import React, { useState, useEffect, useRef, useContext } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { getCities, getCurrentCity } from '../../api/Api';
import AutocompleteCity from '../AutocompleteCity';
import { usePosition } from 'use-position';
import WeekForecast from '../WeekForecast/WeekForecast';
import DegreeToggle from '../WeekForecast/DegreeToggle';
import AddIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { FavoritesContext } from '../../App';
import './home.scss';

const Home = () => {
  const { favorites, defaultCity, setDefaultCity, updateFavorites, degreeType, setDegreeType } = useContext(FavoritesContext);

  const { latitude, longitude } = usePosition(false, {
    enableHighAccuracy: true,
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentCity, setCurrentCity] = useState(defaultCity);
  const loading = useRef(false);

  const fetchCities = (query) => {
    getCities(query).then((cities) => {
      loading.current = false;
      setCities(cities);
    });
  }

  const [debouncedCallback] = useDebouncedCallback(fetchCities, 500);

  useEffect(() => {
    if (latitude) {
      getCurrentCity(latitude, longitude).then((city) => {
        setDefaultCity(city);
      })
    }
  }, [latitude, longitude, setDefaultCity, favorites]);

  useEffect(() => {
    if (query) {
      loading.current = true;
      debouncedCallback(query)
    } else {
      loading.current = false;
      setCities([]);
    }
  }, [query, debouncedCallback]);

  useEffect(() => {
    if (favorites.some(fav => fav.key === currentCity.key)) {
      setIsFavorite(true);
    } 
  }, []);

  useEffect(() => {
    if (!isSearchOpen) {
      setCities([]);
    }
  }, [isSearchOpen]);

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const updateForecastDegree = event => {
    setDegreeType(event.target.value)
  }

  const addToFavorites = () => {
    if (!isFavorite) {
      setIsFavorite(true);
      const newFavorite = currentCity.name ? currentCity : defaultCity;
      updateFavorites(favorites, newFavorite);
    } else {
      setIsFavorite(false);
      const delFavorite = currentCity.name ? currentCity : defaultCity;
      updateFavorites(favorites, undefined, delFavorite);
    }
  }

  const setNewCity = (city) => {
    if (favorites.some(fav => fav.key === city.key)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
    setCurrentCity(city)
  }

  return (
    <div className='homeWeather'>
      <div className="CitySelector">
        <AutocompleteCity
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
          cities={cities}
          loading={loading}
          defaultCity={defaultCity}
          handleInputChange={handleInputChange}
          setNewCity={setNewCity}
        />
      </div>
      {currentCity.name || defaultCity.name ?
        [<IconButton key={0} onClick={addToFavorites} color={isFavorite ? 'secondary' : "inherit"} aria-label="add an alarm">
          <AddIcon />
          <div className='currentCity'>{currentCity.name || defaultCity.name}</div>
        </IconButton>,
        <div key={2} className='fiveDay'>5-Day Forecast.</div>,
        <DegreeToggle key={1} degreeType={degreeType} updateForecastDegree={updateForecastDegree} />,
        <WeekForecast key={3} cityNumber={currentCity.key || defaultCity.key} degreeType={degreeType} />
        ]
        : <div className='currentCity'>Loading my city... (Allow Location)</div>}
    </div>
  );
}

export default Home;