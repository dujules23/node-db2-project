exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable("cars", tbl =>{
    tbl.increments()//primary key
    tbl.text("vin", 128).unique().notNullable()
    tbl.text("make", 128).notNullable()
    tbl.text("model", 128).notNullable()
    tbl.decimal("mileage", 128).notNullable()
    tbl.text("title")
    tbl.text("transmission")
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists("cars")

};
