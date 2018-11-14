import React from "react";
import { SideBar } from "../containers/SideBar";
import { MessagesList } from "../containers/MessagesList";
import { AddMessage } from "../containers/AddMessage";
const MyGrid = () => {
  return (
    <div className="flex-container">
      <div className="flex-container-upper">
        <div className=" flex-item-side"><SideBar/></div>
        <div className=" flex-item-main"><MessagesList/></div>
       
      </div>
      <div className="flex-container-lower">
        
        <div className="flex-item-lower"><AddMessage/></div>
      </div>
    </div>
  );
};

export default MyGrid;
