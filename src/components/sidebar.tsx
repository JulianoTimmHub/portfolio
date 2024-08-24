import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { SwitchColor } from './switchColor';
import { SwitchLanguage } from './switchLanguage';
import { useState } from 'react';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const linkedin = 'https://www.linkedin.com/in/juliano-henrique-timm-583322238/';
  const github = 'https://github.com/JulianoTimmHub';
  const whatsapp = 'https://api.whatsapp.com/send/?phone=45999455504&text&type=phone_number&app_absent=0';

  const DrawerList = (
    <Box sx={{ maxWidth: '100%' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {/* {['Github', 'Linkedin', 'WhatsApp'].map((text, index) => ( */}
        <ListItem key='Github' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link href={github} target="_blank">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github.svg')] hover:bg-[url('/contacts/github-original.svg')] bg-cover w-[30px] h-[30px]" />
              </Link>
            </ListItemIcon>
            <ListItemText primary='Github' />
          </ListItemButton>
        </ListItem>
        <ListItem key='linkedin' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link href={linkedin} target="_blank">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/linkedin.svg')] hover:bg-[url('/contacts/linkedin-original.svg')] bg-cover w-[30px] h-[30px]" />
              </Link>
            </ListItemIcon>
            <ListItemText primary='linkedin' />
          </ListItemButton>
        </ListItem>
        <ListItem key='WhatsApp' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link href={whatsapp} target="_blank">
                <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/whatsapp.svg')] hover:bg-[url('/contacts/whatsapp-original.svg')] bg-cover w-[30px] h-[30px]" />
              </Link>
            </ListItemIcon>
            <ListItemText primary='WhatsApp' />
          </ListItemButton>
        </ListItem>
        {/* ))} */}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SwitchColor />
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SwitchLanguage />
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className='fixed top-[10px] hidden max-[640px]:block cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300'>
      <Button onClick={toggleDrawer(true)}><MenuIcon className="bg-[#656783] rounded-[5px] h-[40px] w-[40px] text-[#303446]" /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}