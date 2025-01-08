// import mongoose
const mongoose = require("mongoose");

const utilisateurSchema = new mongoose.Schema(
  {
    prenom: {
      type: String,
      required: true,
    },
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    tel: { type: String },
    liencv: { type: String },
    Etat: { type: Boolean, default: 1 },
    DateNaiss: { type: Date },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("utilisateur", utilisateurSchema);
