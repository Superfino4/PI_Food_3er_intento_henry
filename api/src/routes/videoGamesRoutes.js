const { Router } = require("express");

const videoGamesRoutes = Router();

videoGamesRoutes.get("/", async (req, res) => {
    res.send("LOP!! Obtiene un listado de los videojuegos")
});

videoGamesRoutes.get("/:id", async (req, res) => {
    res.send("LOP!! Obtiene el detalle de un videojuego en particular")
});

videoGamesRoutes.post("/", async (req, res) => {
    res.send("LOP!! Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body")
});

module.exports = videoGamesRoutes;