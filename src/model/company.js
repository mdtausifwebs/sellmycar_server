const { default: mongoose } = require("mongoose");

const companysSchema = new mongoose.Schema(
  {
    company: [
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

module.exports = mongoose.model("companyschema", companysSchema);
