import * as React from 'react';
import {Typography,Button, Grid} from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: "#759F98",
    },
  },
});

function Dates() {
const [StartDate, setStartDate] = React.useState(null);
const [EndDate, setEndDate] = React.useState(null);
const [UserData, setUserData] = React.useState(null);

const HandleStartChange = (date) => {
  setStartDate(date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0'));
};

const HandleEndChange = (date) => {
  setEndDate(date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0'));
};

const HandleSubmit = (event) => {
  event.preventDefault();
  console.log(StartDate);
  console.log(EndDate);
  {
    axios
      .get(`http://localhost:8080/trash/mypage/users/8baaa9ae-28a5-4840-be1e-f5d0b1b6c90b/statistics/period/${StartDate}/${EndDate}`)
      .then((response) => {
        // Handle success.
        setUserData(response.data);
        console.log("Well done!");
        UserData.map((datas) => {
          console.log(datas.cnt);
          return UserData + 1;
        }); // 저장된 데이터들 호출
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  }
};

  return (
    <ThemeProvider theme={theme}>
    <Grid container
    component="form"
    direction="row"
    justifyContent="center"
    alignItems="center"
    sx={{paddingTop:3}}
    onSubmit={HandleSubmit}
    noValidate
    >
    <LocalizationProvider dateAdapter={AdapterDateFns}> 
        <DatePicker
          label="시작 날짜"
          id="startDate"
          name="startDate"
          inputFormat="yyyy/MM/dd"
          value={StartDate}
          onChange={HandleStartChange}
          renderInput={(params) => <TextField size="small" {...params} sx={{width: '35%'}} />}
        />
         <Typography color="black" fontWeight="bold" sx={{fontSize: "medium", mx: 2}}>to</Typography>
        <DatePicker
          label="종료 날짜"
          id="endDate"
          name="endDate"
          inputFormat="yyyy/MM/dd"
          value={EndDate}
          onChange={HandleEndChange}
          minDate={StartDate}
          renderInput={(params) => <TextField size="small" {...params}  sx={{width: '35%'}} />}
        />
      <Button type="submit" width="10px" variant="contained"
      sx={{ height : 40, color : 'white',fontWeight: 'bold',fontSize:18, marginLeft:3, backgroundColor:"#759F98"}}>조회</Button>
    </LocalizationProvider>
    </Grid>
    </ThemeProvider>
  );
}

export default Dates;