const request = require('request');
const process = require('process');

const twitch = {
    client_id: "mqe2bm3baevz9kp0faykakz5op13nv",
    client_secret: "muis52m05hm71189mss8vx1w68mxwc",
    access_token: "mtftdn29rmmbthfe2zuszl7kjhfim3"
};

var args = process.argv;

request.get({
    url: `https://api.twitch.tv/helix/games/top`,
    headers: {
        'Client-Id': 'mqe2bm3baevz9kp0faykakz5op13nv',
        'Authorization': 'Bearer mtftdn29rmmbthfe2zuszl7kjhfim3'
    }
},
    (err, res, body) => {
        console.log(res.statusCode)
        let games = JSON.parse(body)
        games.data.forEach((val, index)=>{
            console.log(`Top ${index+1} (${val.id}) : ${val.name}`)
        })
    }
)