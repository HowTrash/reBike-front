import { useState, useEffect} from 'react';
import { alpha, createTheme } from "@mui/material/styles";
import { Box,Typography,Container,styled,Switch,} from "@mui/material";
import MultiActionAreaCard from "./MultiActionAreaCard";
import Api from "../../utils/customApi";
import { API_BASE_URL} from  "../../utils/constants";


const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: "#76F2BE",
      '&:hover': {
        backgroundColor: alpha("#76F2BE", theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "white",
    },
  }));



function MyTrashcan() {

    const token = localStorage.getItem("access_token");
    console.log(token);

    const [trash, setTrash] = useState([])
    
    const fetchMyTrash = async () => {
        const res = await fetch(
            `${API_BASE_URL}/trash/mypage/users/${token}/images`,
            { method: 'GET' },
        );
        const result = (await res.json())
        setTrash(trash ? [...trash, ...result.content] : result.content)
    }

    useEffect(() => {
        if (token !== '') {
            fetchMyTrash();
        }
      }, []);

    return(
        <Container
            style={{
                border: "solid",
                borderRadius: 5,
                borderColor:"transparent",
                minWidth: "100%",
                height: "100vh",
            }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                    <Typography
                        color="black"
                        fontWeight="bold"
                        sx={{mt: 1.2,
                            mb: 1,
                            fontSize: "medium"}}>
                        내 분리수거함
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                        }}>
                        <Typography
                        color="black"
                        sx={{mt: 2,
                            mb: 1,
                            fontSize: 2}}>
                        사진 자동으로 추가
                    </Typography>
                    <GreenSwitch
                        defaultChecked size="small"
                        style={{ color: "primary", backgoundColor: "#E7F5EF"}}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx={{mt: 1.5,}}
                        />
                    </Box>
                </Box>               
                <Container
                    style={{
                        backgroundColor: "white",
                        border: "solid",
                        borderRadius: 5,
                        borderColor: "white",
                        height: "100vh",
                        pt:2, pb:2}}>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                justifyContent: "space-evenly"
                            }}>
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />

                        </Box>                                                
                </Container>
            
        </Container>

    );
}

export default MyTrashcan;
