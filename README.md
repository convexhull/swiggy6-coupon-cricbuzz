# SWIGGY6-CRICBUZZ-NOTIFIER

An app that notifies (and alarms ) whenever a 6 is hit in a cricket match. (Tested on Ubuntu 18.04).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

1. Make sure that you have node and npm installed. 

### Setting up the .env

Follow these steps  once the match is live ` : 
```
1. Go to Cricbuzz website.
2. Open the live score page of the match you wanna keep an eye on. 
3. Copy the match id from the address bar as highlighted in the following images. 
4. Set `match_id` in the `.env` to this value. ( in this case it is 22411 ) .
```

![alt text](https://raw.githubusercontent.com/convexhull/swiggy6-coupon-cricbuzz/master/image1.png)


![alt text](https://raw.githubusercontent.com/convexhull/swiggy6-coupon-cricbuzz/master/image2.png)



### Steps

Run following commands : 

```
sudo apt install mpg123
npm install
node server.js
```

### Working

1. After running `node server.js` the app will keep running. Whenever a 6 is hit in the match, you will get a desktop notification as well as hear an alarmtone ( ensure that your volume is turned up ).
2. Shutdown the app when not required using `CTRL+C'. 


### Disclaimer

Though it works perfect, this project was built hurriedly just for fun, so as the owner of the repo and his friends could order food at low prices ;)

Feel free to contact me for any error(s) or improvement(s) you wanna suggest/point-out.