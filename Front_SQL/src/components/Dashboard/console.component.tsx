import { Button, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";
import api_client, { IRequeteReponse } from "../../api/api_client";

/**
 * Un intérpreteur SQL qui retourne le résultat d'une requête SQL
 */
export default function Console() {   
    const api = new api_client(); 
    const [tableauAffichage, setTableauAffichage] = useState<string[]>([]);
    const [requete, setRequete] = useState<string>("");

    /**
     * Fonction qui s'occuppe d'envoyer une requète SQL à l'API
     */
    const envoyerRequete = async () => {
        const body = {
            "requete" : {
                "instance" : requete
            }
        }
        api.post<IRequeteReponse>("/console/executer", body)
        .then((resultat) => {
            afficherReponseAPI(resultat.reponse)
        })
        .catch((erreur) => {
            console.log(erreur)
        }) 
    }

    /**
     * S'occupe de changer la valeur de la variable requete lorsque le texte field change
     */
    const changementRequete = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequete(event.target.value);
    }

    /**
     * S'occupe d'afficher la réponse de l'API
     * @param reponseAPI La réponse de l'API
     */
    const afficherReponseAPI = (reponseAPI: any) => {
        setTableauAffichage([...tableauAffichage, JSON.stringify(reponseAPI, null, 2)])
    }

    const effacerAffichage = () => {
        setTableauAffichage([]);
    }
    

    return( 
        <div style={{   display: "flex", 
                        flexDirection: "column", 
                        alignItems: "flex-start", 
                        position: "absolute", 
                        left: 270, 
                        top: 90,
                        width: "80%",
                    }}>
            <Typography variant="h5" fontWeight="bold">
                Intérpreteur de requête SQL
            </Typography>

            <br/>

            <FormControl fullWidth error>
                <TextField id="outlined-basic" label="Entrée la requête ici" variant="outlined" fullWidth multiline onChange={changementRequete} />
                
                <Button variant="contained" sx={{width: "15%", marginTop: 1, alignSelf: "flex-end"}} onClick={envoyerRequete}>Enregistrer</Button>
            </FormControl>

            <br/>
            {tableauAffichage.map((variable, index) => {
                return (
                    <div key={index}>
                        <Typography 
                            variant="body2" 
                            sx={{
                                width: "100%", 
                                wordBreak: "break-word", 
                                whiteSpace: "pre-wrap",
                                overflowY: "auto"}} 
                            align="left"
                        >
                            {variable}
                        </Typography>
                        <br/>
                    </div>  
                )

            })}
                    
            <Button 
                variant="contained" 
                color="error" 
                sx={{position: "fixed", right: 10, bottom: 10}}
                onClick={effacerAffichage}
            >
                Effacer
            </Button>
        </div>
    )
}