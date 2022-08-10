const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
app.use(bodyParser.json())

const db = require('./app/config/db.config.js');

require('./app/route/shareholder.route.js')(app);
require('./app/route/share.route.js')(app);
require('./app/route/portfolio.route.js')(app);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
