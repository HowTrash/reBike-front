import { useState, } from 'react';
import {Button, Container, Box, Link,CssBaseline, Hidden} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: "#759F98",
      },
    },
  });

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
                  <Link href="/mainpage" sx={{textDecoration: 'none',fontSize : 30, color : "black", fontWeight: 'bold',mb:1,position: 'absolute',left: 55 ,fontFamily :'./font/NanumGothic-Bold.ttf'}}>
                      HOWTRASH
                  </Link>

                  {token ?(
                  // if IsLogin is true
                  
                  <div>
                    <Link
                      href="/login"
                      onClick={deleteToken}
                      onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}
                      sx={{ textDecoration: "none", color: "#759F98", fontSize: "small",mr:2 }}>
                      Welcom, {token} 님
                    </Link>
                    {mouseOn?
                    <Container
                      style={{ position: 'absolute', top: 55 }}>
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
                      sx={{fontWeight: 'bold',mt:2,mb : 2,mr:2, color:'white',backgroundColor : "#759F98"}}>
                    <Link href= '/mypage' sx={{textDecoration: 'none', color : "white"}}>MyPage</Link>
                    </Button>
                    
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