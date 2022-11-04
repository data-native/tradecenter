import React from 'react';
import styled from 'styled-components';
import Grid2 from '@mui/material/Unstable_Grid2';
import {Button, ButtonGroup} from '@mui/material';
import { AnalyticalTable, SummaryTable } from '../tables';


const Styles = styled.div`

`;

const data = {
    rows : [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
      ],
     columns : [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ]
};
  
export function AssetOverviewTable() {
    return (
        <Styles>
            <Grid2 container spacing={2}>
                <Grid2 xs={8}>
                    <ButtonGroup size="small" variant="contained" aria-label=" small primary button group">
                        <Button>Summarize</Button>                                
                        <Button>Portfolio fit</Button>                                
                        <Button>Performance</Button>                                
                        <Button>News</Button>                                
                    </ButtonGroup>
                </Grid2>
                <Grid2 xs={3}>
                </Grid2>
                <Grid2 xs={12}>
                    <SummaryTable size="small" data={data}/>
                </Grid2>
            </Grid2>
        </Styles>
    )
}