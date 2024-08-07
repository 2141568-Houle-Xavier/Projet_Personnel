import TableService from '@src/services/TableService';

import { IReq, IRes } from './types/express/misc';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import ITable from '@src/models/ITable';

/**
 * Cherche les entrée d'une table
 * @param req les paramètres de la requêtes
 * @param res Réponse retourner par l'API
 * @returns La réponse contenant les entrées d'une table
 */
async function getAll(req: IReq, res: IRes) {
    const nom_database = req.params.nom;
    
    const tables: ITable[] = await TableService.getAll(nom_database);

    return res.status(HttpStatusCodes.OK).json({tables});
}

export default {
    getAll,
}