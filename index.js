const express = require('express')
const colors = require('colors')

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

async function sms(phone) {

    if (phone.startsWith("0")) {

        return(`start Attack to ${phone}`)

    } else {

        return(`${phone} has not start with 0 pls check !`)
    }

}

module.exports = {
    host: host,
    sms: sms
}