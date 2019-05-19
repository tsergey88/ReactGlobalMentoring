const routes = require("next-routes");

module.exports = routes()
  .add("search", "/search/:searchValue")
  .add("film", "/film/:id");
