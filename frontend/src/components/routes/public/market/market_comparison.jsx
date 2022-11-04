
import styled from 'styled-components';


const StyledWrapper = styled.div``;

export function MarketComparison(params) {
    return (
        <StyledWrapper>
            <div className="header">
                Header of Market Comparison 
            </div>
            <div className="content">
                Comparing one or multiple assets side by side
            </div>
            <div className="footer">
                Additional links and information provided to the user
            </div>
        </StyledWrapper>
    )
}