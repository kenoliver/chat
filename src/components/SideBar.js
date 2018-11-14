import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  
  CardHeader,
  Avatar
} from "@material-ui/core";
const SideBar = ({ users }) => (
  <div id="sidebar" className="sidebar">
    
      {users.map(user => {
        const av = user.name.substring(0,1)
        return (
        <Card key={user.id} style={{ flex: 1 , backgroundColor:'lightgrey'}}>
      
          <CardHeader style={{width:'200px'}}
            avatar={
              <Avatar aria-label="Recipe" style={{ backgroundColor: "Red" }}>
                {av}
              </Avatar>
            }
            title={user.name}
            subheader="Online"
          />
          
            
          
       
      </Card>
      )
      })}
    
  </div>
);

SideBar.PropTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default SideBar;
