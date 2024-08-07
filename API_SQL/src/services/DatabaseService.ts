import IDatabase from "@src/models/IDatabase";
import DatabaseRepos from "@src/repos/DatabaseRepos";

/**
 * Retourne une liste de base de données
 * @returns Une liste de base de données
 */
function getAll() : Promise<IDatabase[]> {
    return DatabaseRepos.getAll();
}

export default {
    getAll,
}