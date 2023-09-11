import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from '@mui/icons-material/Settings';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="leftnav">
        <div>Coins</div>
        <div>Exchanges</div>
        <div>Swap</div>
      </div>
      <div className="logo">
        <img
          src={"https://coincap.io/static/logos/black.svg"}
          alt="brand_logo"
          style={{ width: "100px" }}
        />
      </div>
      <div className="rightnav">
        <div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[]}
            sx={{ width: "max-content" }}
            size="small"
            renderInput={(params) => <TextField {...params} label="USD" />}
          />
        </div>
        <div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            size="small"
            options={[]}
            sx={{ width: 100 }}
            renderInput={(params) => <TextField {...params} label="English" />}
          />
        </div>
        <div>
          <SearchIcon />
          <input type="text" style={{width:"100px",height:"30px"}}
          placeholder="search..."/>
        </div>
        <div>
            <SettingsIcon/>
        </div>
      </div>
    </div>
  );
}
