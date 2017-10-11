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
To run express-simple, run this command from your project directory:

```
npm start
```

Or, use this optional tool for running the server with reloading:

```
npm install -g nodemon
nodemon
```

Then, go to http://localhost:5000/api/v1.0/hello

You will see this screen in your browser
<img src='https://i.imgur.com/SHHwXCd.png' />
<br>

## Credit
Flightplan based on [this gist](https://gist.github.com/learncodeacademy/35045e64d2bbe6eb14f9)

## License

[MIT](LICENSE)
