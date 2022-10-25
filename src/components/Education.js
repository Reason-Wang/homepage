import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import {paperStyle, educationStyle} from "./constants";
import Paper from "@mui/material/Paper";
import * as React from "react";
import NEU from "../images/NEU.png"

const EducationItem = () =>{
    return (
        <div style={educationStyle}>
            <img src={NEU} alt="logo" width="70" height="70"/>
            <div style={educationStyle.item}>
                <p style={educationStyle.item.text}>Northeastern University</p>
                <p style={educationStyle.item.text}>2019-9-7 ~ present</p>
                <p style={educationStyle.item.text}>School of Computer Science and Engineering</p>
                <p style={educationStyle.item.text}>Computer Science</p>
            </div>
        </div>
    )
}
export const Education = () => {
    return (
        <Grid item>
            <div
                style={paperStyle}
            >
                <Paper elevation={0} square={true}>
                    <h3 style={paperStyle.label}>Education</h3>
                    <EducationItem />
                </Paper>
            </div>
        </Grid>
    )
}