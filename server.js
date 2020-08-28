const express = require("express");

const recipeRouter = require("./cookbook/recipeRouter");

const server = express();
server.use(express.json());

server.use("/api", recipeRouter);

server.get("/", (req, res) => {
    res.status(200).json({message: "server running"})
})

module.exports = server