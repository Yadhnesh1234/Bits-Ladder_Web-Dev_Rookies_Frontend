import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import ListOfData from './ListData'
import CardInfo from './CardInfo';
function WorkerProfilePage() {
 return(
  <>
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={3}>
        <Grid xs={2}>
        <Paper variant="outlined" style={{height:"100vh",width:"180%",padding:"20px"}}>
        <Box
      sx={{
        width: "100%",
        height: "20%",
        display:"flex",
        alignItems:"center",
        justifyContent:"Center",
      }}
    ><Avatar style={{width:"100px",height:"100px" , fontSize:"50px"}} >H</Avatar></Box>
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display:"flex",
        alignItems:"center",
        marginTop: "5 rem",

        justifyContent:"Center"
      }}
    >
     <ListOfData/>
    </Box>
        </Paper>
        </Grid>
        <Grid xs={6}>
        <Paper variant="outlined" style={{height:"100%",width:"152%",marginLeft:"110px",padding:"30px",overflow:"auto"}}>
        <h2>Requested Posts</h2>
        <CardInfo/>
        <CardInfo/>
        <CardInfo/>
        </Paper>
        </Grid>
    </Grid>
    </Box>
  </>
 )
}

export default WorkerProfilePage;
