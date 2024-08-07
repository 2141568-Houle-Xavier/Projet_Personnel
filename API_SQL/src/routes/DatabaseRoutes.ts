import DatabaseService from '@src/services/DatabaseService';

import { IReq, IRes } from './types/express/misc';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import IDatabase from '@src/models/IDatabase';

/**
 * Cherche la liste de base de données et retourne la réponse contenant la liste des bases de données
 * @param _ les paramètres de la requêtes
 * @param res Réponse retourner par l'API
 * @returns La réponse contenant la liste des bases de donneés
 */
async function getAll(_:IReq, res: IRes) {
    const database: IDatabase[] = await DatabaseService.getAll();

    return res.status(HttpStatusCodes.OK).json({database});
}

export default {
    getAll,
}