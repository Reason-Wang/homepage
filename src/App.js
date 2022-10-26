import './App.css';
import * as React from 'react';
import {BasicInfoDisplay, AboutMe, Signature} from "./components/BasicInformation";
import Grid from "@mui/material/Grid";
import {Education} from "./components/Education";
import {Experience} from "./components/Experience";
import {Publication} from "./components/Publication";
import {Box, Divider} from "@mui/material";
import {BottomBanner, Occupation} from "./components/Components";

function App() {
  return (
      <Grid className="App" container direction="column" alignItems="center" justifyContent="left">
      {/*//  <div style={{display: "flex", flexDirection: "column",  justifyContent: "center"}}>*/}
      {/*    <Grid item direction="column" justifyContent="center" alignItems="center">*/}

          {/*</Grid>*/}
          <Signature/>
          <Divider variant="light" />
          <Grid container direction="row" justifyContent="center">

              <BasicInfoDisplay />
                <Grid item direction="column" alignItems="flex-start" justifyConttent="flex-start">
                    <AboutMe />
                    <Education />
                    <Experience />
                    <Publication />
                    <Occupation />
                </Grid>
          </Grid>
          {/*<Grid item direction="column" justifyContent="center" alignItems="center">*/}
                <BottomBanner />
          {/*</Grid>*/}
      {/*// </div>*/}
      </Grid>
  );
}

export default App;
