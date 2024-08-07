import connnection_database from "@src/util/mysql";

/**
 * Cherche les entrées d'une table spécifique
 * @param nom_database Le nom de la base de données
 * @param nom_table Le nom de la table
 * @returns Les entrées d'une table
 */
async function getAll(nom_database: string, nom_table: string)   {
    const bd = connnection_database();
    const query = `SELECT * FROM ${nom_database}.${nom_table}`;

    return new Promise((resolve, reject) => {
        bd.query(query, function(error, result) {
            if (error) 
                reject(error);
            else 
                resolve(result)
        })
    })
}

export default {
    getAll
}


