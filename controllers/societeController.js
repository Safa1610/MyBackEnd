const company = require("../models/societe");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// creation de societe
// localhost:3000/api/company (post)
async function creationCompany(req, res) {
  const { nom, email, siteweb, activite, taille, creele } = req.body;
  await company.create({
    nom: nom,
    email: email,
    siteweb: siteweb,
    activite: activite,
    taille: taille,
    creele: creele,
  });
  return res.status(201).json({ message: "Société ajoutée" });
}

// update company by id
// localhost:3000/api/company/:id (put)
async function updateCompany(req, res) {
  const { id } = req.params;
  const { nom, siteweb, activite, taille, creele } = req.body;
  await company.findByIdAndUpdate(id, {
    $set: { nom, siteweb, activite, taille, creele },
  });
  return res.status(200).json({ message: "Société modifiée" });
}

// Effacer societe by id
// localhost:3000/api/company/:id (delete)
async function deleteCompanyById(req, res) {
  const { id } = req.params;
  await user.findByIdAndDelete(id);
  return res.status(200).json({ message: "Société supprimé" });
}

// get all companies
// localhost:3000/api/companies/all (get)
async function getAllCompanies(req, res) {
  const allcompanies = await company.find();
  return res.status(200).json(allcompanies);
}
