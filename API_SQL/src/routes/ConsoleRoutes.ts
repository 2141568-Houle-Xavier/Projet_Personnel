import ConsoleService from '@src/services/ConsoleService';

import { IReq, IRes } from './types/express/misc';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import IRequete from '@src/models/IRequete';

/**
 * Éxecute une requête SQL envoyé par l'utilisateur et retourne la réponse
 * @param req Les paramètres de la requête
 * @param res La réponse de la requête
 * @returns Retourne la réponse SQL 
 */
async function executerRequete(req :IReq<{requete: IRequete}>, res: IRes) {
    let { requete } = req.body;

    const reponse = await ConsoleService.executerRequete(requete.instance);

    return res.status(HttpStatusCodes.OK).json({reponse});
}

export default {
    executerRequete,
}