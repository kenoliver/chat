import React from 'react'
import PropTypes from 'prop-types'
import {TextField } from '@material-ui/core'
const AddMessage =(props)=>{
   
    return(
        <div id="new-message">
 <TextField
          id="standard-multiline-flexible"
          placeholder ="Type a Message"
          multiline
          rowsMax="4"
         
          style={{ margin: 8 }}
        
          helperText="Inter Dealer Chat"
          fullWidth
          margin="normal"
         
          onKeyPress={(e)=>{
            if (e.key ==='Enter'){
                props.dispatch(e.target.value, 'Me')
                e.target.value =''
            }
        }}
       

         
        />
       
        
        </div>
    )
}

AddMessage.PropTypes ={
    dispatch:PropTypes.func.isRequired
}

export default AddMessage