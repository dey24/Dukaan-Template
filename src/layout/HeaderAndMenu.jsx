
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo3 from "../assets/logo3.jpeg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchBar from '../components/SearchBar.jsx'
//icons
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PaymentsIcon from '@mui/icons-material/Payments';
import BuildIcon from '@mui/icons-material/Build';
import DiscountIcon from '@mui/icons-material/Discount';
import GroupIcon from '@mui/icons-material/Group';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import SearchIcon from '@mui/icons-material/Search';
import CampaignIcon from '@mui/icons-material/Campaign';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Overview from '../components/Overview.jsx';
import Transactions from '../components/Transactions.jsx';
import DataTable from '../components/DataTable.jsx';
import { useState } from 'react';


const drawerWidth = 224;

export default function HeaderAndMenu() {
  const [selectedItem, setSelectedItem] = useState('Payments');

  const handleItemClick = (text) => {
    setSelectedItem(text);
  };

  const icons = [
  <HomeIcon key={1} sx={{color:'#FFFFFF'}}/>,
  <ListAltIcon key={2} sx={{color:'#FFFFFF'}}/>,
  <WidgetsIcon key={3} sx={{color:'#FFFFFF'}}/>,
  <LocalShippingIcon key={4} sx={{color:'#FFFFFF'}}/>,
  <VolumeMuteIcon key={5} sx={{color:'#FFFFFF'}}/>,
  <EqualizerIcon key={6} sx={{color:'#FFFFFF'}}/>,
  <PaymentsIcon key={7} sx={{color:'#FFFFFF'}}/>,
  <BuildIcon key={8} sx={{color:'#FFFFFF'}}/>,
  <DiscountIcon key={9} sx={{color:'#FFFFFF'}}/>,
  <GroupIcon key={10} sx={{color:'#FFFFFF'}}/>,
  <ColorLensIcon key={11} sx={{color:'#FFFFFF'}}/>,
  <ElectricBoltIcon key={12} sx={{color:'#FFFFFF'}}/>,
];
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#FFF', boxShadow:'none', borderBottom:'0.3px solid #D9D9D9'}}
      >
        {/* <Toolbar> */}
        <Grid sx={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'8px 16px'}}>
            <Grid item sx={{display:'flex', alignItems:'center'}}>
              <Grid sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <Grid item>
                <Typography fontSize="15px" fontFamily="'Inter', sans-serif" fontStyle="normal" fontWeight='400' noWrap component="div" sx={{color:'#1A181E'}}>
                    Payments
                </Typography>
                </Grid>
                <Grid item sx={{marginLeft:'16px'}}>
                  <Typography fontSize="12px" sx={{display:'flex', alignItems:'center', color:'#1A181E'}}>
                      <HelpOutlineIcon sx={{fontSize:14}}/> <Typography  sx={{marginLeft:'6px', fontSize: { xs: 12, md: 14 }}}>How it works</Typography>
                  </Typography>   
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
                <SearchBar placeholder={"Search features, tutorials, etc."} width={"100%"} minWidth={'400px'} backgroundColor="#F2F2F2"/>
            </Grid>

            <Grid item sx={{color:'#1A181E', display:'flex', alignItems:'center', gap:2}}>
                <div style={{padding:10, backgroundColor:'#E6E6E6', borderRadius:'50%', height:45, width:45, display:'flex',alignItems:'center', justifyContent: 'center'}}>
                  <CampaignIcon />
                </div>
                <div style={{padding:10, backgroundColor:'#E6E6E6', borderRadius:'50%', height:45, width:45, display:'flex',alignItems:'center', justifyContent: 'center'}}>
                  <ArrowDropDownIcon />
                </div>
            </Grid>
            
        </Grid>
        {/* </Toolbar> */}
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1E2640',
            color: '#FFFFFF',
             padding:'16px 10px 16px 10px'
          },
          // position:'relative'
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar> */}
          <Grid sx={{display:'flex', alignItems: 'center', justifyContent:'space-between', padding:'0px 8px'}}>
            <Grid sx={{display:'flex', alignItems: 'center', gap:1}}>
              <Grid item>
                <img src={logo3} alt="logo2" style={{width:'39px', height:'39px', borderRadius: '4px'}}/>
              </Grid>
              <Grid item sx={{display:'flex', flexDirection:'column'}}>
                  <Typography fontSize='15px' fontFamily="'Inter', sans-serif" fontStyle="normal" fontWeight='400'>Nishyan</Typography>
                  <Typography fontSize='13px' fontFamily="'Inter', sans-serif" fontStyle="normal" fontWeight='400' sx={{textDecoration:'underline'}}>Visit Store</Typography>
              </Grid>
            </Grid>
            
            <Grid item sx={{display: 'flex',justifyContent:'flex-end'}}>
              <KeyboardArrowDownIcon />
            </Grid>
          </Grid>
        {/* </Toolbar> */}
        <Divider />
        <List>
          {['Home', 'Orders', 'Products', 'Delivery', 'Marketing', 'Analytics', 'Payments', 'Tools', 'Discounts', 'Audience','Appearance','Plugins'].map((text, index) => (
            <ListItem key={text} sx={{padding:'0 0', backgroundColor: selectedItem === text ? '#353C53' : 'inherit', borderRadius:'4px'}}>
              <ListItemButton onClick={() => handleItemClick(text)}>
                <ListItemIcon sx={{minWidth:'35px'}}>
                  {/* {index % 2 === 0 ? <InboxIcon sx={{color: '#FFFFFF'}}/> : <MailIcon sx={{color: '#FFFFFF'}}/>} */}
                  {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
        {/* <List>
          {[ 'All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon sx={{color: '#FFFFFF'}}/> : <MailIcon sx={{color: '#FFFFFF'}}/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <Grid sx={{position:'absolute', bottom:10,height:'auto',width:'192px', display:'flex',alignItems:'center', justifyContent:'flex-start', flexDirection:'column'}}>
          <Grid item sx={{borderRadius:'4px',padding:'6px 12px', backgroundColor:'#353C53',width:'192px', display:'flex', alignItems:'center', justifyContent:'flex-start', gap:'10px' }}>
            <Grid item sx={{backgroundColor:'rgba(255, 255, 255, 0.10)',borderRadius:'4px', display:'flex', alignItems:'center', padding:'6px'}}>
              <AccountBalanceWalletIcon />
            </Grid>
            <Grid item sx={{display:'flex', flexDirection:'column'}}>
              <Grid item>
                <Typography sx={{fontSize:'13px', fontFamily:'Inter, sans-serif', fontStyle:'normal', fontWeight:'400',lineHeight:'16px'}}>Available credits</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{fontSize:'16px', fontFamily:'Inter, sans-serif', fontStyle:'normal', fontWeight:'500',lineHeight:'24px'}}>222.0</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Overview />
        <Transactions />
        <DataTable />
      </Box>
    </Box>
  );
}