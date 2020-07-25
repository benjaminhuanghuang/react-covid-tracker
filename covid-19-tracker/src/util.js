import React from "react";
import numeral from 'numeral'
import {Circle, Popup} from 'react-leaflet'

export const sortData = (data)=>{
  const sortedData = [...data];

  sortedData.sort((a, b)=> b.cases - a.cases);

  return sortedData;
}

// Drap circle on the map
export const showDataOnMap = (data, casesType="cases") => {
  data.map((country) =>{
    return (
      <Circle center={[country.countryInfo.lat, country.countryInfo.long]}>

      </Circle>
    )
  });
}