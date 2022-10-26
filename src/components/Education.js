import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import {paperStyle, educationStyle} from "./constants";
import Paper from "@mui/material/Paper";
import * as React from "react";
import NEU from "../images/NEU.png"
import {useWindowSize} from "./Components";

const EducationItem = () =>{
    return (
        <div style={educationStyle}>
            <img src={NEU} alt="logo" width="88" height="88"/>
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
    const [width, height] = useWindowSize();
    var local_paperStyle = structuredClone(paperStyle)
    if (width > 1000){
        local_paperStyle.width = 560
    }
    else if (width > 600) {
        local_paperStyle.width = width * 0.7;
    }
    else{
        local_paperStyle.width = 400;
    }
    return (
        <Grid item>
            <div
                style={local_paperStyle}
            >
                <Paper elevation={0} square={true}>
                    <h3 style={paperStyle.label}>Education</h3>
                    <EducationItem />
                </Paper>
            </div>
        </Grid>
    )
}