import connnection_database from "@src/util/mysql";

/**
 * Éxecute une requête SQL et retourne le résultat
 * @param requete La requête SQL
 * @returns Le résultat de la requête
 */
async function executerRequete(requete: string) {
    const bd = connnection_database();

    return new Promise((resolve) => {
        bd.query(requete, function(error, result) {
            if (error) 
                resolve(error);
            else 
                resolve(result);
        })
    })
}

export default {
    executerRequete
}

