const { Router } = require("express");
const genresRouter = Router();
const { createGenresHandlers } = require("../handlers/genresHandlers");

genresRouter.get("/", async (req, res) => {
    res.send("LOP!! Obtener todos los tipos de géneros de videojuegos posibles")
});


genresRouter.post("/", createGenresHandlers);


module.exports = genresRouter;
