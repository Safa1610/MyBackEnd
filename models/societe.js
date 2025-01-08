// import mongoose
const mongoose = require("mongoose");

const societeSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    password: { type: String },
    email: { type: String, required: true, unique: true },
    siteweb: { type: String },
    activite: { type: String },
    taille: { type: String },
    creele: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Societe", societeSchema);
