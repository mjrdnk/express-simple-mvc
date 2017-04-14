// place for your controller's functions

// HelloWorldController defines methods
// you can import them in your the corresponding route file in routes/ folder
let HelloWorldController = {
    get: get
};

function get (req, res, next) {
    res.json({
        'hello world': 'hello world'
    });
}

module.exports = HelloWorldController;