const express = require('express')
const colors = require('colors')
const selfdiscord = require("discord.js-selfbot-v13");

async function host() {
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

async function discord(token, status) {
    if(!status) status = "Online🟢";

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
                    console.log(colors.green("[LOG] Logined to token"))
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

async function sms(phone) {
    console.log(colors.yellow("[LOG] Coming soon."))
}

module.exports = {
    host: host,
    sms: sms,
    discord: discord
}