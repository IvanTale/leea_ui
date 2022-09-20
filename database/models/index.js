const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../database');
// console.log('sequelize', sequelize);
// const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line
// const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

// let sequelize;
// if (config.use_env_variable) {
//     sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//     sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// const DB_NAME = 'leea';
// const USER = 'root';
// const PASSWORD = ''
//
// const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {
//     host: 'localhost',
//     dialect: 'mysql'
// });


const files = [];
const sortDir = (maniDir) => {
    const folders = [];
    const CheckFile = (filePath) => (fs.statSync(filePath).isFile());
    const sortPath = (dir) => {
        fs.readdirSync(dir)
            .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
            .forEach((res) => {
                const filePath = path.join(dir, res);
                if (CheckFile(filePath)) {
                    files.push(filePath);
                } else {
                    folders.push(filePath);
                }
            });
    };
    folders.push(maniDir);
    let i = 0;
    do {
        sortPath(folders[i]);
        i += 1;
    } while (i < folders.length);
};
sortDir(__dirname);

// Read files in folders
files.forEach((file) => {
    console.log('file', file);
    // const model = sequelize.import(file);
    const model = require(file)(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
