import * as React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardMedia,
  Typography,
  styled,
  Link,
} from "@mui/material";

const MyTrashcanBtn = styled(Button)(({}) => ({
  backgroundColor: "#76F2BE",
  borderColor: "#76F2BE",
  "&:hover": {
    color: "black",
    backgroundColor: "white",
    borderColor: "#76F2BE",
  },
}));

export default function MultiActionAreaCard({ image = "", kind = "" }) {
  // export default function MultiActionAreaCard() {

  return (
    <Card sx={{ maxWidth: 200, border: 1, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          // image='https://picsum.photos/400/300'
          image={image}
          style={{ padding: 3, borderRadius: 8 }}
        />
        <Typography
          fontWeight={"bold"}
          fontSize={20}
          component="div"
          marginTop={1}
          align="center"
        >
          {/* 물병 */}
          {kind}
        </Typography>
      </CardActionArea>
      <CardActions>
        <MyTrashcanBtn
          variant="outlined"
          sx={{
            margin: "auto",
            fontSize: 3,
            width: 30,
            height: 20,
            bgcolor: "#76F2BE",
            borderColor: "#76F2BE",
            color: "black",
          }}
        >
          <Link
            href="/mypage/howTo"
            sx={{ color: "black", textDecoration: "none" }}
          >
            더보기
          </Link>
        </MyTrashcanBtn>
      </CardActions>
    </Card>
  );
}
