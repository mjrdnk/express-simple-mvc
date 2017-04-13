module.exports = {
    get: get
};

function get (req, res, next) {
    res.json({
        'hello world': 'hello world'
    });
}