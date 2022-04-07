const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    unit_id: {
        type: Number,
        maxLength: 50
    },
    full_name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('Student', studentSchema);