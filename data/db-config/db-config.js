const knex = require("knex");

const config = require("/Users/fady/Lambda/Node/node-project4/knexfile.js");

const db = knex(config.development);

module.exports = db;