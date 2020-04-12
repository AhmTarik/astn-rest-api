const mongoose = require('mongoose'); // Node Tool for MongoDB
const uuid = require('uuid'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // I

// user Model Definition
const courseSchema = new Schema({
  _id: {
    type: String,
    default: uuid(),
  },
  email: {
    type: String,
    index: true,
    lowercase:true
  },


},{
  strict:false
});

courseSchema.pre('save', function(next) {
  this._id = this._id || uuid();
  return next();
});

module.exports = mongoose.model('course', courseSchema);

