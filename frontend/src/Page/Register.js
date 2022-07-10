import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { Divider,Button,CssBaseline,TextField,Box,Typography,Container,Link, styled } from '@mui/material';


  const theme = createTheme({
    palette: {
      primary: {
        main: "#759F98",
      },
    },
  });

  const UserInfoTf = styled(TextField)(({ }) => ({
    backgroundColor: "",
    "&:hover": {
        color : "#759F98",
        
    },

    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: '#759F98',
        },
      },
  }));

  function Register() {
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
                    회원가입
                </Typography>
                <Box component="form" color="info.contrastText" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <UserInfoTf
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <UserInfoTf
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <UserInfoTf
                      margin="normal"
                      required
                      fullWidth
                      name="name"
                      label="name"
                      type="name"
                      id="name"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, height : 50, color : 'white',fontWeight: 'bold',fontSize:20}}
                    >
                      가입하기
                    </Button>
                </Box>
              </Box>
        </Container>
    </ThemeProvider>
    </Container>
  );
}
export default Register;
