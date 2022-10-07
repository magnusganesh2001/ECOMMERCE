const express = require("express");
const serverConfig = require("./configs/server.config");
const app = express();
app.listen(serverConfig.PORT, () => {
    console.log(`started application in the port: ${serverConfig.PORT}`)
}) 