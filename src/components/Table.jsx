import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Assetname, co2, t) {
  return { Assetname, co2 , t };
}

const rows = [
  createData('generator fCF ABD', 5.56, 172),
  createData('generator cpf jbx 01', 5.56 , 172),
  createData('generator_GPI_01', 6.89, 214),
  createData('generator_GFI_01', 6.89, 214),
  createData('generator_AGF_01', 6.89, 214),
];

export default function BasicTable() {
  return (
    <div>
        <div>
            <h5>generator</h5>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 550 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Asset name</TableCell>
                    <TableCell align="right">co2</TableCell>
                    <TableCell align="right">t</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.Assetname}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.Assetname}
                      </TableCell>
                      <TableCell align="right">{row.co2}</TableCell>
                      <TableCell align="right">{row.t}</TableCell>
        
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>
        <div className='mt-3'>
        <h5>compressor</h5> 
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Asset name</TableCell>
                <TableCell align="right">co2</TableCell>
                <TableCell align="right">t</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.Assetname}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Assetname}
                  </TableCell>
                  <TableCell align="right">{row.co2}</TableCell>
                  <TableCell align="right">{row.t}</TableCell>
    
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
    </div>
  );
}
