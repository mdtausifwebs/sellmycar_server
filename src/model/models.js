const { default: mongoose } = require("mongoose");

const modelsSchema = new mongoose.Schema(
  {
    company: [
      {
        type: String,
        required: true,
      },
    ],
    model: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("modelschema", modelsSchema);
