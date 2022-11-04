import React, {useEffect} from 'react';
import styled from 'styled-components';
import CanvasJSReact from '../canvasjs-stock/canvasjs.stock.react';
import { generateDataPoints } from '../../utilities';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

const StylesAreaChart = styled.div`
    height: 150px;
`;

// Compact, view only area chart to display summary timelines for stock
export function AreaChart({ticker, data, props, options}) {
    // 

    const containerProps = {
        width: "100%",
        height: "100%",
        margin: "0",
        padding: "0",
      };

    const default_options = {
        theme: "light2", // "light1", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: false,
        title: {
            text: ticker, 
        },
        charts:[{
            axisX: {
                ticks: {display: false}
            },
            axisY: {
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            }, 
        }],
        data: [{
            type: "area",
            dataPoints: data
        }]    
    };

    // Merge both option definitions
    // let final_options = Object.assign({}, default_options, options);
    return (
        <CanvasJSChart  
            containerProps={containerProps}
            data={data}
            options={default_options} />
    )

}

const Styles = styled.div`
`;
// Large display, fully interactive Area Chart
export function StockSplineAreaChart({ticker, data}) {
    // Destructure props
    // Set the required state in the application
    const [datapoints, setDatapoints] = React.useState([]);    
    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        setDatapoints(data);
        setIsLoaded(true);
    }, [])
    

    const options = {
        title: {
            text: "Stock Chart for ${ticker}"
        },
        theme: "light2",
        subtitles: [{
            text: "XXX"
        }],
        charts: [{
            axisX: {
                ticks: {
                    display: false
                },
                crosshairs: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY: {
                title: "XXX Price",
                prefix: "$",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            tooltip: {
                shared: true
            },
            data: [{
                name: "Price in (USD)",
                type: "splineArea",
                color: "#3576a8",
                dataPoints: datapoints
            }]
        }],
        navigator: {
            slider: {
                minimum: new Date("2010-01-01"),
                maximum: new Date("2022-10-18")
            }
        }
    };

    const containerProps = {
        
    } 

    return (
        <Styles>
            {
                <CanvasJSStockChart  
                    containerProps={containerProps} 
                    options={options} />
            }
        </Styles>
    )
}