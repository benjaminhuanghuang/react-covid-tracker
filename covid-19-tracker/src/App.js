import React from "react";
//
import { FormControl, Select, MenuItem, Card, CardContent } from "@material-ui/core";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Covid-19 Tracker</h1>
      <FormControl className="app__dropdown" >
        <Select variant="outlined" value="abc">
          <MenuItem value="1">Worldwide</MenuItem>
          <MenuItem value="2">Worldwide</MenuItem>
          <MenuItem value="3">Worldwide</MenuItem>
          <MenuItem value="4">Worldwide</MenuItem>
          <MenuItem value="5">Worldwide</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
