import React, {useEffect} from 'react';
import styled from 'styled-components';
import {generateDataPoints} from '../../utilities';
import { AreaChart } from '../graphs';
import { AnalyticalTable } from '../tables';

const Styles = styled.div`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    grid-template-areas:
    "summary data actions";

    height: 140px;
    background: white;
    box-shadow: 0px 0px 20px 0px #999999;
    

    .summary {
        grid-area: summary;
        
        h1 {
            font-size: 25px;
            margin: 0 0 0 0;
        }
        table {
            font-size: 11px;
            font-face: normal;
            padding: 0;
            margin: 0;
        }
    }
    .data {
        grid-area: data;
        margin: 0;
        padding: 0;
        border: 1px dashed;

    }
    .actions {
        grid-area: actions;
    }
`;

const containerProps = [{
    height: "100px",
    width: "100%",
    margin: "0",
    padding: "0"
}]


// Displays a stock per row with details on each stock
// @StockList: an array of stock details
export function StockSummaryPanel({stocks, selected, handleSelect}) {
    // TODO: Move this over to downloaded data for the selected tickers

    function tickerSelected(ticker) {
        return selected.includes(ticker);
    }
    function toggleTickerSelect(ticker) {
        if (selected.includes(ticker)) {
            handleSelect([...selected.filter( s => s !== ticker)])
        } else {
            handleSelect([...selected, ticker]);            
        }
    }    
    return (
            <>{
                stocks.map( (stock) => {
                    return(
                    <Styles>
                        <div className="summary">
                            <h1>{stock.ticker}</h1>
                            <table className='stockoverview'>
                                <tbody>
                                    <tr>
                                        <tb>{stock.stats.open}</tb> 
                                        <tb>{stock.stats.mv_1day}</tb> 
                                    </tr>
                                    <tr>
                                        <tb>{stock.stats.min52w}</tb> 
                                        <tb>{stock.stats.max52w}</tb> 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="data">
                                <AreaChart 
                                    ticker={stocks.ticker}
                                    data={stock.data}
                                    containerProps={containerProps}
                                    />
                        </div>
                        <div className="actions">
                            <button onClick={() => toggleTickerSelect(stock.ticker)} >
                            { tickerSelected(stock.ticker)? "Remove": "Compare"}
                        </button>
                        </div>
                    </Styles>
               ) }
                
                )
            }
        </>
    )
};
