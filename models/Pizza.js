const { Schema, model } = require("mongoose");
// importing the Schema construtor from mongoose dependency and the model function
//Schema for the data

const PizzaSchema = new Schema({
  pizzaName: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  size: {
    type: String,
    default: "Large",
  },
  toppings: [],
});

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);
//export the Pizza model
module.exports = Pizza;