# SWIGGY6-CRICBUZZ-NOTIFIER

An app that notifies (and alarms ) whenever a 6 is hit in a cricket match. (For Linux )

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

1. Make sure that you have node and npm installed. 

### Setting up the .env

1. Go to Cricbuzz website.
2. Open the live score page of the match you wanna keep an eye on. 
3. Copy the match id from the address bar as highlighted in the following images. 
4. Set `match_id` in the `.env` to this value. 

![alt text](https://raw.githubusercontent.com/convexhull/swiggy6-coupon-cricbuzz/master/image1.png)
![alt text](https://raw.githubusercontent.com/convexhull/swiggy6-coupon-cricbuzz/master/image2.png)

### Prerequisites

Run following commands : 

```
sudo apt install mpg123
npm install
node server.js
```

### Working

1. After running `node server.js` the app will keep running. Whenever a 6 is hit in the match, you will get a desktop notification as well as hear an alarmtone. 
2. Shutdown the app when not required using `CTRL+C'. 
