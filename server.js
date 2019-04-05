const axios = require('axios');
const notifier = require('node-notifier');
const player = require('play-sound')(opts = {players : ['mpg123']})
const dotenv = require('dotenv');


dotenv.config();
  


setInterval( callback, 30000);



function callback() {
    axios.get(process.env.url)
        .then ( response => {
            let prev_overs = response.data.matches[`${process.env.match_id}`]["score"]["prev_overs"]
            if(prev_overs.length && prev_overs.length < 2) {
                return ;
            }
            let length = prev_overs.length;
            let last_ball = prev_overs[length-2]; // fix this later.
            console.log(`The last ball was a ${last_ball}`);
            if(last_ball == 6) {
                notifier.notify(`Hurrah ! A ${last_ball} was hit !`);
                let audio = player.play(process.env.alarmTone, function(err){
                    if(err) 
                        throw err;
                })
                setTimeout(() => {
                    audio.kill();
                },29000)
            }
        })
        .catch( e => {
            console.log('Some error occurred');
        })
}


