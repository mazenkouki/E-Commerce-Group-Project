import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_db', 'root', 'fcmazzeloff<3', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;