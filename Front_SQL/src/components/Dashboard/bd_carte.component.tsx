import { Box, Card, CardActionArea, CardContent, CardHeader, Typography } from "@mui/material";
import StorageIcon from '@mui/icons-material/Storage';
import IDatabase from "../../model/IDatabase";

/**
 * Un composant qui affiche le nom de la base de données
 * @param nom_bd Le nom de la bd
 * @param nombre_table Le nombre de table
 * @returns Le composant qui affiche le nom de la base de données
 */
export default function BD_carte({nom_bd, nombre_table}: IDatabase) {
    return (
        <Card
            sx={{
                overflow: "visible",
                width: "15em",

            }}
        >
            <CardActionArea href={`/${nom_bd}`}>
                <Box
                    sx={{
                        display: "flex",
                        
                        justifyContent: "center",
                        alignItems: "center",

                        width: 60,
                        height: 60,
                        borderRadius: 1,
                        bgcolor: '#309fff',

                        position: "relative",
                        top: "-0.5em",
                        left: "-0.5em",
                        zIndex: 2,

                        boxShadow: "2px 2px 2px 0px #309fff"
                    
                    }}
                >
                    <StorageIcon fontSize="large" sx={{color: "#ffffff"}}/>
                </Box>
                
                <CardHeader
                    title={nom_bd}
                    sx={{
                        top: 0,
                        right: 0,
                        zIndex: 1,
                        paddingRight: "1em"
                    }}
                />
                
                <CardContent>
                    <Typography>Nombres de tables : {nombre_table}</Typography>
                </CardContent>

            </CardActionArea>
        </Card>
    )
}