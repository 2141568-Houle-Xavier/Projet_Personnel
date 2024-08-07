import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import TerminalIcon from '@mui/icons-material/Terminal';

import { useLocation } from "react-router-dom";
import ParentConditionnelle from "./parent.conditionnelle";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
    justifyContent: 'center',
}));

interface Props {
    drawerWidth: number
}

/**
 * Un composant qui affiche la barre de navigation à gauche
 * @param props Les paramètres du composant
 * @returns Le composant
 */
export default function LeftDrawer(props: Props) {
    return (
        <Drawer
            sx={{
                width: props.drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: props.drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <DrawerHeader>
                <Typography variant="h6" fontWeight="bold">
                    NAVIGATION
                </Typography>
            </DrawerHeader>
            <Divider/>
            <List>
                <ListItem>
                        <ParentConditionnelle condition={useLocation().pathname != "/console"}>
                            <ListItemButton href="/">
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Accueil" />
                            </ListItemButton>
                        </ParentConditionnelle>
                    </ListItem>

                    <ListItem>
                        <ParentConditionnelle condition={useLocation().pathname == "/console"}>
                            <ListItemButton href="/console">
                                <ListItemIcon>
                                    <TerminalIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Console" />
                            </ListItemButton>
                        </ParentConditionnelle>
                    </ListItem>
            </List>


        </Drawer>
    )
}