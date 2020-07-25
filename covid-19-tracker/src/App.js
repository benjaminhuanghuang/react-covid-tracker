import React from "react";
import { useState, useEffect } from "react";
//
import { FormControl, Select, MenuItem, Card, CardContent } from "@material-ui/core";
//
import InfoBox from "./InfoBox";

import Map from "./Map";

import "./App.css";

function App() {
  const [countries, setContries] = useState(["USA", "CHINA"]);

  const [country, setCountry] = useState("worldwide");

  // execute data loading when page loading
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // United States
            value: country.countryInfo.iso2, // USA
          }));
          setContries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" value={country} onChange={onCountryChange}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox title="dddd" cases="dddd" total="ssss" />
          <InfoBox title="dddd" cases="dddd" total="ssss" />
          <InfoBox title="dddd" cases="dddd" total="ssss" />
        </div>

        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live</h3>
          <h3>Live</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
