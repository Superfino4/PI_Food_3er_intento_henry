const { Videogame } = require("../db");
const axios = require("axios")

const createVideoGames = async (name, description, platforms, image, released, rating) =>
    await Videogame.create({ name, description, platforms, image, released, rating });

const getVideoGameById = async (id, source) => {
    const videogames =
        source === "api"
            ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=4be2ed928e1d42388d5f7aac8db2b987`)).data
            : await videogames.findByPk(id);

    return videogames;
};

const searchVideoGameByName = async () => {
    const bdVideoGame = await Videogame.findall();

    const apiVideoGame = await axios.get(`https://api.rawg.io/api/games?key=4be2ed928e1d42388d5f7aac8db2b987&dates=2019-09-01,2019-09-30&platforms=18,1,7`).data;

    return [...bdVideoGame, ...apiVideoGame]
};

const getAllVideoGame = () => {

};

module.exports = { createVideoGames, getVideoGameById, searchVideoGameByName, getAllVideoGame }