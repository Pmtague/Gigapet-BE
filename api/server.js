const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const authRouter = require('../auth/auth-router.js');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter)

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

module.exports = server;
