const axios = require('axios');
const notifier = require('node-notifier');
const player = require('play-sound')(opts = {players : ['mpg123']})


  

setInterval( callback, 30000);

function callback() {
    axios.get('https://www.cricbuzz.com/match-api/livematches.json')
        .then ( response => {
            const prev_overs = response.data.matches["22411"]["score"]["prev_overs"]
            const length = prev_overs.length;
            let last_ball = prev_overs[length-2];
            console.log(last_ball);
            if(last_ball == 6 ) {
                notifier.notify(`Hurrah ! ${last_ball} was hit`);
                player.play('abcd.mp3', function(err){
                    if (err) throw err
                })

            }
        })
}


