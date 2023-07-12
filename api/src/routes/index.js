// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require('express');
const videoGamesRoutes = require('./videoGamesRoutes')
const genresRouter = require("./genresRouter");


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use("/videogames", videoGamesRoutes);
mainRouter.use("/genres", genresRouter);


module.exports = mainRouter;
