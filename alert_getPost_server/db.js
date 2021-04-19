const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/list-items",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);
const listSchema = new mongoose.Schema({
  item:String,
  
});
const List = mongoose.model("List", listSchema);

module.exports = {
  List
};
