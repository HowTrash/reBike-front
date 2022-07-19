import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Divider,
  FormControlLabel,
  Checkbox,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  Link,
  styled,
  Modal,
  Backdrop,
} from "@mui/material";

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
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //쿠키 및 체크박스 기억
  const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]);
  const [isRemember, setIsRemember] = useState(false);

  // 최초 렌더링 시
  useEffect(() => {
    /*저장된 쿠키값이 있으면, CheckBox TRUE 및 UserID에 값 셋팅*/
    if (cookies.rememberUserId !== undefined) {
      setEmail(cookies.rememberUserId);
      setIsRemember(true);
    }
  }, []);

  //쿠키 핸들
  const handleOnCookie = (e) => {
    setIsRemember(e.target.checked);
    if (!e.target.checked) {
      removeCookie("rememberUserId");
    } else {
      setCookie("rememberUserId", email, { maxAge: 180 }); //시간 설정 30 초
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginData = {
      name: email,
      pw: password,
    };

    console.log(loginData);

    axios
      .post("http://localhost:8080/user/login/", loginData)
      .then((response) => {
        // Handle success.
        localStorage.setItem("access_token", response.data.user.name);
        console.log(localStorage.getItem("access_token"));
        document.location.href = "/mainpage";
      })
      .catch((error) => {
        handleOpen();
        setEmail("");
        setPassword("");
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <Container
      style={{
        backgroundColor: "#E7F5EF",
        border: "solid",
        borderColor: "#E7F5EF",
        minWidth: "100%",
        height: "100vh",
      }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" sx={{ mb: 2, mt: 20 }}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              color="primary"
              fontWeight="bold"
              variant="h4"
            >
              로그인
            </Typography>
            <Box
              component="form"
              color="info.contrastText"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <UserInfoTf
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={onEmailHandler}
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
                value={password}
                onChange={onPasswordHandler}
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  height: 50,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Login
              </Button>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                <FormControlLabel
                  sx={{ mr: -0.5 }}
                  control={
                    <Checkbox
                      defaultChecked
                      size="small"
                      sx={{
                        mr: -1,
                        color: "#759F98",
                      }}
                    />
                  }
                  label={
                    <Typography
                      style={{ color: "#759F98", fontWeight: "bold" }}
                    >
                      아이디 저장
                    </Typography>
                  }
                  checked={isRemember}
                  onChange={(e) => {
                    handleOnCookie(e);
                  }}
                />
                {/* <input
                  type="checkbox"
                  id="saveId"
                  name="saveId"
                  onChange={(e) => {
                    handleOnCookie(e);
                  }}
                  checked={isRemember}
                /> */}

                <Typography align="right">
                  <Link
                    href="/register"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    가입하기
                  </Link>
                </Typography>
              </Box>
              <Divider sx={{ color: "lightgrey" }}>또는</Divider>
              <KakaoLoginBtn
                variant="outlined"
                sx={{
                  borderColor: "#F1DC2C",
                  color: "#F1DC2C",
                  fontWeight: "bold",
                  width: "46%",
                  mt: 3,
                }}
              >
                카카오로 로그인하기
              </KakaoLoginBtn>
              <NaverLoginBtn
                variant="outlined"
                sx={{
                  borderColor: "#54B94E",
                  color: "#54B94E",
                  fontWeight: "bold",
                  width: "46%",
                  mt: 3,
                  ml: 3.6,
                }}
              >
                네이버로 로그인하기
              </NaverLoginBtn>
              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 700,
                }}
              >
                <Box sx={style}>
                  <PriorityHighIcon
                    fontSize="large"
                    sx={{
                      color: "black",
                      border: 3,
                      borderRadius: 10,
                      borderColor: "black",
                      bgcolor: "#FFD764",
                    }}
                  />
                  <Typography
                    id="modal-description"
                    variant="h6"
                    sx={{ mb: 3, mt: 2 }}
                  >
                    아이디 또는 비밀번호를 확인해주세요.
                  </Typography>
                </Box>
              </Modal>
              ;
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Container>
  );
}

export default Login;
