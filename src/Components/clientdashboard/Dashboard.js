import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardInfo from './CardInfo';
export default function DashBoard(){
    return(
        <>
        <Container maxWidth="sm">
        <CssBaseline />
        <Box sx={{ bgcolor: 'white',border:"2px solid gray", height: '26vh', width:"192%",marginLeft: "-270px",marginTop:"74px",borderRadius:"12px"}} >
        <Grid container spacing={2} style={{width:"100%",height:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <Grid item xs={4}>
             <h2>Yadhnesh Gangurde</h2>
             <p>gangurdeyadhnesh28@gmail.com</p>
             <p>7391886702</p>
        </Grid>
        <Grid item xs={4}>
             <h2>Total Posts :</h2>
             <p style={{fontSize:"40px"}}>100</p>
        </Grid>
        </Grid>
        </Box >
        </Container>
        <Container maxWidth="sm">
        <CssBaseline />
        <Box  sx={{ bgcolor: 'white', overflow:"auto", boxShadow:" 1px 1px 6px black", height: '100vh', width:"192%",marginLeft: "-270px",marginTop:"15px",borderRadius:"12px"}} > 
        <div style={{padding:"50px"}}>
            <h3>Posts</h3>
            {
            ["red","green"].map(()=>{
                return(
                    <>
                     <div>
                      <CardInfo/>
                    </div>
                    </>
                )
            })
            }
        </div>
        </Box>
        </Container>
        </>
    )
}