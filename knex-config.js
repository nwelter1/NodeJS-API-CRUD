const Knex = require('knex');


const connect = () => {
    const config = {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST
    }

    const knex = Knex({
        client: 'pg',
        connection: config
    });

    return knex
}

const knex = connect();

module.exports = knex;