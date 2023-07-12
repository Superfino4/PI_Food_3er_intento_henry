const { Router } = require("express");

const videoGamesRoutes = Router();
const { getVideosGamesHandler, getVideoGamesHandler, createVideoGamesHandler } = require("../handlers/videoGamesHandlers.js");



videoGamesRoutes.get("/", getVideosGamesHandler);

videoGamesRoutes.get("/:id", getVideoGamesHandler);

videoGamesRoutes.post("/", createVideoGamesHandler);



module.exports = videoGamesRoutes;