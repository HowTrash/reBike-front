import * as React from 'react';
import {Typography,Button, Grid} from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#759F98",
    },
  },
});

function Date() {
const [startDate, setStartDate] = React.useState(null);
const [endDate, setEndDate] = React.useState(null);

const handleStartChange = (Start) => {
  setStartDate(Start);
};

const handleEndChange = (End) => {
  setEndDate(End);
};

  return (
    <ThemeProvider theme={theme}>
    <Grid container
    direction="row"
    justifyContent="center"
    alignItems="center"
    sx={{paddingTop:3}}
    >
    <LocalizationProvider dateAdapter={AdapterDateFns}> 
        <DatePicker
          label="시작 날짜"
          inputFormat="yyyy/MM/dd"
          value={startDate}
          onChange={handleStartChange}
          renderInput={(params) => <TextField size="small" {...params} sx={{width: '35%'}} />}
        />
         <Typography color="black" fontWeight="bold" sx={{fontSize: "medium", mx: 2}}>to</Typography>
        <DesktopDatePicker
        width="15px"
        height="10px"
          label="종료 날짜"
          inputFormat="yyyy/MM/dd"
          value={endDate}
          onChange={handleEndChange}
          minDate={startDate}
          renderInput={(params) => <TextField size="small" {...params}  sx={{width: '35%'}} />}
        />
      <Button type="submit" width="10px" variant="contained"
      sx={{ height : 40, color : 'white',fontWeight: 'bold',fontSize:18, marginLeft:3, backgroundColor:"#759F98"}}>조회</Button>
    </LocalizationProvider>
    </Grid>
    </ThemeProvider>
  );
}

export default Date;