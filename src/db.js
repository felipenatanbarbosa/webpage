//database

import React from "react";
const Sequelize = require('sequelize')

const colunas = {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
}