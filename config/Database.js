import { Sequelize } from "sequelize";

const db = new Sequelize('resepsharing_db', 'root', 'R4has1a99!',{
    host: "localhost",
    dialect: "mysql"
});

export default db;