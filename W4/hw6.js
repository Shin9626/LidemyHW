const request = require('request');
const process = require('process');

const twitch = {
    client_id: "mqe2bm3baevz9kp0faykakz5op13nv",
    client_secret: "muis52m05hm71189mss8vx1w68mxwc",
    access_token: "mtftdn29rmmbthfe2zuszl7kjhfim3"
};

/*headers: {
    'Client-Id': 'mqe2bm3baevz9kp0faykakz5op13nv',
        'Authorization': 'Bearer mtftdn29rmmbthfe2zuszl7kjhfim3',
    }
*/

var args = process.argv;
var id = 0;

//get game_id
function GetGameId(id) {
    request.get({
        url: `https://api.twitch.tv/helix/games?name=${args[2]}`,
        headers: {
            'Client-Id': 'mqe2bm3baevz9kp0faykakz5op13nv',
            'Authorization': 'Bearer mtftdn29rmmbthfe2zuszl7kjhfim3',
        }
    },
        (err, res, body) => {
            let info = JSON.parse(body);
            id = info.data[0].id;
            GetStreamName(id)
        }
    )
}

//get stream information
function GetStreamName(id) {
    request.get({
        url: `https://api.twitch.tv/helix/streams?first=100`,
        headers: {
            'Client-Id': 'mqe2bm3baevz9kp0faykakz5op13nv',
            'Authorization': 'Bearer mtftdn29rmmbthfe2zuszl7kjhfim3',
        },
    },
        (err, res, body) => {
            let info = JSON.parse(body);
            info.data.forEach((val, index) => {
                console.log(`第${index + 1}名: ${val.user_name} (id: ${val.user_id})`)
                console.log(`遊戲名稱: ${val.game_name}  觀看人數: ${val.viewer_count}`)
                console.log(`====================`)
            })
        }
    )
}

GetGameId(id)

