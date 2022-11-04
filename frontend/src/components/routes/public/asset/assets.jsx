import React from 'react';
import axios from 'axios';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

import { } from './../../../../components/api';

const Styles = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-areas:
  "header header"
  "side content";
  
  div {
    margin: 10px;
    padding: 15px;
    background: lightgrey;
  }
  .header {
    grid-area: header;
  }
  .sidebar {
    grid-area: side;
  }
  .content {
    grid-area: content;
  }
`;

export function Assets(){
    const [assets, setAssets] = React.useState([]);

    return (
      <Styles>
        <div class="header">
          <h1>Stock Assets</h1>
          <p>Recommended content</p>
          <ul>
          </ul>
        </div>
        <div class="sidebar">
          <h2>Timeline</h2>
          <h2>Categories</h2>
          <ul>
          </ul>
        </div>
        <div class="content">
          <Outlet context={{
            'assets': assets,
            'setAssets': setAssets,
          }}/>
        </div>
      </Styles>
    ) 
}

