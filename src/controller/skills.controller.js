const express = require(`express`);
const {Service}  = require(`../service/skill.service`);
const { isValidId } = require(`../helpers/validator`);

const router = express.Router();
const service = new Service();

router.get(`/`, (req, res) => {
  try {
    const data = service.getAllSkills();
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

router.get(`/:id`, isValidId, (req, res) => {
  try {
    const { id } = req.params;
    const data = service.getSkillById(id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

router.post(`/`, (req, res) => {
  try {
    const { title } = req.body;
    const data = service.createSkill(title);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

router.put('/:id', isValidId, (request, response) => {
  try {
    const { id } = request.params;
    const { title } = request.body;
    const data = service.updateSkill(id, title);
    response.status(200).send(data);
  } catch (error) {
    response.status(404).send(error.message);
  }
});

router.delete(`/:id`, isValidId, (req, res) => {
  try {
    const { id } = req.params;
    const data = service.deleteSkill(id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;