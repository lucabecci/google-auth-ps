const {Schema, model} =  require( "mongoose");

const schema = new Schema({
  name: String,
  lastName: String,
  email: String,
  googleId: String
});


module.exports = model("User", schema);