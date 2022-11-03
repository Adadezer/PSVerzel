import { Grid } from "@mui/material";
import InputStringGeneric from "../components/InputStringGeneric";

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
          md={6}
        />

        <InputStringGeneric
          label={'name'}
          helperText={'digite o nome do veículo'}
          xs={12}
          md={6}
        />

        <InputStringGeneric
          label={'modelo'}
          helperText={'digite o modelo do veículo'}
          xs={12}
          md={6}
        />

        <InputStringGeneric
          label={'imagem'}
          helperText={'coloque o caminho da imagem'}
          xs={12}
          md={6}
        />
      </Grid>
    </>
  );
}

export default Home;