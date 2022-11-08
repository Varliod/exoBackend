const {PORT, NODE_ENV} = process.env;

const express = require('express');

const chalk = require('chalk');
const route = require('./routers/index');


const app = express();

app.use(router)


app.listen(PORT, () => {
    console.log(chalk.magenta(`Server up on port ${PORT} in mode ${NODE_ENV}`));
})