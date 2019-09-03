import React from "react";

const Stock = props => (
  <div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.stock.name}</h5>
        <p className="card-text">{props.stock.ticker}</p>
        <p>${props.stock.price}</p>
        <button
          id={props.stock.id}
          onClick={e => {
            props.onChangeStock(e);
          }}
        >
          {props.buy_sell}
        </button>
      </div>
    </div>
  </div>
);

export default Stock;
