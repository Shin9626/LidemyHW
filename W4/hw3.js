const request = require('request');
const process = require('process');

var args = process.argv;

request.get({
    url: `https://restcountries.com/v2/name/${args[2]}`
},
    (err, res, body) => {
        let contries = JSON.parse(body)
        contries.forEach((val, index)=>{
            console.log("============");
            console.log(`國家:${val.name}`);
            console.log(`首都:${val.capital}`);
            console.log(`貨幣:${val.currencies[0].code}`);
            console.log(`國碼:${val.callingCodes}`);  
        })
    }
)