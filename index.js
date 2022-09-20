const express = require('express');
const path = require('path');
const sequelize = require('./database/database')
const appRoutes = require('./routes/index.route')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', appRoutes);

// app.use(express.static(path.join(__dirname, '/public')));
//
//
// app.use((req, res, next) => {
//     res.sendFile('/index.html');
// })


async function start() {
    try {
        await sequelize.sync();
        app.listen(PORT);
    } catch (error) {
        console.log(error);
    }
}
start()
