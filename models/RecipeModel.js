import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Recipe = db.define('recipe', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    bahan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    steps: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    deskripsi: {
        type: DataTypes.STRING,
        allowNull: true,
    },image:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: false
        }
    }

}, {
    freezeTableName: true
});

Users.hasMany(Recipe);
Recipe.belongsTo(Users, {foreignKey: 'userId'})

export default Recipe;

// (async()=>{
//     await db.sync();
// })();