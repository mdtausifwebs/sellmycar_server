const { default: mongoose } = require("mongoose");

const carsSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    carage: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    enginecc: {
      type: String,
      required: true,
    },
    numbergears: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports =mongoose.model("cars",carsSchema)
