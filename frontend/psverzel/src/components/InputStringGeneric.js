import { useContext } from 'react'
import { Grid, TextField } from '@mui/material'
import PsVerzelContext from '../context/PsVerzelContext';

export default function InputStringGeneric(props) {
  const {valueInput, setValueInput } = useContext(PsVerzelContext);

  const handleChange = ({ value }) => {
    setValueInput({
      ...valueInput,
      [props.label]: value
    });
  };

  return (
    <Grid item {...props} >
      <TextField
        fullWidth
        value={valueInput[props.label]}
        onChange={(e) => handleChange(e.target)}
        helperText={props.helperText}
        label= {props.label}
        variant="outlined"
      />
    </Grid>
  );
}