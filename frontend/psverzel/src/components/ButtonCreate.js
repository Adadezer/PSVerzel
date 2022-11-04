import { Button, Grid } from '@mui/material'
import axios from 'axios'
import { useContext } from 'react';
import PsVerzelContext from '../context/PsVerzelContext';

export default function ButtonCreate(props) {
  const {valueInput} = useContext(PsVerzelContext);
  const postVehicle = async (request) => {
    try {
      const result = await axios.post('http://localhost:3001/vehicles', {...request});
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Grid item {...props}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => postVehicle(valueInput)}
      >
        {props.text}
      </Button>
    </Grid>
  )
}