require('dotenv').config();
const app = require('./srs/app.js');

const port = process.env.PORT;
app.listen(port, () => console.log('server is run'));