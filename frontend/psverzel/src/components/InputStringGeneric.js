import { useState } from 'react'
import { Grid, TextField } from '@mui/material'

export default function InputStringGeneric(props) {
  const [ valueInput, setValueInput ] = useState('');

  const handleChange = ({ value }) => {
    setValueInput(value);
    console.log('valueInput:', value);
  };

  return (
    <Grid item {...props} >
      <TextField
        fullWidth
        value={valueInput}
        onChange={(e) => handleChange(e.target)}
        helperText={props.helperText}
        label= {props.label}
        variant="outlined"
      />
    </Grid>
  );
}