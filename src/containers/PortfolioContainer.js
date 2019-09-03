import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.stocks.map(stock => {
          return (
            <Stock
              stock={stock}
              key={stock.id}
              onChangeStock={this.props.onChangeStock}
              buy_sell={this.props.buy_sell}
            />
          );
        })}
      </div>
    );
  }
}

export default PortfolioContainer;
