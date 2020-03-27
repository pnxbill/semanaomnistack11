const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback(); //Desfazer as antigas
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ong", async () => {
    const res = await request(app)
      .post("/ongs")
      // .set('Authorization','31g23ujg12')  // CASO PRECISASSE ENVIAR HEADER DE AUTH
      .send({
        name: "APAD2",
        email: "cont@bill.com.br",
        whatsapp: "4800000000",
        city: "São José",
        uf: "SC"
      });

    expect(res.body).toHaveProperty("id");
    expect(res.body.id).toHaveLength(8);
  });
});
