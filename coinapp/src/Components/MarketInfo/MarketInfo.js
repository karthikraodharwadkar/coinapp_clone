import React from "react";
import './MarketInfo.css'

export default function MarketInfo() {
  return (
    <div className="info-container">
      <div className="info">
        <p>MARKETCAP</p>
        <p>$1.01T</p>
      </div>
      <div className="info">
        <p>EXCHANGE VOL</p>
        <p>$18.97B</p>
      </div>
      <div className="info">
        <p>ASSETS</p>
        <p>2,296</p>
      </div>
      <div className="info">
        <p>EXCHANGES</p>
        <p>73</p>
      </div>
      <div className="info">
        <p>MARKETS</p>
        <p>9,633</p>
      </div>
      <div className="info">
        <p>BTC DOM INDEX</p>
        <p>48.2%</p>
      </div>
    </div>
  );
}
