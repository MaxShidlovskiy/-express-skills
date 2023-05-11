const fs = require(`fs`);
const path = `./storage/storage.json`;
class Service {
  getAllSkills() {
    const array = JSON.parse(fs.readFileSync(path));
    if (!array.length) throw new Error('Array is empty');
    return array;
  }

  getSkillById(id) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter(el => el.id == id);
    if (!filtered.length) throw new Error('There is no such id');
    return filtered
  }

  createSkill(title) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter(el => el.title == title);
    if (filtered.length > 0) throw new Error(`такой title уже есть`)
    const obj = { id: arr.length + 1, title: title }
    arr.push(obj)
    fs.writeFileSync(path, JSON.stringify(arr))
    return arr
  }

  updateSkill(id, title) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter(el => el.id != id)
    if (filtered.length == arr.length) throw new Error(`такого id нет`)
    const obj = { id: id, title: title }
    filtered.push(obj)
    fs.writeFileSync(path, JSON.stringify(filtered))
    return filtered
  }

  deleteSkill(id) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter(el => el.id != id);
    if (filtered.length == array.length) throw new Error('There is no such id');
    fs.writeFileSync(path, JSON.stringify(filtered))
    return filtered
  }
}
module.exports = { Service }