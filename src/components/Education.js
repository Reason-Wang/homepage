import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import {paperStyle, educationStyle, threshholds} from "./constants";
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
                <p style={educationStyle.item.text}>Undergraduate in Computer Science</p>
            </div>
        </div>
    )
}
export const Education = () => {
    const [width, height] = useWindowSize()
    var local_paperStyle = structuredClone(paperStyle)
    if (width > threshholds.th_w1){
        local_paperStyle.width = threshholds.w1
    }
    else if (width > threshholds.th_w2) {
        local_paperStyle.width = width * threshholds.w2;
    }
    else{
        local_paperStyle.width = threshholds.w3;
    }
    return (
        <Grid item sx={local_paperStyle}>
            {/*<div*/}
            {/*    style={local_paperStyle}*/}
            {/*>*/}
            {/*    <Paper elevation={0} square={true}>*/}
                    <h3 style={paperStyle.label}>Education</h3>
                    <EducationItem />
                {/*</Paper>*/}
            {/*</div>*/}
        </Grid>
    )
}