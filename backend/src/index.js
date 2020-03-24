const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

// Modo de segurança CORS
app.use(cors());
// Informa que está usando JSON para receber as requisições:
app.use(express.json());
// Informa o caminho do arquivo das ROTAS
app.use(routes);

app.listen(3333);
