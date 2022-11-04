// Retrieve data about the ongoing trading activities from selected markets
import axios from 'axios';


// Retrieve stock data for a given stock by ticker
function getStockDataById(stock_ticker) {
    console.log(process.env)
    //Get the stock by Id
    axios({
      method: 'get',
     url: process.env.REACT_APP_BACKEND_URL + "/assets" + stock_ticker
    }).then(response => {
      console.log(response.data)
      return response.data
    });
};

// Resolves a given name for a list of potential matching tickers
//ipotential matching tickers
function getStockTickerByName(stockname) {
    axios({
      method: 'post',
      url: process.env.REACT_APP_BACKEND_URL + "/assets",
      body: {
        stock_name: stockname
      }
    }).then(response => {
      console.log(response.data)
      return response.data
    });
};
