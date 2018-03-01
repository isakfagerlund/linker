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
  // find the url_count and increment it by 1
  Counter.findByIdAndUpdate(
    { _id: "url_count" },
    { $inc: { counterNumber: 1 } },
    { new: true },
    function(error, model) {
      this._id = Counter.counterNumber;
    }
  );
});

module.exports = mongoose.model("Links", linksSchema);
