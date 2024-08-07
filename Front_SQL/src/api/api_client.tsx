import axios, { Axios, AxiosResponse } from "axios";
import IDatabase from "../model/IDatabase";
import ITable from "../model/ITable";
import IRangee from "../model/IRangee";

const baseURL = "http://localhost:3000/"

/**
 * Classe qui s'occupe de créer une requête vers une API
 */
class api_client {

    api: Axios;
    
    /**
     * Commence une requête envers l'API et créer son header 
     */
    constructor() {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };  

        this.api = axios.create({
            baseURL,
            headers
        })
    }

    /**
     * Fonction qui vérifie si la réponse de l'API retourne une erreur
     * @param reponse 
     * @returns 
     */
    private handleResponse<T>(reponse: AxiosResponse<T>) : T {
        if (reponse.status >= 400) {
            throw new Error("Code d'erreur: " + reponse.status.toString() || 'Une erreur critique est survenue');
        }

        return reponse.data;
    }

    /**
     * Envoye une requête à l'API et retourne la réponse
     * @param endpoint La fin de la route après l'URL de base
     * @returns La réponse de l'API
     */
    async get<T>(endpoint: string) : Promise<T> {
        const reponse = await this.api.get<T>(endpoint);

        return this.handleResponse(reponse);
    }

    /**
     * Envoye une requête à l'API et retourne la réponse
     * @param endpoint La fin de la route après l'URL de base
     * @param body Le corps de la requête envoyer vers l'API
     * @returns La réponse de l'API
     */
    async post<T>(endpoint: string, body: any) : Promise<T> {
        const reponse = await this.api.post<T>(endpoint, body);

        return this.handleResponse(reponse);
    }
}

export default api_client;


// Interface Réponse //

export interface IDatabaseReponse {
    database: IDatabase[],
    prototype: any
}

export interface ITableReponse {
    tables: ITable[],
    prototype: any
}

export interface IRangeeReponse {
    rangee: IRangee[],
    prototype: any,
}

export interface IRequeteReponse {
    reponse: any,
    prototype: any,
}