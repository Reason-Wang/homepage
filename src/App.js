import './App.css';
import * as React from 'react';
import {BasicInfoDisplay, AboutMe, Signature} from "./components/BasicInformation";
import Grid from "@mui/material/Grid";
import {Education} from "./components/Education";
import {Experience} from "./components/Experience";
import {Publication} from "./components/Publication";
import {Box, Divider} from "@mui/material";
import {BottomBanner, Occupation, useWindowSize} from "./components/Components";

function App() {
    const [width, height] = useWindowSize()
    var align = true
    if(width < 500){
        align = false
    }
  return (
      <Grid className="App" container direction="column" justifyContent="left">
      {/*//  <div style={{display: "flex", flexDirection: "column",  justifyContent: "center"}}>*/}
      {/*    <Grid item direction="column" justifyContent="center" alignItems="center">*/}
          <Grid item direction="column">
              <Signature/>
              <Divider variant="light" />
          </Grid>
          <Grid container direction="row"  justifyContent="center">
              <BasicInfoDisplay />
                <Grid item={align} container={!align} direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <AboutMe />
                    <Education />
                    <Experience />
                    <Publication />
                    <Occupation />
                </Grid>
          </Grid>
          <Grid>
              <BottomBanner />
          </Grid>
      </Grid>
  );
}

export default App;
