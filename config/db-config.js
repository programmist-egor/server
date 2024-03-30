import dotenv from "dotenv";
dotenv.config()

export const configExtranetDB = {
    DB: process.env.EXTRANETDB,
    USER: process.env.USEREXTRANET,
    PASSWORD: "Pasaremos999*",
    HOST: "flumutogi.beget.app",
    DB_PORT: process.env.DB_PORT,
    pool: {
        max: 10,
        min: 0,
        acquire: 90000,
        idle: 50000
    }
}

