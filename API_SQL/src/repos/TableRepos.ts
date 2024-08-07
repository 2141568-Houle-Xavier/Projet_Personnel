import connnection_database from "@src/util/mysql";
import ITable from "@src/models/ITable";
import { MysqlError } from "mysql";
import { table } from "console";

interface INombreEntree {
    nombre_entree: number;
}

interface INomTable {
    nom_table: string
}

/**
 * Calcule le nombre d'entrée d'une table
 * @param nom_database Le nom de la base de données
 * @param table Le nom de la table
 * @returns Le nombre d'entrée dans la table
 */
async function CalculerNombreEntree(nom_database: string, table: INomTable) : Promise<INombreEntree> {
    const bd = connnection_database();
    const query = `SELECT COUNT(*) AS nombre_entree FROM ${nom_database}.${table.nom_table}`

    return new Promise((resolve, rejects) => {
        bd.query(query, function(error: MysqlError, result: INombreEntree[]){
            if (error) {
                return rejects (error);
            }
            else {
                resolve(result[0]);
            }
        })
    })
}

/**
 * Retourne une liste des tables d'une base de données
 * @param nom_database Le nom de la base de données
 * @returns Une liste de table
 */
async function getAll(nom_database: string) : Promise<ITable[]> {
    const bd = connnection_database();
    const query = `SELECT TABLE_NAME AS nom_table FROM information_schema.TABLES
                    WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_SCHEMA='${nom_database}'`;

    return new Promise((resolve, reject) => {
        bd.query(query, async function(error: MysqlError, result: INomTable[]) {
            if (error) 
                return reject(error);

            try {
                const tableWithCounts: ITable[] = await Promise.all(
                    result.map(async (table: INomTable) => {
                        const countResult: INombreEntree = await CalculerNombreEntree(nom_database, table);

                        return {nom_table: table.nom_table, nombre_entree: countResult.nombre_entree} 
                    })
                )

                resolve(tableWithCounts);
            }
            catch(error) {
                reject(error);
            }
        })
    })
}

export default {
    getAll
}

