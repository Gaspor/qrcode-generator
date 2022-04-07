const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.use(require("./src/routes/route"));

server.listen(PORT, err => {
    if (err) {
        console.log("Error: ", err);
        return
    }

    console.log(`Running server in ${PORT}`);
});
