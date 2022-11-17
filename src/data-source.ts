import 'reflect-metadata'
import { DataSource } from "typeorm";
import { User } from './models/User';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "login",
    synchronize: true,
    logging: true,
    entities: [
        //User
        `${__dirname}/**/models/*.{ts,js}`
    ],
    subscribers: [],
    migrations: [
        `${__dirname}/**/migrations/*.{ts,js}`
    ],
})