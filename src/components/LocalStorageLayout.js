import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { SideBar } from "../containers/SideBar";
import { MessagesList } from "../containers/MessagesList";
import { AddMessage } from "../containers/AddMessage";

import MarketTable from "./MarketTable"


const ReactGridLayout = WidthProvider(RGL);
const originalLayout = getFromLS("layout") || [];
/**
 * This layout demonstrates how to sync to localstorage.
 */
class LocalStorageLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    cols: 12,
    rowHeight: 30,
    onLayoutChange: function() {}
  };

  constructor(props) {
    super(props);

    this.state = {
      layout: JSON.parse(JSON.stringify(originalLayout))
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.resetLayout = this.resetLayout.bind(this);
  }

  resetLayout() {
    this.setState({
      layout: []
    });
  }

  onLayoutChange(layout) {
    /*eslint no-console: 0*/
    saveToLS("layout", layout);
    this.setState({ layout });
    this.props.onLayoutChange(layout); // updates status display
  }

  render() {
    return (
      
<ReactGridLayout
          {...this.props}
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          useCSSTransforms={false}
          measureBeforeMount={true}
          draggableHandle=".text"
          // compactType={this.state.compactType}
          // preventCollision={!this.state.compactType}
        >
          <div style={{display:'flex',flexDirection:'column'}} key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0 }}>
            <div className="text">BITCOIN</div>
            <MarketTable/>
          </div>
          <div style={{display:'flex',flexDirection:'column'}} key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0 }}>
            <div className="text ">SALMON FAR GBP</div><MarketTable/>
          </div>
          <div style={{display:'flex',flexDirection:'column'}} key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0 }}>
            <div className="text">SALMON SCT GBP<MarketTable/></div>
          </div>
          <div style={{display:'flex',flexDirection:'column'}} key="4" data-grid={{ w: 2, h: 3, x: 6, y: 0 }}>
            <div className="text">SALMON CHI USD</div><MarketTable/>
          </div>
          <div key="5" data-grid={{ w: 2, h: 3, x: 8, y: 0 }}>
            <div className="text">ORDERS</div>
          </div>
          <div key="6" data-grid={{ w: 2, h: 3, x: 10, y: 0 }}>
            <div className="text">TRADES</div>
          </div>
          <div key="7" data-grid={{ w: 2, h: 3, x: 12, y: 0 }}>
        
           
          <div className="flex-container">
            <div className="text">CHAT</div>
      <div className="flex-container-upper">
        <div className="flex-item flex-item-side"><SideBar/></div>
        <div className="flex-item flex-item-main"><MessagesList/></div>
       
      </div>
      <div className="flex-container-lower">
        
        <div className="flex-item-lower"><AddMessage/></div>
      </div>
      </div>
    </div>
        </ReactGridLayout>
       
        
     
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-7")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-7",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

export default LocalStorageLayout;

// if (require.main === module) {
//   require("../test-hook.jsx")(module.exports);
// }
