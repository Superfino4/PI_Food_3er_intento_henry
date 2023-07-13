const { Videogame } = require("../db");
const axios = require("axios")

const createVideoGames = async (name, description, platforms, image, released, rating) =>
    await Videogame.create({ name, description, platforms, image, released, rating });

const getVideoGameById = async (id, source) => {
    const videogame =
        source === "bdd"
            ? (await axios.get(`https://api.rawg.io/api/games/${id}`)).data
            : await videogame.findByPk(id);

    return videogame;
};

module.exports = { createVideoGames, getVideoGameById }