import React from "react";
import ReactTable from 'react-table'
import "../css/market-table.css";


const columns =[
  { Header:"", accessor:"expander",flex:"none"},
  { Header:"WGT(KG)", accessor:"weight",flex:"auto"},
  { Header:"REG.", accessor:"reg1",flex:"auto"},
  { Header:"VOL", accessor:"volume1",flex:"auto"},
  { Header:"BID", accessor:"bid",flex:"auto"},
  { Header:"OFFER", accessor:"offer",flex:"auto"},
  { Header:"VOL", accessor:"volume2",flex:"auto"},
  { Header:"REG.", accessor:"reg2",flex:"auto"}
]

const data = [
  { expander:"+", weight:"1-2",reg1:"1",volume1:"10", bid:"5.55",offer:"5.85",volume2:"25",reg2:"1"},
  { expander:"+", weight:"2-3",reg1:"1",volume1:"10", bid:"5.55",offer:"5.85",volume2:"25",reg2:"1"},
  { expander:"+", weight:"3-4",reg1:"1",volume1:"10", bid:"5.55",offer:"5.85",volume2:"25",reg2:"1"},
  { expander:"+", weight:"4-5",reg1:"1",volume1:"10", bid:"5.55",offer:"5.85",volume2:"25",reg2:"1"},
  { expander:"+", weight:"5-6",reg1:"1",volume1:"10", bid:"5.55",offer:"5.85",volume2:"25",reg2:"1"},
  { expander:"+", weight:"6-7",reg1:"1",volume1:"10", bid:"5.55",offer:"5.85",volume2:"25",reg2:"1"},
  { expander:"+", weight:"7-8",reg1:"1",volume1:"10", bid:"5.55",offer:"5.85",volume2:"25",reg2:"1"},
  { expander:"+", weight:"8-9",reg1:"1",volume1:"10", bid:"5.55",offer:"5.85",volume2:"25",reg2:"1"},
  { expander:"+", weight:"9+",reg1:"1",volume1:"10", bid:"5.55",offer:"5.85",volume2:"25",reg2:"1"},
 
]




const MarketTable= () => {
  return (
   <ReactTable
   data={data}
   columns={columns}
   showPagination = {false}
 defaultPageSize={data.length}
          className=" -highlight">
          

   </ReactTable>
  );
};

export default MarketTable;
