import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardInfo from './CardInfo'
export default function PostFeed(){
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{margin:"30px"}}>
      <Container fixed>
        <Box sx={{ bgcolor: 'white',border:"2px solid #ede7e7",height: '100vh',borderRadius:"18px",padding:"30px",overflow:"auto"}} >
           <h2>Posts</h2>
           {
            [23,45.67].map(()=>{
                return(
                    <>
                    <CardInfo/>
                    </>
                )
            })
           }
        </Box>
      </Container>
     </div>
    </React.Fragment>
  );
}