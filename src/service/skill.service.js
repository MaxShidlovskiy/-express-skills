const fs = require('fs');

const path = './storage/storage.json';

function getAllSkills() {
  const array = JSON.parse(fs.readFileSync(path));
  if (!array.length) throw new Error('Array is empty');
  return array;
}

function getAllSkillById(id) {
  const array = JSON.parse(fs.readFileSync(path));
  const filtered = array.filter(elem => elem.id == id);
  if (!filtered.length) throw new Error('There is no such id');
  return filtered;
}

function createSkill(title) {
  const array = JSON.parse(fs.readFileSync(path));
  array.push({
    id: array.length + 1,
    title,
  });
  fs.writeFileSync(path, JSON.stringify(array));
  return array;
}

function updateSkill(id, title) {
  const array = JSON.parse(fs.readFileSync(path));
  const index = array.findIndex(elem => elem.id == id);
  if (index == -1) throw new Error('There is no such id');
  array[index].title = title;
  fs.writeFileSync(path, JSON.stringify(array));
  return array;
}

function deleteSkill(id) {
  const array = JSON.parse(fs.readFileSync(path));
  const filtered = array.filter(elem => elem.id != id);
  if (filtered.length == array.length) throw new Error('There is no such id');
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

module.exports = { getAllSkills, getAllSkillById, createSkill, updateSkill, deleteSkill };