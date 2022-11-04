import React from 'react';
import styled from 'styled-components';
import { generateDataPoints } from '../../../../utilities';
import { StockSplineAreaChart, AreaChart} from '../../../graphs';
import { AssetOverviewTable, StockSummaryPanel } from '../../../panels';

const Styles = styled.div`
    display: grid;
    grid-template-areas:
    "header"
    "content"
    "footer";

    .header {
        grid-area: header;
    }
    .content {
        grid-area: content;
    }
    .footer {
        grid-area: footer;
    }
`;


export function AssetList(params) {
    // Loads the stock data
    const [stockdata, setStockData] = React.useState([]);
    // Defines the available components and sets their display status
    const [selected, setSelected] = React.useState([]);
    // TODO: Move this into a custom hook
    // TODO: Set the display configuration in a config table and load it for the given user
    const [display, setDisplay] = React.useState({
        AssetOverviewTable: true,
        AreaChart: true,
    });

    function conditionallyRender(name, component) {
        if (display[name]) {
            return component   
        } 
    };

    return (
        <Styles>
            <div className="header">
                Header of AssetList
                {
                    conditionallyRender("AssetOverviewTable", 
                    <AssetOverviewTable 
                        data={stocks.filter(stock => selected.includes(stock.ticker))}
                        // columns={}
                    /> )
                }
            </div>
            <div className="content">
                Comparing one or multiple assets side by side
                {
                    conditionallyRender("AreaChart", 
                    <StockSummaryPanel 
                        selected={selected}
                        handleSelect={setSelected} 
                        stocks={stocks}/>)
                }
            </div>
            <div className="footer">
                Additional links and information provided to the user
            </div>
        </Styles>
    )
};

const stocks = [
    {
        ticker: "APPL",
        stats: {
            open: 500,
            close: 340,
            mv_1day: "5%",
            min52w: 140, 
            max52w: 340, 
        },
        data: generateDataPoints(1000)
    },
    {
        ticker: "MSFT",
        stats: {
            open: 500,
            close: 340,
        },
        data: generateDataPoints(1000)
    },
    {
        ticker: "TSLA",
        stats: {
            open: 500,
            close: 340,
        },
        data: generateDataPoints(1000)
    },
    {
        ticker: "WLM",
        stats: {
            open: 500,
            close: 340,
        },
        data: generateDataPoints(1000)
    },
];