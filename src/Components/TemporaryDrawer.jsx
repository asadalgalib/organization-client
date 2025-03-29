import * as React from 'react';
import Box from '@mui/material/Box';
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
import { ToggleButton } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import useTheme from '../Hooks/useTheme';
import { IoMoon, IoSunnySharp } from 'react-icons/io5';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const { theme, controlTheme } = useTheme();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div>
          <button className={`w-40 ml-4 rounded lg:flex items-center justify-center py-2 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} font-medium`} onClick={controlTheme}>
            {
              theme === 'dark' ? <p className='flex items-center gap-2'> Dark Mood <IoMoon className='text-2xl text-yellow-400 ' /></p> :
                <p className='flex items-center gap-2'> Light Mood <IoSunnySharp className='text-2xl text-yellow-400 ' /></p>
            }
          </button>
        </div>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)}>
        <FormatAlignLeftIcon style={{ fontSize: "32px" }} className='text-white' />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}