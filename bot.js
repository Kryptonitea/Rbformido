const Discord = require('discord.js');
const client = new Discord.Client();



// playing
client.on('ready', () => {                           
client.user.setGame(`By Boma`,'https://www.twitch.tv/ℕ g A M Codes♥');
  });



client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('386546058571808788').roles.find("name", "Rainbow").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});

client.login(process.env.BOT_TOKEN);
