import ConsoleRepos from "@src/repos/ConsoleRepos";

/**
 * Service qui retourne la réponse d'une requête SQL
 * @param requete La requête SQL
 * @returns La réponse de la requête
 */
function executerRequete(requete: string) {
    return ConsoleRepos.executerRequete(requete);
}

export default {
    executerRequete,
}