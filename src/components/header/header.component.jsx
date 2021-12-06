import React from "react";
import "./header.css";
import projectLogo from "../../assets/logo.svg";

import { HeaderBar, SearchBar } from "./header.style";

const Header = () => {
  return (
    <div>
      <HeaderBar>
        <div className="header-div">
          <img src={projectLogo} alt="" width="50px" />
          <SearchBar type="search" placeholder="Search Facebook" />
        </div>
      </HeaderBar>
    </div>
  );
};

export default Header;
