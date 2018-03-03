const request = require("supertest");
const start = require("../start");
const app = require("../app");

describe("index route", () => {
  test("should respond with a 200 with no query parameters", () => {
    return request(app)
      .get("/v1/links")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body));
      });
    done();
  });

  test("should respond with a 500 link does not exist", () => {
    return request(app)
      .delete("/v1/zöcppak2")
      .expect(500)
      .then(response => {
        expect(response.error);
      });
    done();
  });

  test("should respond with a 500 link does not exist", () => {
    return request(app)
      .put("/v1/zöcppak2")
      .expect(500)
      .then(response => {
        expect(response.error);
      });
    done();
  });
});
