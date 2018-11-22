import React from "react";

import {
  Drawer,
  
} from "@material-ui/core";

import { Menu, Settings  } from "@material-ui/icons";


class MenuBar extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = open => () => {
    this.setState({
      left: open
    });
  };

  render() {
   
    return (
      <div class="menu-bar">
        <div class="menu-bar-left">
          <div
            style={{ marginRight: "100px" }}
            onClick={this.toggleDrawer("left", true)}
          >
            <Menu />
          </div>
          <div
            style={{
              textAlign: "center",
              width: "90px",
              paddingBottom: "5px",
              marginRight: "50px",
              color: "#8190a5",
              borderBottom: "3px solid #33FF7A"
            }}
          >
            Activate All
          </div>
          <div
            style={{
              textAlign: "center",
              width: "90px",
              paddingBottom: "5px",
              marginRight: "50px",
              color: "#8190a5",
              borderBottom: "3px solid gold"
            }}
          >
            Suspend All
          </div>
          <div
            style={{
              textAlign: "center",
              width: "90px",
              paddingBottom: "5px",
              marginRight: "50px",
              color: "#8190a5",
              borderBottom: "3px solid red"
            }}
          >
            Cancel All
          </div>
        </div>

        <div className="menu-bar-center">
          <img className="banner" alt="8" src="/images/LFEX-logo-light.png" />
        </div>

        <div class="menu-bar-right">
          <div style={{ marginRight: "25px" }}> BBB </div>
          <div style={{ marginRight: "5px" }} class="green-dot" />
          <div style={{ color: "#8190a5", fontStyle: "normal" }}>
            {" "}
            Connected{" "}
          </div>
        </div>

        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
            style={{ backgroundColor: "#273142" }}
          >
            <div style={{ width: "300px", height: "100vh", color: "white" ,padding:'30px'}}>
              <div className="menu-bar-center">
                <img
                  className="banner"
                  alt="8"
                  src="/images/LFEX-logo-light.png"
                />
              </div>
            

              <hr/>

              <div class="side-menu-header"> 
                <label className="side-menu-header-color">NEW WINDOW</label>
                <Settings className="side-menu-header-color"/>
              </div>

              <div class="side-menu-item"> 
                <label className="side-menu-header-color">NEW WINDOW</label>
                <Settings className="side-menu-header-color"/>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}



export default MenuBar;
