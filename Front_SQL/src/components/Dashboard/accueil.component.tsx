import { useEffect, useState } from "react";
import api_client, { IDatabaseReponse } from "../../api/api_client";
import IDatabase from "../../model/IDatabase";
import BD_carte from "./bd_carte.component";
import { Alert, Box, Grid } from "@mui/material";

/**
 * La page d'accueil
 * @returns Le composant de la page d'accueil
 */
export default function Accueil() {
    const [databases, setDatabases] = useState<IDatabase[] | null>();
    const api = new api_client();
    const [avertissement, setAvertissement] = useState<boolean>(false);

    /**
     * Fonction qui cherche une liste de base de données retourner par l'API
     */
    const getAllDatabases = async () => {api.get<IDatabaseReponse>("database/all")
        .then((result) => {
            setDatabases(result.database);

            if (result.database && result.database.length === 0) {
                setAvertissement(true);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    /**
     * Appel l'API au lorsque la page s'affiche
     */
    useEffect(() => {
        getAllDatabases();
    }, [])

    return (
        <Box sx={{marginLeft: "25%", marginTop: "5%", width: "80%"}}>
            <Grid container spacing={4}>

            {databases && 
                databases.map((value, index) => {
                    return (
                        <Grid item key={index}>
                            <BD_carte nom_bd={value.nom_bd} nombre_table={value.nombre_table} />
                        </Grid>
                    )
                })}
            </Grid>
            {avertissement &&

            <Alert 
                severity="warning" 
                variant="filled"
                onClose={() => {setAvertissement(false)}}
                sx={{
                    position: "fixed", 
                    left: 260, 
                    bottom: 10,
                }}
            >
                    Aucune base de données trouvées.
            </Alert>
            }
        </Box>
    );
    
}