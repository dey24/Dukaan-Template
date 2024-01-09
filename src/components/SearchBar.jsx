// import React from 'react';
import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme, width, minWidth, maxWidth, backgroundColor, border}) => ({
  position: 'relative',
  borderRadius: '6px',
  backgroundColor: backgroundColor, //"#F2F2F2"
  '&:hover': {
    backgroundColor: backgroundColor,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  border: border,
  width: width,
  minWidth:minWidth,
  maxWidth:maxWidth,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));

export default function SearchAppBar({placeholder, width, minWidth, maxWidth, backgroundColor, border}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static" sx={{backgroundColor:"transparent"}}> */}
        {/* <Toolbar> */}
          <Search  width={width} minWidth={minWidth} maxWidth={maxWidth} backgroundColor={backgroundColor} border={border}>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'#808080'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={placeholder}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        {/* </Toolbar> */}
      {/* </AppBar> */}
    </Box>
  );
}
