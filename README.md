# meoaw.js

meoaw.js can nuke server, online token with custom status and host on replit 24/7!

# How to install

`npm install meoaw.js`

# Examples

all the examples can find at [Github](https://github.com/meoaw-dev/meoaw.js)
```js
const meoaw = require("meoaw.js");

//เปิดเว็บโฮส
meoaw.host();

//ออนโทเคนคน/บอท
meoaw.discord.streaming(
    "", //โทเคนคน/บอท
    "Meoaw.js" //สถานะ
);

//ยิงดิสแบบใช้ยศผู้ดูแล (แนะนำให้ยิงโดยใช้บอทเพราะแบบยิงโดยใช้คนจะยาก!)
meoaw.discord.nuker({
    token: "",  //โทเคนคนบอท
    command: "ฮาย",  //ข้อความที่พิมพ์แล้วจะยิงให้!

    channel: "กูมาเยือนควายๆ", //ชื่อช่องที่ต้องการใส่!
    message: "ควยๆๆ" // ข้อความที่ต้องการให้ส่ง!
    //แบบ embed เร็วๆนี้!
});

//อื่นๆในเร็วๆนี้!
```

# Support Server

Discord: [Click Here](https://discord.gg/meoaw)