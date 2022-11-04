import styled from 'styled-components';
import {ContentOverview, SectionOverview} from '../../panels';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 20% 70% 10%;
  grid-template-columns: 25% 75%;
  grid-template-areas:
  "header header"
  "sidebar content"
  "footer footer";
  margin: 20px;

  .header {
    grid-area: header;
  }

  .content {
    grid-area: content;
  }

  .sidebar {
    grid-area: sidebar;
    .div {
      padding: 20px;
    }
  }
  .footer {
    grid-area: footer;
  }
`;

export function PublicLanding() {
  return (
  <StyledWrapper>
    <div className="header">
      <h1>TradingCenter One</h1>
      <h2>Central trading and portfolio management solution driven by cognitive AI</h2>
    </div>
  <div className="sidebar">
    <p>Portfolio status</p> 
    <p>Recommended trades</p> 
  </div> 
    <div className="content">
      <div className="portfoliodashboard">
        A portfolio dashboard summarizing the current state of my portfolios
      </div>
    </div>
  <div className="footer"></div>
  
</StyledWrapper>
  );
}
