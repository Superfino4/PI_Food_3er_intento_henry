const { Videogame } = require("../db");
const axios = require("axios")


// const cleanArray = (arr) => {
//     arr.map(elem => {
//         // const platforms = [elem.platforms, elem.parent_platforms]
//         //     .flatMap(platform => platform.map(p => p.platform.name))
//         //     .filter((name, index, arr) => arr.indexOf(name) === index);
//         // const genres = elem.genres.map(g => g.id);
//         return {
//             id: elem.id,
//             name: elem.name,
//             description: elem.description,
//             platform: platforms,
//             image: elem.background_image,
//             released: elem.released,
//             rating: elem.rating,
//             genre: genres,
//             created: false
//         };
//     });
// };


const createVideoGames = async (name, description, platforms, image, released, rating) =>
    await Videogame.create({ name, description, platforms, image, released, rating });


const getVideoGameById = async (id, source) => {
    const videogameslop =
        source === "api"
            ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=4be2ed928e1d42388d5f7aac8db2b987`)).data //console.log("bdd"); 
            : await Videogame.findByPk(id);

    return videogameslop;
};

const getGamesOnApi = async () => {

    //Pego a la api y traigo 20 juegos
    //(pag 1 en iterador 0 ---> 20 juegos)
    let response = await axios.get(
        `https://api.rawg.io/api/games?key=4be2ed928e1d42388d5f7aac8db2b987`,//3 ---> 4
    )

    //Hago el endpoint anterior 5 veces para traerme un total de 100 juegos
    let result = [];//1, 2 ---> next 3
    for (let i = 0; i < 5; i++) {
        result = [...result, ...response.data.results];
        response = await axios.get(response.data.next);//esto se repite 5 veces. // string url
    }

    const data = result.map((el) => {
        return {
            id: el.id,
            name: el.name,
            description: el.description,
            platforms: el.platforms.map((p) => p.platform.name),
            image: el.background_image,
            released: el.released,
            rating: el.rating,
        }
    })
    return data;
}

const getAllVideosGames = async () => {

    const bdVideosGames = await Videogame.findAll();
    const apiVideosgames = await getGamesOnApi()

    // const apiVideogames = (
    //     // await axios.get(`https://jsonplaceholder.typicode.com/users`)).data;

    //     await axios.get(`https://api.rawg.io/api/games?key=4be2ed928e1d42388d5f7aac8db2b987`)).data;

    //const apiVideogames = cleanArray(apiVideogamesRaw);

    return [...bdVideosGames, ...apiVideosgames];
    // return [...apiVideosgames];
    // return [...bdVideosGames];
};

const searchVideosGameByName = async (name) => {
    const bdVideosGames = await Videogame.findAll({ where: { name: name } });
    const apiVideosgames = await getGamesOnApi()

    const filteredApi = apiVideosgames.filter((Videogame) => Videogame.name === name);

    let allNames = [...bdVideosGames, ...filteredApi];

    let videoGamesNames = allNames.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
    );
    const data = videoGamesNames.map((el) => {
        return {
            id: el.id,
            name: el.name,
            description: el.description,
            platforms: el.platforms,
            image: el.background_image,
            released: el.released,
            rating: el.rating,
        }
    });

    if (data.length === 0) {
        throw new Error(`No se encontraron datos`)
    }
    return data;
}


module.exports = { createVideoGames, searchVideosGameByName, getAllVideosGames, getVideoGameById };