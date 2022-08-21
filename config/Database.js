import { Sequelize } from "sequelize";

const db = new Sequelize('resepsharing_db', 'root', 'R4has1a99!',{
    host: "127.0.0.1",
    dialect: "mysql"
});

export default db;