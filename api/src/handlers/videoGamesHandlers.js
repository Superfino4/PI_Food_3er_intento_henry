// llamar a la funcion que obtiene los datos de la BDO
// llanar a una funcion que obtenga los datos de la APT externa
// unir los detos, unificando el rormeto
// cuando tenga los datos, responder con los datos
const { createVideoGames, getVideoGameById, searchVideoGameByName, getAllVideoGame } = require("../controllers/videoGamesController.js");

const getVideosGamesHandler = (req, res) => {
    const { name } = req.query;

    const results = name ? searchVideoGameByName(name) : getAllVideoGame();

    if (name) res.send(`LOP!! Obtiene un listado con los videojuegos que se llamen ${name}`)
    else res.send("LOP!! Obtiene un listado con todos los videojuegos")
};

const getVideoGamesHandler = async (req, res) => {
    const { id } = req.params;

    const source = isNaN(id) ? "bdd" : "api"

    try {
        const videogames = await getVideoGameById(id, source);
        res.status(201).json(videogames);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const createVideoGamesHandler = async (req, res) => {
    const { name, description, platforms, image, released, rating } = req.body;
    try {
        const newVideoGames = await createVideoGames(name, description, platforms, image, released, rating);
        res.status(201).json(newVideoGames);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


module.exports = { getVideosGamesHandler, getVideoGamesHandler, createVideoGamesHandler };