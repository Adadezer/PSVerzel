import { Grid } from "@mui/material";
import InputStringGeneric from "../components/InputStringGeneric";
import ButtonCreate from "../components/ButtonCreate";
import InputImage from "../components/InputImage";

function Home() {
  return (
    <>
      <div>Home</div>
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

export default Home;