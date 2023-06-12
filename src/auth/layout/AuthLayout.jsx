import { Grid, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
export const AuthLayout = ({children, title = ''}) => {
  return (
    <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
    sx={{backgroundColor: 'primary.main', padding: 4}}
    >
  
      <Grid
      className="box-shadow"
      item xs={12} 
      md={6} 
      sx={{width: {md:450},backgroundColor: 'white', padding: 3, borderRadius: 2}}>
        <Typography variant="h5" sx={{mb:1}}> 
          {title}
        </Typography>

        {children}


        </Grid>
        </Grid>
  )
}
