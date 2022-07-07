

const { Schema, model } = require("mongoose");

const itemmasterSchema = new Schema(
  {
    code: { type: Number, required: true },
    name: { type: String, required: true },
    unitPrice: { type: String, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);



module.exports = model("itemmaster", itemmasterSchema);
