import * as React from "react";
import { alpha, createTheme } from "@mui/material/styles";
import { Box, Typography, Container, styled, Switch } from "@mui/material";
import MultiActionAreaCard from "./MultiActionAreaCard";
import axios from "axios";
import { useState, useEffect } from "react";

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

function MyTrashcan() {
  const [loading, setLoading] = useState(false);
  const [trashList, setTrashList] = useState([]);

  const onLoadTrashList = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      //   setError(null);
      //   setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8080/trash/mypage/users/173dc2de-7076-40cf-a211-f3eca7aa9b4d/images"
      );
      setTrashList(response.data);
      //   console.log(response.data);
      //   console.log(trashList);
    } catch (e) {
      console.log("An error occured : ", e);
    }
    setLoading(false);
  };

  useEffect(() => {
    onLoadTrashList();
  }, []);

  if (loading) return <div>로딩중..</div>;

  //   console.log("data : ", trashList);

  return (
    <Container
      style={{
        border: "solid",
        borderRadius: 5,
        borderColor: "transparent",
        minWidth: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          color="black"
          fontWeight="bold"
          sx={{ mt: 1.2, mb: 1, fontSize: "medium" }}
        >
          내 분리수거함
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography color="black" sx={{ mt: 2, mb: 1, fontSize: 2 }}>
            사진 자동으로 추가
          </Typography>
          <GreenSwitch
            defaultChecked
            size="small"
            style={{ color: "primary", backgoundColor: "#E7F5EF" }}
            inputProps={{ "aria-label": "controlled" }}
            sx={{ mt: 1.5 }}
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
          pt: 2,
          pb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* <MultiActionAreaCard />
          <MultiActionAreaCard />
          <MultiActionAreaCard />
          <MultiActionAreaCard />
          <MultiActionAreaCard />
          <MultiActionAreaCard /> */}
          {trashList?.map((trash) => (
            <MultiActionAreaCard
              key={trash.uploaded_trash_image_id}
              imgURL={trash.img}
              imgID={trash.uploaded_trash_image_id}
            />
          ))}
        </Box>
      </Container>
    </Container>
  );
}

export default MyTrashcan;
