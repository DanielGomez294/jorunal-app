import {Link as RouterLink} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useForm } from '../../hooks'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { checkingAuthentication, startgoogleSignIn } from '../../store/auth'

export const LoginPage = () => {

  const dispatch = useDispatch()

  const {email, password, onInputChange} = useForm({
    email: 'daniel@google.com',
    password: '123456'
  })

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(checkingAuthentication())

  }


  const onGoogleSignIn = () => {
    dispatch(startgoogleSignIn())

  }


  return (
  
    <AuthLayout title='Login!!!'>
 <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField label="Email"
             variant="outlined"
             type="email"
             placeholder="correo@htp.com" 
             name="email"
             value={email}
             onChange={onInputChange}
             fullWidth sx={{mb:2}}/>
          </Grid>

          <Grid  item xs={12} sx={{mt: 2}}>
            <TextField label="contraseña"
             variant="outlined"
             type="password"
             placeholder="correo@htp.com" 
             name="password"
             value={password}
             onChange={onInputChange}
             fullWidth sx={{mb:2}}/>
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={ 12 } sm={6}>
              <Button type='submit' variant="contained" fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={6}>
              <Button 
              variant="contained"
               fullWidth
               onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml:1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

        <Grid
         container
          direction='row'
          justifyContent='end'
          >
          <Link component={RouterLink} color="inherit" to='/auth/register'>
          Crear una cuenta
          </Link>
            

        </Grid>
        </Grid>
      </form>
    </AuthLayout>
     
  
  )
}
