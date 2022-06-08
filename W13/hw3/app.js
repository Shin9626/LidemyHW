// the selector point to the container
const container = document.querySelector('.container');

// store the game id and cursor of results of streams
var recentGame = ""
var cursor = ""

// set author object
let header_author = {
    headers: new Headers({
        'Authorization': 'Bearer 52djkg8csagmrn544816ntbqvj80gs',
        'Client-Id': 'mqe2bm3baevz9kp0faykakz5op13nv'
    })
}

//page initialize
//SendReq('https://api.twitch.tv/helix/games/top?first=5', PageInit);

fetch('https://api.twitch.tv/helix/games/top?first=5', header_author)
    .then(res => res.text().then(text => PageInit(text)))
    .catch(() => { alert('連線錯誤，請重新整理') })

// event render
document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.classList.contains('game__nav')) {

        // clear the container
        container.innerHTML = ""
        let gameId = e.target.getAttribute("game-id");
        recentGame = gameId;
        //SendReq(`https://api.twitch.tv/helix/streams?game_id=${gameId}`, RenderStream)
        fetch(`https://api.twitch.tv/helix/streams?game_id=${gameId}`, header_author)
            .then(res => res.text().then(text => RenderStream(text)))
    }
})

// initialize the page content when first loading
function PageInit(responseText) {
    const top5Game = JSON.parse(responseText)
    let games = document.querySelectorAll('.game__nav')

    games.forEach((games, index) => {
        games.innerHTML = (`${top5Game.data[index].name}`)
        games.setAttribute("game-id", `${top5Game.data[index].id}`)
    })
}

function RenderStream(responseText) {

    let streamData = JSON.parse(responseText)

    // userId will add all strings of user_id of stream data 
    //because we want to send the request and get the profile data in one time
    let userId = ""

    for (let i = 0; i < streamData.data.length; i++) {

        // set size or no picture
        let streamImg = streamData.data[i].thumbnail_url.replace('{width}x{height}', '400x225')

        // create element and set user-id attribute 
        let streamBox = document.createElement('div')
        streamBox.classList.add('game__stream')
        streamBox.setAttribute("user-id", streamData.data[i].user_id)
        streamBox.innerHTML = `<img src = "${streamImg}">
                                    <div><img>
                                        <div class="stream__info">
                                            <div class="stream__title">${streamData.data[i].title}</div>
                                            <div class="stream__user">${streamData.data[i].user_name}</div>
                                        </div>
                                    </div>`
        container.appendChild(streamBox)
        userId += `id=${streamData.data[i].user_id}&`
    }

    //SendReq(`https://api.twitch.tv/helix/users?${userId}`, GetUserIcon)
    fetch(`https://api.twitch.tv/helix/users?${userId}`, header_author)
        .then(res => res.text().then(text => GetUserIcon(text)))
    cursor = streamData.pagination.cursor
    LoadStream()
}

function LoadStream() {
    if (document.querySelector('.btn-load') == null) {
        let load = document.createElement('div')
        load.classList.add('btn-load')
        load.innerText = "載入更多直播"
        document.querySelector('.btn-box').appendChild(load);

        document.querySelector('.btn-load').addEventListener("click", () => {
            //SendReq(`https://api.twitch.tv/helix/streams?game_id=${recentGame}&after=${cursor}`, RenderStream)
            fetch(`https://api.twitch.tv/helix/streams?game_id=${recentGame}&after=${cursor}`, header_author)
                .then( res => res.text().then( text => RenderStream(text)))
        })
    }

    if (cursor == null) document.querySelector('.btn-load').setAttribute("value", "沒有更多了!")
}

function GetUserIcon(responseText) {
    let data = (JSON.parse(responseText)).data;
    for (let i = 0; i < data.length; i++) {
        document.querySelector(`div[user-id="${data[i].id}"] div img`).setAttribute("src", data[i].profile_image_url)
    }
}

// request send
function SendReq(url, callback) {
    const request = new XMLHttpRequest
    request.open('GET', url)
    request.setRequestHeader('Authorization', 'Bearer 52djkg8csagmrn544816ntbqvj80gs')
    request.setRequestHeader('Client-Id', 'mqe2bm3baevz9kp0faykakz5op13nv')
    request.send()
    request.onload = () => {
        // the parament of callback could bring the response content to function
        if (request.status >= 200 && request.status <= 400) callback(request.responseText);
        else alert("系統不穩定，請重新嘗試")
    }
}
