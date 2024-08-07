import { Paper, TableContainer, Typography, Table, TableHead, TableRow, TableCell, TableBody, Alert } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import api_client, { IRangeeReponse } from "../../api/api_client";
import { useEffect, useState } from "react";
import IRangee from "../../model/IRangee";

export default function Entree() {
    const [rangees, setRangees] = useState<IRangee[]>([]);
    const [avertissement, setAvertissement] = useState<boolean>(false);
    const params = useParams();
    const api = new api_client();

    /**
     * S'occupe d'aller chercher des entrées de données dans une table
     */
    const getAllRangee = async () => {api.get<IRangeeReponse>("rangee/all/" + params.nom_bd + "/" + params.nom_table)
        .then((result) => {
            setRangees(result.rangee);

            if (result.rangee && result.rangee.length === 0) {
                setAvertissement(true);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    /**
     * Charge les entrées de données lorsque la page s'affiche
     */
    useEffect(() => {
        getAllRangee();
    }, [])

    return(
        <div style={{marginLeft: 240, marginTop: 70}}>
            <Link to={"/" + params.nom_bd} style={{
                left: 260,
                top: 80,
                position: "absolute"
            }}>
                &lt; REVENIR
            </Link>

            <Typography variant="h5" fontWeight="bold">
                {params.nom_table?.toUpperCase()}
            </Typography>
        
            <br/>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 800}} aria-label="Entrée de données">
                    <TableHead>
                        <TableRow>
                            {
                                rangees.length !== 0 &&
                                Object.keys(rangees[0]).map((key, index) => (
                                    <TableCell key={index}>{key}</TableCell>
                                ))  
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rangees.map((rangee)=> (
                                <TableRow>
                                    {Object.values(rangee).map((value, index) => (
                                        <TableCell key={index}>{value}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>


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
                    Aucune entrée de données trouvées.
            </Alert>
}
        </div>
    )
}