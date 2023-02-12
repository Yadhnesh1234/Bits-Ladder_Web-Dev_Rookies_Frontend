import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import ImageAspectRatioIcon from '@mui/icons-material/ImageAspectRatio';
import StarRateIcon from '@mui/icons-material/StarRate';
import ConstructionIcon from '@mui/icons-material/Construction';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
export default function ListOfData() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Yadhnesh Gangurde" secondary="" />
      </ListItem>
       <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="yadhesh@gmail.com" secondary="" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ConstructionIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={<>
        <Accordion style={{boxShadow:"None"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{marginLeft:"-10px"}}>Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </>} secondary="" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ImageAspectRatioIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={<>
        <Accordion style={{boxShadow:"None"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{marginLeft:"-10px"}}>Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </>} secondary="" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <CurrencyRupeeIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="500$" secondary="Total Earning" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <StarRateIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={<Rating name="read-only" value={2} readOnly />} secondary="" />
      </ListItem>
      <div style={{marginTop:"15px",display:"flex",justifyContent:"center"}}><Button variant="contained">Edit</Button></div>
    </List> 
  );
}