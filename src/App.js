import React, { useContext, useEffect, useState } from 'react';
import WeatherCard from './WeatherCard/WeatherCard';
import InputCity from './InputCity/InputCity';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import './app.css';
import LanguageSelector from './LanguageSelector/LanguageSelector';

const App = observer(() => {
  const { store } = useContext(Context);

  useEffect(() => {
    // Set the value of an empty array to localstorage
    if (!localStorage.getItem('cities')) localStorage.setItem('cities', '[]');
    //Check permissions for geolocation
    navigator.permissions.query({ name: 'geolocation' }).then(result => {
      if (result.state === 'granted') navigator.geolocation.getCurrentPosition(getCity, err => console.log(err), { maximumAge: Infinity });
      else if (result.state === 'prompt') navigator.geolocation.getCurrentPosition(getCity, err => console.log(err), { maximumAge: Infinity });
      else alert('Could not get your geolocation');
    });
  }, []);

  //Get city name for latitude and longitude of user from
  const getCity = async (position) => {
    try {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const google = window.google;
      const latLng = new google.maps.LatLng(latitude, longitude);

      let cityName = '';
      const geocoder = new google.maps.Geocoder();

      const response = await geocoder.geocode({ 'latLng': latLng });
      if (response.results[0]) {
        response.results[0].address_components.map(addresses => {
          if (addresses.types.includes('locality')) cityName += addresses.long_name;
          if (addresses.types.includes('country')) cityName += ', ' + addresses.short_name;
          return true;
        });
      }
      store.addToCities(cityName);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <InputCity />
      <LanguageSelector />
      <div className='weather-cards-wrapper'>
        {store.cities.map((city, i) => <WeatherCard city={city} key={i} />)}
      </div>
    </div>
  );
});

export default App;
