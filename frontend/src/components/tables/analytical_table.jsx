import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';

// Define a default UI for filtering
export function AnalyticalTable({data}) {
    return (
        <DataGrid {...data}/>
    )
};


