const express = require("express");
const app = express();


require("./startup/routes")(app);
require("./startup/config")();

const port = 5000;
app.listen(port, () => console.log(`listening to port ${port}...`));
