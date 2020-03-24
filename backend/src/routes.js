const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

// DATA MOCK UP
// let data = [
//   {
//     id: 1,
//     user: "Jonas",
//     age: 17
//   },
//   {
//     id: 2,
//     user: "Surce",
//     age: 19
//   },
//   {
//     id: 3,
//     user: "Chonga",
//     age: 30
//   }
// ];
// ///////////////

// routes.get("/", (req, res) => {
//   res.send("Hello world");
//   const bill = "Bill";
//   const user = "Usuário";
//   res.json({
//     bill,
//     user,
//     listen: "hover"
//   });
// });

// routes.get("/users/?:id", (req, res) => {
//   const queryParams = req.query; // QUERY PARAM (Nomeado atraves do ?key=value)
//   console.log(queryParams);

//   const params = req.params; // ROUTE PARAM  (Não nomeado, passado atraves do :id)
//   console.log(params);
//   const user = data.find(us => us.id == params.id);
//   res.json(user || data);
// });

// routes.post("/users/:id", (req, res) => {
//   const params = req.params;
//   const body = req.body;
//   console.log(req.params);
//   const userExist = data.find(el => el.id == params.id);
//   if (userExist) data = data.map(el => (el.id == params.id ? body : el));
//   else data.push(body);
//   res.json(data);
// });

module.exports = routes;
