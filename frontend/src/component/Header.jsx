import { useState, useRef, useEffect} from 'react';
import {Button, Container, Box, Link,CssBaseline, Hidden, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import lottie from 'lottie-web'

const theme = createTheme({
    palette: {
      primary: {
        main: "#759F98",
      },
    },
  });

  const GetLogoLottie = ()=>{
    //lottie
    const likecontainer = useRef();
    useEffect(()=>{
    lottie.loadAnimation({
    container: likecontainer.current,
    renderer: 'svg',
    loop: false,
    autoplay:true,
    animationData:require("../images/LottieLogo.json")
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

  const [mouseOn, setMouseOn] = useState(false);

  const handlePopoverOpen = () => {
    setMouseOn(true);
  };
  const handlePopoverClose = () => {
    setMouseOn(false);
  };


  const token = localStorage.getItem("access_token");
  console.log(token);

  function deleteToken() {
    localStorage.removeItem("access_token");
  }


  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container style={{position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }}>

              <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  marginLeft= "auto"
              >
                  <GetLogoLottie />

                  {token ?(
                  // if IsLogin is true
                  <div>
                    <Button>
                      <Link
                      href="/login"
                      onClick={deleteToken}
                      onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}
                      sx={{ textDecoration: "none", color: "#759F98", fontSize: "small",mr:2, mt:4 }}>
                      Welcom, {token} 님
                    </Link>
                    </Button>
                    
                    {mouseOn?
                    <Container
                      style={{ position: 'absolute', top: 80 }}>
                      <Box 
                        display="flex" justifyContent="center" 
                        sx={{
                          background: "white", border: 1, borderRadius: 1, borderColor: "#E7F5EF", color: "#759F98",
                          fontSize: 3, padding: 1, width: 100
                          }}>
                        클릭해서 로그아웃
                      </Box>
                    </Container>
                    :
                    Hidden}
                    
                    <Button
                      variant="contained"
                      sx={{fontWeight: 'bold',mt:6,mb : 2,mr:2, color:'white',backgroundColor : "#759F98"}}>
                    <Link href= '/mypage' sx={{textDecoration: 'none', color : "white"}}>MyPage</Link>
                    </Button>
                    
                  </div>)
                  
                  : (// if IsLogin is false
                  <Button
                      variant="contained"
                      sx={{fontWeight: 'bold' ,mt: 6, mb : 2,color:'white',backgroundColor : "#759F98"}}>
                    <Link href= '/login' sx={{textDecoration: 'none', color : "white"}}>Login</Link>
                  </Button>
                  )}
                  
              </Box>
          </Container> 
      </ThemeProvider>

  );
}

export default Header;