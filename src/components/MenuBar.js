import React from "react";
import Menu from "@material-ui/icons/Menu";

const MenuBar = props => {
  return (
    <div class="menu-bar">
      <div class="menu-bar-left">
        <div style={{ marginRight: "100px" }}>
          <Menu />
        </div>
        <div style={{ textAlign:"center",width:"90px", paddingBottom:"5px",marginRight: "50px", color: "#8190a5", borderBottom:"3px solid #33FF7A"}}>
          Activate All
        </div>
        <div style={{ textAlign:"center",width:"90px",paddingBottom:"5px",marginRight: "50px", color: "#8190a5", borderBottom:"3px solid gold" }}>Suspend All</div>
        <div style={{ textAlign:"center",width:"90px",paddingBottom:"5px",marginRight: "50px", color: "#8190a5", borderBottom:"3px solid red"}}>Cancel All</div>
      </div>

      <div className="menu-bar-center">
        <img className="banner" alt="8" src="/images/LFEX-logo-light.png" />
      </div>

      <div class="menu-bar-right">
        <div style={{ marginRight: "25px" }}> BBB </div>
        <div style={{ marginRight: "5px" }} class="green-dot" />
        <div style={{ color: "#8190a5", fontStyle: "normal" }}> Connected </div>
      </div>
    </div>
  );
};

export default MenuBar;
