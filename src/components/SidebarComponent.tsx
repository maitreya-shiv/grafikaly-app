import { useState } from 'react'
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';





const SidebarComponent = () => {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 320, backgroundColor: '#f37b83', color: '#f9f0ff', height: '100vh' }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{ mt: 3, ml: '28px', color: '#f37b83' }}>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseRoundedIcon style={{ color: '#f9f0ff' }} />
        </IconButton>
      </Box>
      <Box sx={{ mt: 10, ml: 7, color: '#f9f0ff' }}>
        <List>
          {['Home', 'Blog'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText>
                  <Typography sx={{ color: '#f9f0ff', fontSize: '2em', fontWeight: 'bold' }}>{text}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );


  return (
    <div className='app-menu'>
      <Box sx={{ mt: 3, ml: '28px', color: '#f37b83' }}>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuRoundedIcon style={{ color: '#f9f0ff' }} />
        </IconButton>
      </Box>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>


      <Typography sx={{ mt: 5, ml: 5, color: '#f37b83', fontSize: '20px' }}>Disrupt. Build. Evolve.</Typography>
      <Typography sx={{ mt: 7, ml: 7, color: '#f37b83', fontSize: '15px' }}>C O M P A N Y</Typography>
      <Typography sx={{ ml: 7, color: '#f9f0ff', fontSize: '18px' }}>Grafikaly</Typography>
      <Typography sx={{ mt: 3, ml: 7, color: '#f37b83', fontSize: '15px' }}>E M A I L</Typography>
      <Typography sx={{ ml: 7, color: '#f9f0ff', fontSize: '18px' }}>grafikaly@example.com</Typography>
      <Typography sx={{ mt: 3, ml: 7, color: '#f37b83', fontSize: '15px' }}>P H O N E</Typography>
      <Typography sx={{ ml: 7, color: '#f9f0ff', fontSize: '18px' }}>(091) - 9865117538</Typography>
    </div>
  );
};

export default SidebarComponent;