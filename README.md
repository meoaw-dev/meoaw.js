# meoaw.js

Host your code online 24 hour for free in replit !

# How to install

`npm install meoaw.js`

# How to use

`node`

```js
const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const meoaw = require('meoaw.js')

// Config

token = "" // ใส่โทเคนบอท

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, async () => {
	console.log(`Login with ${client.user.tag}`);

    client.user.setActivity({
        name: 'Code by Meoaw !',
        type: ActivityType.Streaming,
        url: "https://youtube.com/watch?v=-BCh_RrEmmg"
    })

    meoaw.host()
    
});

client.login(token);
```

# Support Server

Discord: [Click Here](https://youtube.com)