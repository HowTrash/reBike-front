import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { Divider,Button,CssBaseline,TextField,Box,Typography,Container,Link, styled } from '@mui/material';
import imgT from './img/trash.png';

const theme = createTheme({
  palette: {
    primary: {
      main: "#759F98",
    },
  },
});

  function RegisterSuccess() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
          name: data.get('name'),
      });
    };
  return (
    <Container  style={{backgroundColor : '#E7F5EF',  border: "solid", borderColor :"#E7F5EF", minWidth: "100%", height: "100vh"}}>
    <ThemeProvider theme={theme} >
        <Container component="main" maxWidth="xs" sx={{  mb: 2 }} >
            <CssBaseline />
              <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
              >
                <Typography component= "h1" color = "primary" fontWeight = 'bold' variant="h4">
                    가입이 완료되었습니다!
                </Typography>
                <Box sx={{mt:10,mb:5}}>
                <img className="TrashImage" alt="Trash" src={imgT} width="300"/>
                </Box>
                <Box component="form" color="info.contrastText" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mb: 2, height : 50, width:350, color : 'white',fontWeight: 'bold',fontSize:20}}
                    >
                      로그인하러가기
                    </Button>
                </Box>
              </Box>
        </Container>
    </ThemeProvider>
    </Container>
  );
}
export default RegisterSuccess;
