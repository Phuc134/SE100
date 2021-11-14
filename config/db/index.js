const mongoose = require('mongoose');
async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/SE100');
        console.log('connect successfully.')
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };