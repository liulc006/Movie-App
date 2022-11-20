import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <div style={{bottom:0, width:'100%', height:'50', background:'black', color:'white', marginTop:'3rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Typography variant="body1">© Copyright 2022 - Project By <a href='https://github.com/liulc006' style={{color:'white'}}>Luca Liu</a></Typography>
        </div>
    )
};

export default Footer;