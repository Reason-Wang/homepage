import Divider from "@mui/material/Divider";
import {paperStyle} from "./constants";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export const BottomBanner=() =>{
    return (
        <div style={{backgroundColor: "#f1f1f1", margin: 0, bottom: 0, position: "relative", width: "100%", height: "60px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Grid item>
                <p style={{margin: 0, color: "#888", fontSize: "13px"}}>© Renxi Wang. Powered by React & MUI.</p>
            </Grid>
        </div>
    )
}

export const Occupation=() =>{
    return (
        <Grid item>
            <div
                style={paperStyle}
            >
                <Paper elevation={0} square={true} sx={{height: "100px"}}>
                </Paper>
            </div>
        </Grid>
    )
}