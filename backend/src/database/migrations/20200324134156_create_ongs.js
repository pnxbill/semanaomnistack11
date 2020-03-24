exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};

// npx knex migrate:latest  (ATUALIZA AS MIGRATIONS)
// npx knex migrate:rollback (DESFAZ A ULTIMA)

// npx knex migrate:make name  (CRIA UMA MIGRATION)

// npx knex (LISTA COMANDOS)

// npx knex migrate:status  (LISTA TODAS MIGRATIONS QUE JA FORAM EXECUTADAS)
