import React, {useState, useEffect} from 'react'
//
import {Line} from "react-chartjs-2";


function LineGraph() {
  const [data, setData] = useState({});

  useEffect(async ()=>{
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdats=120")
    .then(response=>response.json())
    .then((data)=>{
      
    });

  }, []);

  return (
    <div>
      <Line>

      </Line>
    </div>
  )
}

export default LineGraph
