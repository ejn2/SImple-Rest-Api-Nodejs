module.exports = (router) => {

    router.use((req, res, next) => {
        const error = new Error("not found");
        error.status = 404;
        next(error);
    });


    router.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({ error: err.message });
    });


}