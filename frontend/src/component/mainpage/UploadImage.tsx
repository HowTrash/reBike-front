import { Button, Typography, Box } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Resizer from "react-image-file-resizer";
import Api from "../../utils/customApi";

interface TrashImg {
  user_id : string, 
  img : string
}

function UploadImage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState<string>("");
  const navigate = useNavigate();
  const [resFile, setResFile] = useState<string>("");

  const resizeFile = (file : Blob) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        500, // max width
        250, // max height
        "JPEG",
        513, // min width
        0, // min height
        (uri) => {
          resolve(uri);
        },
        "file" // 저장 형식
      );
    });

  const onChangeImage = async (event : React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file : any = (event.target.files instanceof FileList) ? event.target.files[0] : "";
      setResFile(file.name);
      //console.log(file); 파일 자체를 넘기려면 file 객체 사용 type : image
      const img : any = await resizeFile(file);
      setImage(img); 
      setPreview(URL.createObjectURL(img));
      console.log("success upload image!");
      console.log({preview});
     
    } 
    catch (err) {
      console.log(err);
    }
  };
  
  const trashImg : TrashImg = {
    user_id : "71cc57de-f562-4d54-9645-ec4922604007",  // 이거 들어가는지 모르겠음 아마 filename 으로  될 듯 .
    img : resFile
  }

  console.log(trashImg);

  const fetchMyTrash = async () => {
      const result = await Api.post<TrashImg>(`/trash/mainpage/users/${trashImg.user_id}/result`,trashImg)
      .then(
          res => res.data
      )
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
     // setTrash(result);
      console.log("api요청 결과",result)


  }


  const onClickImgResult = () => {
    if (image === null) 
      return alert("no image");
    else {
      navigate("/mainpage/resultpage", { state: preview });
    }

  fetchMyTrash();


  };

  return (
    <Box>
      <form>
        <Button
          variant="outlined"
          sx={{
            border: 1,
            borderColor: "black",
            backgroundColor: "white",
            width: 600,
            height: 300,
            mt: 10,
            "&:hover": {
              backgroundColor: "#C3F5E7",
              borderColor: "#1F7D66",
            },
          }}
          component="label"
        >
          <img src={preview}></img>
          <input type="file" hidden required onChange={(e) => onChangeImage(e)} />
          {image ? null : (
            <Box>
              {" "}
              <CloudUploadIcon
                sx={{ color: "#759F98", mr: 1 }}
                fontSize="large"
              />
              <Typography sx={{ color: "#759F98" }}>
                {" "}
                Upload your image!
              </Typography>
            </Box>
          )}
        </Button>
        <Box>
          <Button
            onClick={onClickImgResult}
            variant="contained"
            sx={{
              "&:hover": {
                backgroundColor: "#4F6B66",
              },
              mt: 2,
              width: 80,
              height: 30,
              fontWeight: "bold",
              fontSize: 12,
              mb: 2,
              color: "white",
              backgroundColor: "#759F98",
            }}
          >
            결과보기
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default UploadImage;
