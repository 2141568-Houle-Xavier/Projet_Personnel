import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import LeftDrawer from "./left.drawer.component";

const drawerWidth = 240;

/**
 * Fonction qui affiche la barre du haut
 * @returns La barre du haut
 */
export default function Topbar() {
   return (
    <Box>
        <AppBar
            position="fixed"
            sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
        >
            <CssBaseline/>
            <Toolbar sx={{textAlign: "left"}}>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Tableau de bord
                </Typography>

            </Toolbar>
        </AppBar>
        <LeftDrawer drawerWidth={drawerWidth} />
        <Outlet />
    </Box>
   )
   
}