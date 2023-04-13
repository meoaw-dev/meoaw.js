const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const host = require('meoaw-dev')

const sms = require('meoaw-dev')

// Config

token = "" // ใส่โทเคนบอท

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Login with ${c.user.tag}`);

    client.user.setActivity({
        name: 'Code by Meoaw !',
        type: ActivityType.Streaming,
        url: "https://youtube.com/watch?v=-BCh_RrEmmg"
    })

    host("MeoawX!")
    
});

client.login(token);