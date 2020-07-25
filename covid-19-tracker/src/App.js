import React from "react";
import { useState, useEffect } from "react";
//
import { FormControl, Select, MenuItem, Card, CardContent } from "@material-ui/core";
//
import InfoBox from "./InfoBox";

import Map from "./Map";

import Table from "./Table";

import "./App.css";

function App() {
  const [countries, setContries] = useState(["USA", "CHINA"]);

  const [country, setCountry] = useState("worldwide");

  const [countryInfo, setCountryInfo] = useState({});

  const [tableData, setTableData] = useState([]);

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
          setTableData(data);
          setContries(countries);
        });
    };
    getCountriesData();
  }, []);

  // load worldwide info
  useEffect(async () => {
    await fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  // select country in dropdown
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    //
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
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
          <InfoBox title="Coronavirus" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>

        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live cases by Country</h3>
          <Table countries={tableData}></Table>
          <h3>Live</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
