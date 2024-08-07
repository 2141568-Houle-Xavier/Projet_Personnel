import IDatabase from "@src/models/IDatabase";
import connnection_database from "@src/util/mysql";

/**
 * Retourne une liste de base de données
 * @returns Une liste de base de données
 */
async function getAll() : Promise<IDatabase[]> {
    const bd = connnection_database();
    const query = `
        SELECT 
            s.schema_name AS nom_bd,
            COUNT(t.table_name) AS nombre_table
        FROM 
            information_schema.schemata s
        LEFT JOIN 
            information_schema.tables t
        ON 
            s.schema_name = t.table_schema
        WHERE 
            s.schema_name NOT IN ('mysql', 'information_schema', 'performance_schema', 'sys')
        GROUP BY 
            s.schema_name
        ORDER BY 
            s.schema_name;
    `;

    return new Promise((resolve, reject) => {
        bd.query(query, function(error, result) {
            if (error) 
                reject(error);
            else 
                resolve(result as IDatabase[])
        })
    })
}

export default {
    getAll
}

