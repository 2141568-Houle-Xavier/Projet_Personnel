import RangeeService from '@src/services/RangeeService';

import { IReq, IRes } from './types/express/misc';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

/**
 * Cherche la liste des tables et retourne la réponse contenant la liste des tables
 * @param req les paramètres de la requêtes
 * @param res Réponse retourner par l'API
 * @returns La réponse contenant la liste des tables
 */
async function getAll(req: IReq, res: IRes) {
    const {nom_bd, nom_table} = req.params;

    const rangee = await RangeeService.getAll(nom_bd, nom_table);

    return res.status(HttpStatusCodes.OK).json({rangee});
}

export default {
    getAll,
}