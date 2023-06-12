import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({ drowerWidth = 240 }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drowerWidth}px)` },
                ml: { sm: `${drowerWidth}px` },
                // 100% - 240px},
            }}
        >

            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="menu"
                    edge="start"
                    sx={{ mr: 2, display: { sm: "none", } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Typography noWrap component="div" variant="h6">Journal App</Typography>

                    <IconButton color="error">
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}
