const Skill = require("../models/skill");

function index(req, res) {
  let skills = Skill.skills;
  res.render("skills/index", {
    skills,
  });
}
function show(req, res) {
  let skill = Skill.skills.find((skill) => {
    return skill.id == req.params.id;
  });
  res.render("skills/show.ejs", {
    skill,
  });
}
function newPage(req, res) {
  res.render("skills/add-skill-page.ejs");
}
function create(req, res) {
  const newSkill = { name: req.body.skillNameAttr };
  newSkill.id = Math.floor(Math.random() * 1000);
  newSkill.done = false;
  Skill.skills.push(newSkill);
  res.redirect("/skills");
}
function deleteSkill(req, res) {
  const idx = Skill.skills.findIndex((skill) => skill.id == req.params.id);
  Skill.skills.splice(idx, 1);
  res.redirect("/skills");
}

function updatePage(req, res) {
  const skill = Skill.skills.find((skill) => {
    return skill.id == req.params.id;
  });
  res.render("skills/update-page.ejs", { skill });
}
function updateSkill(req, res) {
  console.log(req.body)
  let skillName = req.body.updateSkill
  let skillStatus = req.body.done
  let idx = Skill.skills.findIndex(skill => skill.id == req.params.id)
  Skill.skills[idx].name = skillName
  Skill.skills[idx].done = skillStatus
  res.redirect(`/skills/${req.params.id}`);
}

module.exports = {
  index,
  show,
  newPage,
  create,
  deleteSkill,
  updatePage,
  updateSkill,
};
