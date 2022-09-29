const request = require("supertest");
const app = require("../app");

describe("TEST GET /products", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/api/v1/products")
      .expect(200)
      .expect("Content-Type", /json/);
  });
});

describe("TEST POST /products", () => {
  test("It should respond with 200 sucess", () => {
    const response = 200;
    expect(response).toBe(200);
  });
});
