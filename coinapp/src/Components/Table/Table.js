import React, { useEffect, useState } from "react";
import { config } from "../../config";
import axios from "axios";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "./Table.css";

export default function Table() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [order, setOrder] = useState("asc");
  const [arrow, setArrow] = useState(<ArrowDropUpIcon />);
  let startIndex = 0;
  let endIndex = currentPage - 1 + itemsPerPage;

  async function fetchData() {
    let response = await axios.get(`${config.backendEndpoint}`);
    console.log(response.data.data);
    setData(response.data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setCurrentPage((prevState) => prevState + 1);
    setItemsPerPage((prevState) => prevState + 50);
  };

  const handleSort = (col) => {
    if (order === "asc") {
      const sorted = [...data].sort(function (a, b) {
        return Number(a[col]) - Number(b[col]);
      });
      setArrow(<ArrowDropDownIcon />);
      setData(sorted);
      setOrder("desc");
    }
    if (order === "desc") {
      const sorted = [...data].sort(function (a, b) {
        return Number(b[col]) - Number(a[col]);
      });
      setArrow(<ArrowDropUpIcon />);
      setData(sorted);
      setOrder("asc");
    }
  };
  return (
    <>
      <div className="table-container">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort("rank")}>
                  Rank
                  {arrow}
                </th>
                <td>Name</td>
                <td onClick={() => handleSort("priceUsd")}>Price</td>
                <td onClick={() => handleSort("marketCapUsd")}>Market Cap</td>
                <td onClick={() => handleSort("vwap24Hr")}>VWAP(24Hr)</td>
                <td onClick={() => handleSort("supply")}>Supply</td>
                <td onClick={() => handleSort("volumeUsd24Hr")}>
                  Volume(24Hr)
                </td>
                <td onClick={() => handleSort("changePercent24Hr")}>
                  Change(24Hr)
                </td>
              </tr>
            </thead>
            <tbody>
              {data.slice(startIndex, endIndex).map((item, index) => (
                <tr key={index}>
                  <td>{item.rank}</td>
                  <td className="logo_symbol">
                    <div>
                      <img
                        src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                        alt=""
                        style={{ width: "40px" }}
                      />
                    </div>
                    <div className="desc">
                      <span>{item.id}</span>
                      <span style={{ fontSize: "13px" }}>{item.symbol}</span>
                    </div>
                  </td>
                  <td>${Number(item.priceUsd).toFixed(2)}</td>
                  <td>${Number(item.marketCapUsd / 1000000000).toFixed(2)}b</td>
                  <td>${Number(item.vwap24Hr).toFixed(2)}</td>
                  <td>{Number(item.supply / 1000000).toFixed(2)}m</td>
                  <td>
                    ${Number(item.volumeUsd24Hr / 1000000000).toFixed(2)}b
                  </td>
                  <td>{Number(item.changePercent24Hr).toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="loadmore-btn">
        <button onClick={handleLoadMore} className="more-btn">
          View More
        </button>
      </div>
    </>
  );
}
