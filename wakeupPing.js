// host on glitch.com, to make it work 24/7 we need to ping it every 5 minutes
const https = require("https");
const PORT = process.env.PORT || 4000;
const temp = process.env.TEMP;

/*const PORTS = process.env.PORT || 3000;
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(PORT);*/

// the app somehow recognizes if bot or human is using it, so we need to add a user agent to make it think we are a human
const options = {
  headers: {
    "User-Agent": "Mozilla/5.0",
  },
};

function pingGlitchForever() {
  setInterval(() => {
    https.get(
      `https://teleforward-kffl.onrender.com`,
      options,
      (res) => {
        console.log(`Response status: ${res.statusCode}`);
        /*tell me if the bot is working, to know i should restart it if it's not
        bot.telegram.sendMessage(
          process.env.MY_NUMBER,
          `Second Bot Is Working ${res.statusCode}`
        );*/
      }
    );
  }, temp);

  return true;
}

module.exports = { pingGlitchForever };