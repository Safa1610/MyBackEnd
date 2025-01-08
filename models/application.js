//à garder temporairement

// import mongoose
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Utilisateur",
    required: true,
  },
  travail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Travail",
    required: true,
  },
  statut: {
    type: String,
    enum: ["Postulé", "Entretien", "Rejeté", "Engagé"],
    default: "Postulé",
  },
  DateApp: { type: Date, default: Date.now },
  notes: { type: String },
});

module.exports = mongoose.model("Application", applicationSchema);
