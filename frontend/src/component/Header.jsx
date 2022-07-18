import { useState, useEffect } from 'react';
import {Button, Container, Box, Link,CssBaseline, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IsLogin from '../module/IsLogin';

const theme = createTheme({
    palette: {
      primary: {
        main: "#759F98",
      },
    },
  });

function Header() {

  const [loginState, setLoginState] = useState(true)
  const token = localStorage.getItem("access_token");

  // useEffect(() => {
  //   // console.log(IsLogin())
  //   // IsLogin() ? console.log("로그인중", loginState) : console.log("로그인not중")
  //   IsLogin ? setLoginState(true) : console.log("로그인not중")
  // }, [loginState]);

  useEffect (()=>{
    
    if (localStorage.getItem('token') !== null) {
      console.log(loginState)
    } else {
      setLoginState(false);
    }
  },[])

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
                  <Link href="/mainpage" sx={{textDecoration: 'none',fontSize : 30, color : "black", fontWeight: 'bold',mb:1,position: 'absolute',left: 55 ,fontFamily :'./font/NanumGothic-Bold.ttf'}}>
                      HOWTRASH
                  </Link>

                  {loginState ?(
                  // if IsLogin is true
                  
                  <div>
                    <Button
                      variant="contained"
                      sx={{fontWeight: 'bold',mt:2,mb : 2,mr:2, color:'white',backgroundColor : "#759F98"}}>
                    <Link href= '/mypage' sx={{textDecoration: 'none', color : "white"}}>MyPage</Link>
                    </Button>
                    <Link
                      href="/login"
                      onClick={deleteToken}
                      sx={{ textDecoration: "none", color: "white" }}
                    >
                      {token} 님
                    </Link>
                  </div>)
                  
                  : (// if IsLogin is false
                  <Button
                      variant="contained"
                      sx={{fontWeight: 'bold' ,mb : 2,color:'white',backgroundColor : "#759F98"}}>
                    <Link href= '/login' sx={{textDecoration: 'none', color : "white"}}>Login</Link>
                  </Button>
                  )}
                  
              </Box>
          </Container> 
      </ThemeProvider>

  );
}

export default Header;