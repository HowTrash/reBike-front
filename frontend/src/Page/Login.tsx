import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider, Button, CssBaseline, TextField, Box, Typography, Container, Link, styled,} from "@mui/material";

const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#759F98",
    },
  },
});

const UserInfoTf = styled(TextField)(({}) => ({
  "&:hover": {
    color: "#759F98",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#759F98",
    },
  },
}));

const KakaoLoginBtn = styled(Button)(({}) => ({
  backgroundColor: "white",
  "&:hover": {
    color: "yellow",
    backgroundColor: "#F1DC2C",
    borderColor: "#F1DC2C",
  },
}));

const NaverLoginBtn = styled(Button)(({}) => ({
  backgroundColor: "white",
  "&:hover": {
    color: "#6AED64",
    backgroundColor: "#54B94E",
    borderColor: "#54B94E",
  },
}));

function Login() {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        
        const data = new FormData(event.currentTarget);
        console.log({
            event,
            name: data.get("name"),
            password: data.get("password"),
        });
        
        axios
        .post("http://localhost:8080/user/login/", {
          name: data.get("name"),
          pw: data.get("password"),
        })
        .then((response) => {
            console.log("Well done!");
            console.log("User profile", response.data.user);
            console.log("Is login?", response.data.is_login);
            console.log("User ID", response.data.user.name);

            if (response.data.user) {
                localStorage.clear()
                localStorage.setItem("access_token", response.data.user.name)
                console.log("아이디는?",localStorage.getItem("access_token"))

                alert("로그인 성공♻️")

                window.location.replace('/mainpage');
            }else {
                console.log("아이디",localStorage.getItem("access_token"))
                localStorage.clear()
            }
            
        })
        .catch((error) => {
            alert("아이디와 비밀번호를 다시 확인해주세요.")
          // Handle error.
          console.log("An error occurred:", error.response);
        });
    };

    return (
        <Container
            style={{ backgroundColor: "#E7F5EF", border: "solid", borderColor: "#E7F5EF", minWidth: "100%", height: "100vh",}}>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" sx={{ mb: 2, mt: 20 }}>
                    <CssBaseline />
                    <Box
                        sx={{ display: "flex", flexDirection: "column", alignItems: "center", }} >
                        <Typography component="h1" color="primary" fontWeight="bold" variant="h4">
                            로그인
                        </Typography>
                        <Box component="form" color="info.contrastText" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <UserInfoTf 
                                margin="normal" required fullWidth id="userId" label="ID" name="name" autoComplete="name" autoFocus/>
                            <UserInfoTf
                                margin="normal" required fullWidth name="password" label="PW" type="password" id="password" autoComplete="current-password" />
                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, height: 50, color: "white", fontWeight: "bold",}}>
                                Login
                            </Button>
                            <Typography align="right">
                                <Link
                                    href="/register" style={{ textDecoration: "none", fontWeight: "bold", }}>
                                    가입하기
                                </Link>
                            </Typography>
                            <Divider sx={{ color: "lightgrey" }}>또는</Divider>

                            <KakaoLoginBtn
                                variant="outlined"
                                sx={{ borderColor: "#F1DC2C", color: "#F1DC2C", fontWeight: "bold", width: "46%", mt: 3,}}>
                                카카오로 로그인하기
                            </KakaoLoginBtn>
                            <NaverLoginBtn
                                variant="outlined"
                                sx={{ borderColor: "#54B94E", color: "#54B94E", fontWeight: "bold", width: "46%", mt: 3, ml: 3.6,}}>
                                네이버로 로그인하기
                            </NaverLoginBtn>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </Container>
  );
}

export default Login;
