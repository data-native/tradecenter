import React from 'react';
import {MainNav} from './components/nav';

import { 
  AssetComparison,
  AssetDetail,
  AssetList,
  Assets
} from './components/routes';
import {
  PublicLanding,
} from './components/routes/public/landing.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const links = [
 {to:"/",  name:"Dashboard"},
 {to:"/assets",  name:"Assets"},
 {to:"/markets",  name:"Markets"},
 {to:"/portfolio",  name:"Portfolios"},
]


export default function App() {
  return (
    <BrowserRouter>
      <div class="header">
        <MainNav links={links}/>
      </div>      
    <div class="content">
     <Routes>
        <Route path="/" element={<PublicLanding/>}/>
        <Route path="/assets" element={<Assets/>}>
          <Route index element={<AssetList />} />
          <Route path=":ticker" element={<AssetDetail />}>
            <Route path="compare" element={<AssetComparison />} />
          </Route>
      </Route>
      </Routes>
    </div>
  </BrowserRouter>
)
}

