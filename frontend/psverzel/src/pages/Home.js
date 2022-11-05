import { Grid } from "@mui/material";
import InputStringGeneric from "../components/InputStringGeneric";
import ButtonCreate from "../components/ButtonCreate";
import InputImage from "../components/InputImage";
import axios from 'axios';
import { useEffect, useState } from "react";
import CardVehicle from "../components/CardVehicle";

export default function Home() {
  const [vehicles, setVehicles] = useState([]);
  const getVehicles = async () => {
    try {
      const result = await axios.get('http://localhost:3001/vehicles');
      setVehicles(result.data);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  };
  console.log('vehicles: ', vehicles);

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <>
      <div>
        {
          vehicles.map((element, index) => (
            <CardVehicle vehicle={ element } key={`${element}-${index}`} />
          ))
        }
      </div>
      <Grid
        container
        component="form"
        spacing={1}
        p={1}
        noValidate
        autoComplete="off"
        sx={{ overflow: 'auto', maxHeight: '86vh' }}
      >
        <InputStringGeneric
          label={'brand'}
          helperText={'digite a marca do veículo'}
          xs={12}
          md={4}
        />

        <InputStringGeneric
          label={'name'}
          helperText={'digite o nome do veículo'}
          xs={12}
          md={4}
        />

        <InputStringGeneric
          label={'carModel'}
          helperText={'digite o modelo do veículo'}
          xs={12}
          md={4}
        />

        <InputImage
          text={'Carregar Foto'}
          xs={12}
          md={12}
        />

        <ButtonCreate
          text={'Enviar'}
          xs={12}
          md={12}
        />
      </Grid>
    </>
  );
}