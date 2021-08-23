const AutorController = require("../controllers/autor.controller");

module.exports = app => {
  app.get("/api/autors/", AutorController.getAll);
  app.get("/api/autors/:id", AutorController.getOne);
  app.put("/api/autors/:id", AutorController.update);
  app.post("/api/autors/new", AutorController.create);
  app.delete("/api/autors/:id", AutorController.delete);
};