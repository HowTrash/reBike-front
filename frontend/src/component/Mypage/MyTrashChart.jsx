import * as React from "react";
import {
    Typography,
    Container,
    Box

} from "@mui/material";
import Chart from "../chart/Chart";

function MyTrashcan() {
    return(
        <Container
            style={{
                border: "solid",
                borderRadius: 5,
                borderColor:"transparent",
                minWidth: "100%",
                height: "80vh",
            }}>
                    <Typography color="black" fontWeight="bold" sx={{mt: 3, mb: 2, fontSize: "medium"}}>
                        내 쓰레기 통계
                    </Typography>
                <Container
                    style={{
                        borderRadius: 8,
                        backgroundColor: "white",
                        height: "50vh"}}>
                            <Typography color="black" textAlign="center" sx={{mb: 2,fontSize: "15px",paddingTop:2}}>
                                2022-07-18 ~ 2022-07-25
                            </Typography>
                               <Chart/>    
                </Container>
        </Container>
    );
}

export default MyTrashcan;
