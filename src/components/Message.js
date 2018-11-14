import React from "react";
import PropTypes from "prop-types";
import {
  Card,
 
  CardContent,
  Typography,
  CardHeader,
  Avatar
} from "@material-ui/core";

const Message = ({ message, author }) => {
  const time = new Date().toLocaleTimeString();
  const av = author.substring(0, 1);
  return (
    <Card style={{ flex: 1,marginBottom:10 }}>
      <div style={{display:'flex'}}>
        <CardHeader style={{width:'200px'}}
          avatar={
            <Avatar aria-label="Recipe" style={{ backgroundColor: "Red" }}>
              {av}
            </Avatar>
          }
          title={author}
          subheader={time}
        />
        
          <CardContent style={{display:'flex',flex:1,textALign:'left'}}>>
            <Typography style={{textALign:'left'}} component="p">{message}</Typography>
          </CardContent>
        
      </div>
    </Card>
  );
};

Message.PropTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Message;
