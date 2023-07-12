const getVideosGamesHandler = (req, res) => {
    // llamar a la funcion que obtiene los datos de la BDO
    // llanar a una funcion que obtenga los datos de la APT externa
    // unir los detos, unificando el rormeto
    // cuando tenga los datos, responder con los datos

    const { name } = req.query;
    if (name) res.send(`LOP!! Obtiene un listado con los videojuegos que se llamen ${name}`)
    else res.send("LOP!! Obtiene un listado con todos los videojuegos")
};

const getVideoGamesHandler = (req, res) => {
    const { id } = req.params;
    res.send(`LOP!! Obtiene el detalle del videojuego de ID ${id}`)
};

const createVideoGamesHandler = (req, res) => {
    //res.send("LOP!! Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body")

    const { name, description, platforms, image, released, rating } = req.body;
    res.send(`LOP!! Crea un videojuego con estos datos:
    name:${name},
    description:${description},
    platforms:${platforms},
    image:${image},
    released:${released},
    rating:${rating}
    `);
};


module.exports = { getVideosGamesHandler, getVideoGamesHandler, createVideoGamesHandler };