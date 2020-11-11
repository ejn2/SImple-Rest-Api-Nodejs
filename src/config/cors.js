const cors = require('cors');

module.exports = (router) => {

    router.use(cors());

    router.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Method", "GET,POST,PUT,DELETE");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/json");
        next();
    });


}