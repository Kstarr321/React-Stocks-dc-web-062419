import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      stockIndex: [],
      showStocks: [], // whatever is in here is going to be based on the filter
      portfolioStocks: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(r => r.json())
      .then(data => {
        this.setState({
          stockIndex: data,
          showStocks: data
        });
      });
  }

  onFilterChange = event => {
    let filterValue = event.currentTarget.value;
    let filteredStocks = this.state.stockIndex.filter(stock => {
      return stock.type === filterValue;
    });
    this.setState({
      showStocks: filteredStocks
    });
  };

  onBuyStock = e => {
    let stockId = parseInt(e.currentTarget.id);
    let boughtStock;
    let remaining = [];
    this.state.showStocks.forEach(stock => {
      if (stock.id === stockId) {
        boughtStock = stock;
      } else {
        remaining.push(stock);
      }
    });
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, boughtStock],
      showStocks: remaining
    });
  };

  onSellStock = e => {
    let stockId = parseInt(e.currentTarget.id);
    let soldStock;
    let remaining = [];
    this.state.portfolioStocks.forEach(stock => {
      if (stock.id === stockId) {
        soldStock = stock;
      } else {
        remaining.push(stock);
      }
    });
    this.setState({
      showStocks: [...this.state.showStocks, soldStock],
      portfolioStocks: remaining
    });
    // debugger;
  };

  render() {
    return (
      <div>
        <SearchBar onFilterChange={this.onFilterChange} />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.showStocks}
              onChangeStock={this.onBuyStock}
              buy_sell={"buy"}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              onChangeStock={this.onSellStock}
              stocks={this.state.portfolioStocks}
              buy_sell={"sell"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
