import Divider from "@mui/material/Divider";
import {paperStyle, threshholds} from "./constants";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {useLayoutEffect, useState} from "react";

export const BottomBanner=() =>{
    // const [width, height] = useWindowSize();
    // var custom_height = height * 0.98
    // var custom_height = document.documentElement.offsetHeight * 0.08
    return (
        // <div style={}>
        //     <Grid item sx={{backgroundColor: "#f1f1f1", margin: 0, width: "100%", height: "100px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <p style={{margin: 0, color: "#888", fontSize: "14px"}}>© Renxi Wang. Powered by React & MUI.</p>
            // </Grid>
        // </div>
    )
}

export const Occupation=() =>{
    const [width, height] = useWindowSize();
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
            {/*    */}
            {/*>*/}
            {/*    <Paper elevation={0} square={true} sx={{height: "180px", width: 20}}>*/}
                {/*</Paper>*/}
            {/*</div>*/}
        </Grid>
    )
}

export function useWindowSize(){
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}