import * as React from 'react';
import {Button, Container, Box, Link,CssBaseline, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import lottie from "lottie-web"

const theme = createTheme({
    palette: {
      primary: {
        main: "#759F98",
      },
    },
  });



const GetLogoLottie = ()=>{
    //lottie
    const likecontainer = React.useRef();
    React.useEffect(()=>{
    lottie.loadAnimation({
    container: likecontainer.current,
    renderer: 'svg',
    loop: false,
    autoplay:true,
    animationData:require("../images/rebikeLogoLottie2.json")
    })

 },[])
   return(

      <Link 
        href="/mainpage"
        sx={{position: 'absolute',left: 55, top:-5, width: 180, height: 140,textDecoration:'none'}}> 
        <Button 
          ref={likecontainer}
          style={{fontSize : 20, color : "black", fontWeight: 'bold', justifyContent: "flex-end",  mb: 5}}>
          </Button>
          <Typography
            style={{fontSize: 8,fontWeight:"bold",display:"flex", justifyContent: "center",}}>
            R e B I K E</Typography>     
       </Link>

       
   )
}

function Header() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container style={{position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }}>
              <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  marginLeft= "auto"> 

                  <GetLogoLottie />

                  <Button
                      variant="contained"
                      sx={{fontWeight: 'bold',mt:5,mb : 2,mr:2, color:'white',backgroundColor : "#759F98"}}
                  >
                  <Link href= '/mypage' sx={{textDecoration: 'none', color : "white"}}>MyPage</Link>
                  </Button>

                  <Button
                      variant="contained"
                      sx={{fontWeight: 'bold' ,mb : 2,color:'white',backgroundColor : "#759F98"}}
                  >
                    <Link href= '/login' sx={{textDecoration: 'none', color : "white"}}>Login</Link>
                      
                  </Button>
              </Box>
          </Container> 
      </ThemeProvider>

  );
}

export default Header;