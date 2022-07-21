import {Typography, Box} from "@mui/material";
import FirstImg  from 'src/images/firstImg';
import SecondImg from 'src/images/secondImg';
import ThirdImg from 'src/images/thirdImg';
import TrashCardView from "./TrashCardView";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import React from "react";


function PopularTrash(){
    return(
        <Box textAlign={"center"} >
            <Box sx={{mt:15,mb : 7}}>
                <AutoGraphIcon fontSize="large" />
                <Typography  
                    fontWeight="bold"
                    variant="h5" >
                인기 쓰레기
                </Typography>
            </Box>

            <Box  sx={{display : "flex", flexWrap : "wrap", justifyContent : "space-evenly"}}>
                <Box sx={{p:2}}>
                    <FirstImg /> 
                    <TrashCardView />
                </Box>
                <Box sx={{p:2}}>
                    <SecondImg />
                    <TrashCardView />
                </Box>
                <Box sx={{p:2}}>
                    <ThirdImg />
                    <TrashCardView /> 
                </Box>    
            </Box>
     
        </Box>
    );
};

export default PopularTrash;