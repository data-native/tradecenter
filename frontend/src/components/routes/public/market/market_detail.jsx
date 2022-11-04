
import styled from 'styled-components';


const StyledWrapper = styled.div``;

export function MarketDetail(params) {
    return (
        <StyledWrapper>
            <div className="header">
                Header of Market Detail page 
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