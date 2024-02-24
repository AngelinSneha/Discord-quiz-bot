require("dotenv").config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const GENERAL_BOT_ID = process.env.GENERAL_BOT_ID;
const CLIENT_ID = process.env.CLIENT_ID;

module.exports.config = { BOT_TOKEN, GENERAL_BOT_ID, CLIENT_ID };
