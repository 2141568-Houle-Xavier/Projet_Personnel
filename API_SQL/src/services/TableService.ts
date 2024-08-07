import ITable from "@src/models/ITable";
import TableRepos from "@src/repos/TableRepos";

/**
 * Retourne la liste des tables d'une base de données
 * @param nom_database Le nom de la base de données
 * @returns La liste des tables d'une base de données
 */
function getAll(nom_database: string) : Promise<ITable[]> {
    return TableRepos.getAll(nom_database);
}

export default {
    getAll,
}