const mongoose = require("mongoose");
const Counter = mongoose.model("Counter");
mongoose.Promise = global.Promise;

const linksSchema = new mongoose.Schema({
  _id: { type: Number },
  long_url: String
});

// The pre('save', callback) middleware executes the callback function
// every time before an entry is saved to the urls collection.
linksSchema.pre("save", function(next) {
  var doc = this;
  // find the url_count and increment it by 1
  Counter.findByIdAndUpdate(
    { _id: "url_count" },
    { $inc: { seq: 1 } },
    { new: true },
    function(error, model) {
      if (error) return next(error);
      // set the _id of the urls collection to the incremented value of the counter
      doc._id = model.seq;
      next();
    }
  );
});

module.exports = mongoose.model("Links", linksSchema);
