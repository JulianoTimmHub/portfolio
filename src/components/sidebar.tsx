import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import { OptionsList } from './options/optionsList';
import { ContactsList } from './options/contactsList';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  return (
    <div className='fixed top-[10px] hidden max-[640px]:block cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300'>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className="bg-[#303446] dark:bg-[#656783] rounded-[5px] h-[40px] w-[40px] text-white dark:text-[#303446]" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ maxWidth: '100%' }} role="presentation" onClick={toggleDrawer(false)}>
          <ContactsList />
          <Divider />
          <OptionsList />
        </Box>
      </Drawer>
    </div>
  );
}