const { Router } = require("express");
const genresRouter = Router();

genresRouter.get("/", async (req, res) => {
    res.send("LOP!! Obtener todos los tipos de géneros de videojuegos posibles")
});

module.exports = genresRouter;
