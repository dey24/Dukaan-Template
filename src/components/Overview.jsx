import { Card, CardContent, Grid, Typography } from "@mui/material"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Overview = () => {
    const top100Films = [
  { label: 'January', year: 1994 },
  { label: 'February', year: 1972 },
  { label: 'March', year: 1974 },
  { label: 'April', year: 2008 },
  { label: 'May', year: 1957 },
  { label: "June", year: 1993 },
  { label: 'July', year: 1994 },
  {
    label: 'August',
    year: 2003,
  },
  {
    label: 'September',
    year: 2003,
  },
  {
    label: 'October',
    year: 2003,
  },
  {
    label: 'November',
    year: 2003,
  },
  {
    label: 'December',
    year: 2003,
  },
]
  return (
    <Grid>
        <Grid sx={{display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
            <Grid item>
                <Typography sx={{fontSize:'20px',fontWeight:'600', fontStyle:'normal', color:'#1A181E', fontFamily:'Inter, sans-serif'}}>Overview</Typography>
            </Grid>
            <Grid item>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size="small"
                    sx={{ width: '137px', height:'36px' }}
                    renderInput={(params) => <TextField {...params} label="Last Month"/>}
                />
            </Grid>
        </Grid>
        <Grid sx={{display:'flex', alignItems: 'center', justifyContent:'space-evenly',gap:'16px', marginTop:'20px', width:'100%',}}>
            <Card sx={{padding:'20px 20px',flex:'1', flexBasis:0, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                    <Typography sx={{fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:'400', lineHeight:'24px',  fontStyle:'normal'}}>Online orders</Typography>
                    <Typography sx={{fontFamily:'Inter, sans-serif', fontSize:'32px', fontWeight:'500', lineHeight:'38px', fontStyle:'normal'}}>231</Typography>
                </CardContent>
            </Card>
            <Card sx={{padding:'20px 20px', flex:'1', flexBasis:0, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                    <Grid sx={{display:'flex', flexDirection: 'column', alignItems:'flex-start'}}>
                        <Typography sx={{fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:'400', lineHeight:'24px',  fontStyle:'normal'}}>Amount received</Typography>
                        <Typography sx={{fontFamily:'Inter, sans-serif', fontSize:'32px', fontWeight:'500', lineHeight:'38px', fontStyle:'normal'}}>₹23,92,312.19</Typography>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}

export default Overview
