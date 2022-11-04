import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styled from 'styled-components';

export function SummaryTable({
    size,
    data
}) {
    return (
        <TableContainer component={Paper}>
            <Table size={size} aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Index</TableCell>
                        {data.columns.map( col => (
                            <TableCell key={col.headerName}>{col.headerName}</TableCell>
                        ))}
                    </TableRow>
            </TableHead>
        <TableBody>
           {data.rows.map(row => (
            <TableRow
                >
                    {
                        Object.keys(row).map((k,v) => (
                           <TableCell key={k}>{row[k]}</TableCell>
                        ))
                    }
                </TableRow>
           ))} 
        </TableBody>
        </Table>
        </TableContainer>
    )
}

