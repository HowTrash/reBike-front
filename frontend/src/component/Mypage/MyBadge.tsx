import * as React from "react";
import {Typography,Container,Box} from "@mui/material";
import BadgeBack from "../../images/badgeBack"

function MyBadge() {
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
                        내 배지
                    </Typography>
                <Container
                    style={{
                        borderRadius: 8,
                        backgroundColor: "white",
                        height: "50vh"}}
                        sx={{mt:3}}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    justifyContent: "space-evenly"
                                }}>
                                <BadgeBack />
                                <BadgeBack />
                                <BadgeBack />
                                <BadgeBack />
                                <BadgeBack />
                                <BadgeBack />
                                <BadgeBack />
                                <BadgeBack />
                            </Box>
                            
  
                </Container>
        </Container>
    );
}

export default MyBadge;
