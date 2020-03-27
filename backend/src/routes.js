const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);

routes.post(
  // VALIDATING REQUEST BODY
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

routes.get(
  // VALIDATING REQUEST HEADER
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

routes.get(
  // VALIDATING REQUEST QUERY PARAM
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentController.index
);
routes.post("/incidents", IncidentController.create);

routes.delete(
  // VALIDATING REQUEST ROUTE PARAM
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.delete
);

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
