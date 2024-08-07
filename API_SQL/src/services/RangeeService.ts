import RangeeRepos from "@src/repos/RangeeRepos";

/**
 * Retourne les entrées d'une table
 * @param nom_database Le nom de la base de données
 * @param nom_table Le nom de la table
 * @returns Les entrées d'une table
 */
function getAll(nom_database: string, nom_table: string) {
    return RangeeRepos.getAll(nom_database, nom_table);
}

export default {
    getAll,
}