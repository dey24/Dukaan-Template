import { Grid, Typography } from "@mui/material"
import SearchAppBar from './SearchBar';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import DownloadIcon from '@mui/icons-material/Download';

const Transactions = () => {
  return (
    <Grid sx={{marginTop:'32px'}}>
        <Grid item>
            <Typography sx={{fontFamily:'Inter, sans-serif', fontStyle:'normal',fontSize:'20px',fontWeight:'500',lineHeight:'24px'}}>Transactions | This Month</Typography>
        </Grid>

        <Grid sx={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <Grid item sx={{marginTop:'20px'}}>
                <SearchAppBar placeholder="Search by Order ID..." width={'100%'} maxWidth={'248px'} backgroundColor={"#FFFFFF"} border={'0.2px solid #D9D9D9'}/>
            </Grid>
            <Grid item sx={{display:'flex', alignItems: 'center', justifyContent:'space-between', gap:'12px', paddingRight:'12px'}}>
                <Grid sx={{display:'flex', alignItems: 'center', justifyContent:'center', border:'1px solid #D9D9D9', borderRadius:'4px', padding:'6px 12px'}}>
                    <Grid item>
                        <Typography sx={{color: '#4D4D4D',fontSize:'16px', fontFamily:'Inter, sans-serif', fontWeight:'400', lineHeight:'24px', fontStyle:'normal'}}>Sort</Typography>
                    </Grid>
                    <Grid item marginTop={'5px'}>
                        <SwapVertIcon sx={{color:'#4D4D4D', height:"18px", width:'18px'}}/>
                    </Grid>
                </Grid>
                <Grid sx={{ border:'1px solid #D9D9D9', padding:'6px 12px',  borderRadius:'4px'}}>
                    <DownloadIcon />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Transactions
