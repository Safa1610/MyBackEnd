const company = require("../models/job.js");

// creation de job
// localhost:3000/api/job (post)
async function creationJob(req, res) {
  const {
    titre,
    description,
    societe,
    adresse,
    statut,
    datepost,
    candidature,
  } = req.body;
  await user.create({
    titre: titre,
    description: description,
    societe: societe,
    adresse: adresse,
    statut: statut,
    datepost: datepost,
    candidature: candidature,
  });
  return res.status(201).json({ message: "job ajouté" });
}

// update job by id
// localhost:3000/api/job/:id (put)
async function updateJob(req, res) {
  const { id } = req.params;
  const { description, statut, candidature } = req.body;
  await job.findByIdAndUpdate(id, {
    $set: { description, statut, candidature },
  });
  return res.status(200).json({ message: "Job modifié" });
}

// Effacer job by id
// localhost:3000/api/job/:id (delete)
async function deleteJobById(req, res) {
  const { id } = req.params;
  await user.findByIdAndDelete(id);
  return res.status(200).json({ message: "Job supprimé" });
}

// get all jobs
// localhost:3000/api/jobs/all (get)
async function getAllJobs(req, res) {
  const allJobs = await company.find();
  return res.status(200).json(allJobs);
}
