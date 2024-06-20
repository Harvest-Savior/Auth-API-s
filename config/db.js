import {Sequelize} from "sequelize"
import dotenv from "dotenv"
dotenv.config()

// Replace username and password with your actual credentials
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const db_name = process.env.DB_NAME
const host = process.env.DB_HOST

const db = new Sequelize(db_name, username, password, {
    host: host, // Replace with your actual instance connection name
    dialect: 'mysql',
});

export default db