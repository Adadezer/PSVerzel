import { Grid, TextField } from '@mui/material'
import React from 'react'

function inputStringGeneric(props) {
  return (
    <Grid item {...props} >
      <TextField
        fullWidth
        // required= {props.isRequired}
        // error= {isNameInvalid}
        // value={name}
        // onChange={(e) => validationName(e.target)}
        helperText={props.helperText}
        label= {props.label}
        variant="outlined"
      />
    </Grid>
  )
}

export default inputStringGeneric