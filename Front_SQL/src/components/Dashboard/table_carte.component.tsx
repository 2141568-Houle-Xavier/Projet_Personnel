import { Box, Card, CardActionArea, CardContent, CardHeader, Typography } from "@mui/material";
import BackupTableIcon from '@mui/icons-material/BackupTable';
const couleur: string = "#e030ff";

interface ITableCarteProps {
    nom_bd: string,
    nom_table: string,
    nombre_entree: number,
}

/**
 * Une carte qui affiche le nom de la table et le nombre d'entrée dans la table
 * @param nom_bd Le nom de la base de données
 * @param nom_table Le nom de la table
 * @param nombre_entree Le nombre d'entrée dans la table
 */
export default function Table_carte({nom_bd, nom_table, nombre_entree}: ITableCarteProps) {
    return (
        <Card
            sx={{
                overflow: "visible",
                width: "15em",

            }}
        >
            <CardActionArea href={"/" + nom_bd + "/" + nom_table}>
                <Box
                    sx={{
                        display: "flex",
                        
                        justifyContent: "center",
                        alignItems: "center",

                        width: 60,
                        height: 60,
                        borderRadius: 1,
                        bgcolor: couleur,

                        position: "relative",
                        top: "-0.5em",
                        left: "-0.5em",
                        zIndex: 2,

                        boxShadow: `2px 2px 2px 0px ${couleur}`
                    
                    }}
                >
                    <BackupTableIcon fontSize="large" sx={{color: "#ffffff"}}/>
                </Box>
                
                <CardHeader
                    title={nom_table}
                    sx={{
                        top: 0,
                        right: 0,
                        zIndex: 1,
                        paddingRight: "1em"
                    }}
                />
                
                <CardContent>
                    <Typography>Nombres d'entrées : {nombre_entree}</Typography>
                </CardContent>

            </CardActionArea>
        </Card>
    )
}