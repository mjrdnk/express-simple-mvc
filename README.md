# express-simple
> A project for fast development of REST APIs, where routes can return JSON documents

Simple starter, barebone structure based on ExpressJS. Helps easily create controllers for routes. Provides Flightplan file for simple deployment strategy.

This project uses the following libraries:
- [express](https://www.npmjs.com/package/express)
- [helmet](https://www.npmjs.com/package/helmet)
- [morgan](https://www.npmjs.com/package/morgan)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [flightplan](https://www.npmjs.com/package/flightplan)
- [fly](https://www.npmjs.com/package/fly)

## Installation
To install, open your terminal and run the following commands:
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

### Send sms with nexmo
// This is a controller that allows users send messages easily using the nexmo platform
//get your keys from nexmo.com

```

let Nexmo = require('nexmo');

function nexmo(){
    this.nexmo = {}
    this.apiKey;
    this.apiSecret;
    this.setCredentials = setCredentials;
    this.sendSms = sendSms;
}

let setCredentials = (apiKey, apiSecret)=>{
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.nex = new Nexmo({
        apiKey : this.apiKey,
        apiSecret : this.apiSecret
    })
}

let sendSms = (from,toPath,message)=>{
    // toPath = file absolute path
            this.nex.message.sendSms(from, to, message, (err,responseData)=>{
        if(err){
            console.log('err',err.message);
            return;
        }
    });
}
module.exports = nexmoSms;
```

### Usage
```
let nexmoSms = require(*module absolute path*)
nexmoSms.setCredentials(apiKey,apiSecret)
router.get('/sms',nexmoSms.sendSms);
```

## Credit
Flightplan based on [this gist](https://gist.github.com/learncodeacademy/35045e64d2bbe6eb14f9)

## License

[MIT](LICENSE)
