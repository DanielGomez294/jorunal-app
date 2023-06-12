import {Link as RouterLink} from 'react-router-dom'

import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
  
    <AuthLayout title='Crear cuenta'>
 <form action="">
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField label="Nombre completo"
             variant="outlined"
             type="text"
             placeholder="Nombre completo" 
             fullWidth sx={{mb:2}}/>
          </Grid>
          <Grid  item xs={12} sx={{mt: 2}}>
            <TextField label="Correo electrónico"
             variant="outlined"
             type="email"
             placeholder="correo@htp.com" 
             fullWidth sx={{mb:2}}/>
          </Grid>
          <Grid  item xs={12} sx={{mt: 2}}>
            <TextField label="contraseña"
             variant="outlined"
             type="password"
             placeholder="Contraseña" 
             fullWidth sx={{mb:2}}/>
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={ 12 }>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>

            
          </Grid>

        <Grid
         container
          direction='row'
          justifyContent='end'
          >
            <Typography sx={{ mr:1 }}>¿Ya tienes una cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to='/auth/login'>
          Inicia sesión
          </Link>
            

        </Grid>
        </Grid>
      </form>
    </AuthLayout>
     
  
  )
}
