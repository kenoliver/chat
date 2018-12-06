
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {ShareIcon, Input, SwapHoriz, ChatBubble} from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button, Divider} from '@material-ui/core';

const styles = theme => ({
  card: {
    marginBottom: "10px"
  },
 
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  
  },
  order:{
    fontSize:"20pt"
  },
  orderButton:{
    opacity:0.54,
    color:"black",
    paddingLeft: "5px",
    fontSize:"15pt"
  },
  marketDepthHeader:{
    color:"black",
    opacity:.8,
    marginBottom:"15px"
  },
  titleDirectionBuyer:{
// color:"#2f486a",
color:"#4583cc",
fontWeight:"bold",
paddingRight: "25px"
  },
  titleDirectionSeller:{
    // color:"#2c6568",
    color:"#35bea9",
    fontWeight:"bold",
    paddingRight: "25px"
      },
      titleVolume:{   
        fontWeight:"bold",
        fontSize:"20pt",
        paddingRight: "2px"
      },
      titleUnit:{
        fontSize:"12pt",
        paddingRight: "15px"
      },
      titlePrice:{
        fontWeight:"bold",
        fontSize:"20pt",
        paddingRight: "2px"
      },
      titleAnd:{
        paddingRight: "15px"
      },
      contractDetailKey:{
        color:"black",
        opacity:.95,
        fontWeight:500
      },
      contractDetailValue:{
        color:"black",
        opacity:.65
      },
      contractDetailRow:{
        padding:"10px"
      }
});

class BulletinBoardItem extends React.Component {
  state = { detailsExpanded: false, ordersExpanded:false };

  handleDetailsExpandClick = () => {
    this.setState(state => ({ detailsExpanded: !state.detailsExpanded }));
  };

  handleOrdersExpandClick = () => {
    this.setState(state => ({ ordersExpanded: !state.ordersExpanded }));
  };

  render() {
    const { classes } = this.props;
    const contract = this.props.order.contract
    const contractDetails =  Object.keys(contract).map((key,value)=>(
             <div className={classes.contractDetailRow} style={{display:"flex", flexDirection:"Row", justifyContent: "Stretch", alignItems:"center", color:"#aeaeae"}}>
             <div className={classes.contractDetailKey} style={{flex:"1"}}>{key}</div>
             <div className={classes.contractDetailValue} style={{flex:"1"}}>{contract[key]}</div>
             

          </div>
            
           

    ))
    const directionClass= this.props.order.direction=="BUYER" ? classes.titleDirectionBuyer:classes.titleDirectionSeller

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              SAL
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.order.title}
          subheader={
              <Typography className={classes.order}>
              <span className={directionClass}>{this.props.order.direction}</span>
              
              <span className={classes.titleVolume}>{this.props.order.volume}</span>
              <span className={classes.titleUnit}>{this.props.order.unit}</span>
              <span className={classes.titleAnd}>@</span>
              <span className={classes.titlePrice}>{this.props.order.price}</span>
              <span className={classes.titleUnit}>{this.props.order.currency}/{this.props.order.unit}</span>
              
               
              </Typography>

          }

            
            
        />
         
        <CardActions>
           <IconButton aria-label="Trade">
            <SwapHoriz/>
            <Typography className={classes.orderButton}>
   TRADE
          </Typography>
          </IconButton>
          <IconButton aria-label="Order">
          <Input/>
          <Typography className={classes.orderButton}>
   ORDER
          </Typography>


         
          </IconButton>
        </CardActions>
        <Divider/>
   
        <CardActions className={classes.actions} disableActionSpacing>
          <Typography>
            Contract Details
          </Typography>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.detailsExpanded,
            })}
            onClick={this.handleDetailsExpandClick}
            aria-expanded={this.state.detailsExpanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.detailsExpanded} timeout="auto" unmountOnExit>
          <CardContent>
          
         
           {contractDetails}
          </CardContent>
        </Collapse>
        <Divider/>
        <CardActions className={classes.actions} disableActionSpacing>
        <Typography>
            Market Depth
          </Typography>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.ordersExpanded,
            })}
            onClick={this.handleOrdersExpandClick}
            aria-expanded={this.state.ordersExpanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>  
          <Collapse in={this.state.ordersExpanded} timeout="auto" unmountOnExit>
          <CardContent>
           
          
           <div style={{display:"flex", flexDirection:"Row", justifyContent: "Stretch", alignItems:"center", color:"#aeaeae"}}>
                <div className={classes.marketDepthHeader} style={{flex:"1"}}>NAME</div>
                <div className={classes.marketDepthHeader} style={{flex:"1"}}>PRICE</div>
                <div className={classes.marketDepthHeader} style={{flex:"1"}}>VOLUME</div>
                <div className={classes.marketDepthHeader} style={{flex:"1"}}>TRADE</div>
                <div className={classes.marketDepthHeader}  >CHAT</div>

             </div>
             <Divider/>
           {this.props.order.counters.map(counter=>(
             <div style={{display:"flex", flexDirection:"Row", justifyContent: "Stretch", alignItems:"center", color:"#aeaeae"}}>
                <div style={{flex:"1"}}>{counter.name}</div>
                <div style={{flex:"1"}}>{counter.price}</div>
                <div style={{flex:"1"}}>{counter.volume}</div>
                <div style={{flex:"1"}}><Button><Input/></Button></div>
                <div><Button><ChatBubble/></Button></div>

             </div>
               
              

           ))}
          </CardContent>
        </Collapse>
    
        <Divider/>
    
       
      </Card>
    );
  }
}

BulletinBoardItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BulletinBoardItem);