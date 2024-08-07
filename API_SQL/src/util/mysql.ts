import mysql from "mysql2";

const connection_data = {
    host : "localhost",
    user : "root",
    password : "mysql"
}

var connection : mysql.Connection | null = null;

/**
 * Fonction qui se connecte à MySQL et retourne la connection
 * @error Si la connection ne se fait pas correctement une erreur est lancée 
 * @returns La connection à MySQL
 */
export default function connnection_database () : mysql.Connection {
    if (connection) {
        return connection;
    }

    connection = mysql.createConnection(connection_data);

    connection.connect((error) => {
        if (error) throw error;
    })

    return connection;
}
