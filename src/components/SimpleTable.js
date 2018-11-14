import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    
    marginTop: theme.spacing.unit,
    overflowX: 'auto',
    padding:'none',
    boxShadow:'none'
  },
  table: {
    tableLayout:'auto'
  },
  header:{
    backgroundColor: '#303c4e',
    color:'#8190a5',
    width:5,
    borderBottomColor:"#404c5e",
    textAlign:"center"
  },
  rows:{
    backgroundColor: '#273142',
    color:'#8190a5',
    
  },
  cellWhite:{
    color:'white',
    fontSize: 20,
    fontWeight:"bold",
    width:5,
    padding:0,
    margin:0
  },
  cellVolume:{
    color:"#94a5ae",
    fontSize: 16,
    
    padding:0,
    margin:0
  },
  cellWgt:{
    color:"#5e6c80",
    fontSize: 14,
    width:5,
    padding:0,
    margin:0
  }

});

let id = 0;
function createData(sym, wgt, reg1, vol1, price1,price2,vol2,reg2) {
  id += 1;
  return { sym, wgt, reg1, vol1, price1,price2,vol2,reg2} ;
}

const rows = [
  createData('+', '1-2', 2, 50, '6.50','6.75',25,1),
  createData('+', '2-3', 3, 90, '6.70','6.80',50,2),
  createData('+', '3-4', 1, 25, '7.00','7.15',25,2),
  createData('+', '4-5', 3, 35, '7.00','7.20',40,1),
  createData('+', '5-6', 2, 70, '7.10','7.25',100,3),
  createData('+', '6-7', 1, 105, '7.15','7.40',70,2),
  createData('+', '7-8', 1,90, '7.20','7.40',80,3),
  createData('+', '8-9', 1, 50, '7.20','7.30',60,1),
  createData('+', '9+', 3, 85, '7.20','7.35',45,1),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.header}>
          <TableRow className={classes.header}>
          <TableCell className={classes.header}></TableCell>
            <TableCell className={classes.header}>WEIGHT (KG)</TableCell>
            <TableCell className={classes.header}>REG</TableCell>
            <TableCell className={classes.header} >VOL</TableCell>
            <TableCell className={classes.header} >BID</TableCell>
            <TableCell className={classes.header} >OFFER</TableCell>
            <TableCell className={classes.header} >VOL</TableCell>
            <TableCell className={classes.header} >.REG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.rows} key={row.id}>
              
                <TableCell  className={classes.cellWhite} numeric>{row.sym}</TableCell>
                <TableCell className={classes.cellWgt}  numeric>{row.wgt}</TableCell>
                <TableCell className={classes.cellVolume} numeric>{row.reg1}</TableCell>
                <TableCell className={classes.cellVolume} numeric>{row.vol1}</TableCell>
                <TableCell className={classes.cellWhite} numeric>{row.price1}</TableCell>
                <TableCell className={classes.cellWhite} numeric>{row.price2}</TableCell>
                <TableCell className={classes.cellVolume} numeric>{row.vol2}</TableCell>
                <TableCell className={classes.cellWgt} numeric>{row.reg2}</TableCell>
               
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);