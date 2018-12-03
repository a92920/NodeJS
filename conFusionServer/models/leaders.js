const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);



const leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
    },
    abbr: {
        type: String,
        requiredPaths: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Leaders = mongoose.model('Leaders', leaderSchema);

module.exports = Leaders;