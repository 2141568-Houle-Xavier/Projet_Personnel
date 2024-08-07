import { useEffect, useState } from "react";
import ITable from "../../model/ITable";
import api_client, { ITableReponse } from "../../api/api_client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Table_carte from "./table_carte.component";
import { Alert, Box, Grid } from "@mui/material";

/**
 * S'occupe d'afficher une liste de table sur une page web
 */
export default function Table() {
    const [table, setTable] = useState<ITable[]>();
    const [avertissement, setAvertissement] = useState<boolean>(false);
    const api = new api_client();
    const params = useParams();

    /**
     * S'occupe d'aller chercher le nom des tables d'une base de données
     */
    const getAllTable = async() => {
        api.get<ITableReponse>(`/table/all/${params.nom_bd}`)
        .then((result) => {
            setTable(result.tables)

            if (result.tables && result.tables.length === 0) {
                setAvertissement(true);
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getAllTable();
    }, []);


    return (
        <>
            <Link to={"/"} style={{
                left: 260,
                top: 80,
                position: "absolute"
            }}>
                &lt; REVENIR
            </Link>

            <Box sx={{marginLeft: "25%", marginTop: "5%", width: "80%"}}>
                <Grid container spacing={4}>
                    {table &&
                        table.map((value, index) => {
                            return (
                            <Grid item key={index}>
                                {params.nom_bd &&
                                    <Table_carte nom_bd={params.nom_bd} nom_table={value.nom_table} nombre_entree={value.nombre_entree} />
                                }
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
                        Aucune tables trouvées.
                </Alert>
}
            </Box>
        </>
    );

}