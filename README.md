# express-simple
> A project for fast development of REST APIs, where routes can return JSON documents

Simple starter, barebone structure based on ExpressJS. Helps to easily create controllers for routes. Provides Flightplan file for simple deployment strategy.

This project uses the following libraries:
- [Express](https://www.npmjs.com/package/express)
- [Helmet](https://www.npmjs.com/package/helmet)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Flightplan](https://www.npmjs.com/package/flightplan)
- [Fly](https://www.npmjs.com/package/fly)

## Installation
Open your terminal and run the following commands:
```
git clone https://github.com/mjrdnk/express-simple
cd express-simple/ && npm install
```
## Usage
To run express-simple in development, run this command from your project directory:

```
npm run dev
```

To run express-simple in production, run this command from your project directory:

```
npm start
```

Then, go to http://localhost:5000/api/v1.0/hello

You will see this screen in your browser
<img src='https://i.imgur.com/SHHwXCd.png' />
<br>

## Examples

#### Example : nexmo sms service
To write your custom controllers write your functions in a file and export the module, like this:
```javascript
const Nexmo = require('nexmo');

function nexmo () {
    this.nexmo = {}
    this.apiKey = yourapiKey; // get your api key and secret from nexmo.com
    this.apiSecret = yourapiSecret;
    this.sendSms = sendSms;
}

this.nex = new Nexmo ({
    apiKey : this.apiKey,
    apiSecret : this.apiSecret
});

let sendSms = (from,to,message) => { 
            this.nex.message.sendSms(from, to, message, (err,responseData) => {
        if (err) {
            console.log('err', err.message);
            return;
        }
    });
}
module.exports = nexmo;
```

The controller can be reused in a router nexmo.route.js file, like this:
```javascript
const router = require(express).Router();

const NexmoController = require('../controllers/nexmo.js');

router.get('/sms', NexmoController.sendSms);

module.export = router
```

Then you can use it in your server.js file, like this:
```javascript
const nexmo = require('./routes/nexmo.route.js');

app.use(API_BASE, nexmo);
```

## Credit
Flightplan based on [this gist](https://gist.github.com/learncodeacademy/35045e64d2bbe6eb14f9)

## License

[MIT](LICENSE)
