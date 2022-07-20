import { useState, useEffect, useRef } from "react";
import { alpha, createTheme } from "@mui/material/styles";
import { Box, Typography, Container, styled, Switch } from "@mui/material";
import MultiActionAreaCard from "./MultiActionAreaCard";
import Api from "../../utils/customApi";
import lottie from "lottie-web";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#76F2BE",
    "&:hover": {
      backgroundColor: alpha("#76F2BE", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "white",
  },
}));

const GetNoTrashLottie = () => {
  //lottie
  const nocontainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: nocontainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../../src/images/noTrashLottie.json"),
    });
  }, []);
  return (
    <Container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={{ margin: 100 }}
    >
      <Box ref={nocontainer} sx={{ size: "small", height: 200 }}></Box>
      <Typography
        justifyContent="center"
        textAlign="center"
        sx={{ marginTop: 5, fontSize: 12 }}
      >
        쓰레기를 사진을 업로드 해보세요.
      </Typography>
    </Container>
  );
};

function MyTrashcan() {
  const token = localStorage.getItem("access_token");
  console.log(token);

  const [trash, setTrash] = useState([]);

  const fetchMyTrash = async () => {
    const result = await Api.get(
      "/trash/mypage/users/173dc2de-7076-40cf-a211-f3eca7aa9b4d/images"
    ).then((res) => res.data);
    setTrash(result);
    console.log("api요청 결과", result);
    // console.log("api요청 결과",result.length)

    // console.log("api요청 결과 아이디?",result[0].img)
    // console.log("정보 저장",trash)
  };

  useEffect(() => {
    if (token !== "") {
      fetchMyTrash();
    }
  }, []);

  useEffect(() => {
    console.log("정보 저장", trash);
  }, [trash]);


    useEffect(() => {
        if (token !== '') {
            fetchMyTrash();
        }
      }, []);

    useEffect(() => {
        console.log("정보 저장",trash) 
    }, [trash]);
    
   


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
                            {
                                trash.length === 0 ? (
                                    <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        justifyContent: "space-evenly"
                                    }}>
                                        <GetNoTrashLottie />
                                    </Box>
                                ):
                                (<Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        justifyContent: "space-evenly"
                                    }}
                                    >
                                        {trash?.map((content, index)=>(
                                            <MultiActionAreaCard image={content.img} key={index}/>
                                        ))}
                                        
                                        {/* <MultiActionAreaCard /> */}

                                </Box>
                                )
                            }
                            

                </Container>
            
        </Container>
    );
}

export default MyTrashcan;
