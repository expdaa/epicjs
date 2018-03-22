const configVals = require('./config');

module.exports = {
    getDBConnStr: function () {
        return 'mongodb://' +
            configVals.username +
            ':' + configVals.password +
            '@ds121589.mlab.com:21589/rproject'
    }
}