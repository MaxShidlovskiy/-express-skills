function isValidId(req, res, next) {
    const { id } = req.params;
    if (!isNaN(id)) throw new Error(`id не число`);
    if (id <= 0) throw new Error(`id отрицательное число`);
  }
  
  module.exports = { isValidId };