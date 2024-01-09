import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
// import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Grid, Typography } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = Array.from({ length: 100 }, (_, index) => createData(`Dessert ${index}`, 100, 10, 20, 5));

export default function DataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const getPageNumbers = () => {
    const pageCount = Math.ceil(rows.length / rowsPerPage);
    const current = page + 1;
    const range = 2; // Number of pages to show on each side of the current page

    let start = Math.max(1, current - range);
    let end = Math.min(pageCount, current + range);

    if (current <= range) {
      end = Math.min(range * 2 + 1, pageCount);
    }

    if (current + range >= pageCount) {
      start = Math.max(pageCount - range * 2, 1);
    }

    const result = Array.from({ length: pageCount }, (_, i) => start + i);

    // Add ellipsis only after page 1 and if there are more than 5 pages
    if (current > 0 && pageCount > 5) {
      result.splice(1,2,'...');
    }

    // Add ellipsis at the end if there are more than 5 pages
    // if (current < pageCount && pageCount > 5) {
    //   result.push('...');
    // }

    return result;
  };



  return (
    <Grid sx={{padding:'24px 12px 24px 24px'}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={5} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
        <IconButton
          color="primary"
          disabled={page === 0}
          onClick={() => handleChangePage(null, page - 1)}
        >
          <Grid sx={{borderRadius: '4px',border:'1px solid #D9D9D9', padding:'4px', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <ChevronLeftIcon sx={{color:'#4D4D4D'}}/>
            <Typography sx={{fontFamily:'Inter, sans-serif', fontSize:"14px", fontStyle:'normal', fontWeight:'500', lineHeight:'20px',  marginRight:'8px', marginTop:'2px'}}>Previous</Typography>
          </Grid>
        </IconButton>
        {getPageNumbers().map((pageNumber) => (
          <IconButton
            key={pageNumber}
            sx={{
                backgroundColor:pageNumber === page + 1 ? '#146EB4' : 'default',
                // backgroundColor: pageNumber === page + 1 ? 'primary' : 'default',
                borderRadius:pageNumber === page + 1 ? '4px' : '4px', // Adjust the border-radius for the square shape
                color:pageNumber === page + 1 ? 'white' : 'default', // Text color
                minWidth:pageNumber === page + 1 ? '32px' : '32px', // Set a minimum width to make it square
                padding: pageNumber === page + 1 ? '4px' : '4px', // Adjust padding for better appearance
                marginTop: pageNumber === page + 1 ? '10px' : '10px', // Adjust margin for better spacing
                marginBottom: pageNumber === page + 1 ? '10px' : '10px',
                '&:hover': {
                    backgroundColor:pageNumber === page+1 ? '#0f5b96' : 'transparent', // Set background color to be transparent on hover
                },
                fontSize:pageNumber === page + 1 ? '14px' : '',
            }}
            onClick={() => {if(pageNumber !== '...'){handleChangePage(null, pageNumber - 1)}}}
          >
            {pageNumber}
          </IconButton>
        ))}
        <IconButton
          color="primary"
          disabled={page === Math.ceil(rows.length / rowsPerPage) - 1}
          onClick={() => handleChangePage(null, page + 1)}
        >
          <Grid sx={{borderRadius: '4px',border:'1px solid #D9D9D9', padding:'4px', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Typography sx={{fontFamily:'Inter, sans-serif', fontSize:"14px", fontStyle:'normal', fontWeight:'500', lineHeight:'20px', marginLeft:'8px', marginTop:'2px'}}>Next</Typography>
            <ChevronRightIcon sx={{color:'#4D4D4D'}}/>
          </Grid>
        </IconButton>
      </div>
    </TableContainer>
    </Grid>
  );
}
