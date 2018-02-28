const app = require("./app");

const server = app.listen(process.env.PORT || 8888, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
