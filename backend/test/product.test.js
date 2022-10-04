const request = require("supertest");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("../app");
dotenv.config({ path: "backend/config/config.env" });

const id = "633c2ff25d10b972dd328d09";

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: "MarketPLace",
  });
}, 70000);

/* Dropping the database and closing connection after each test. */
afterEach(async () => {
  // await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

//// TO get all products ////
describe("TEST GET /product", () => {
  test("It should respond with 200 success", async () => {
    const res = await request(app).get("/api/v1/products");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);
  });
}, 70000);

//// TO create a new product ////
describe("TEST POST /products", () => {
  test("It should respond with 201 success", async () => {
    const res = await request(app)
      .post("/api/v1/admin/product/new")
      .send({
        name: "Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray ",
        price: "949.99",
        description:
          "Stunning 13.3-inch Retina display with True Tone technology, Backlit Magic Keyboard and Touch ID, Tenth-generation, Intel Core i3 processor, Intel Iris Plus Graphics, Fast SSD storage, 8GB of memory, Stereo speakers with wider stereo sound",
        ratings: 4.9,
        images: [
          {
            public_id: "products/macbook_o2cj2k",
            url: "https://res.cloudinary.com/bookit/image/upload/v1606231282/products/macbook_o2cj2k.jpg",
          },
        ],
        category: "Laptops",
        seller: "Amazon",
        stock: 0,
        numOfReviews: 56,
        reviews: [],
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body).toHaveProperty("product");
    expect(res.body.product).toHaveProperty("name");
    expect(res.body.product).toHaveProperty("price");
    expect(res.body.product).toHaveProperty("description");
    expect(res.body.product).toHaveProperty("ratings");
    expect(res.body.product).toHaveProperty("images");
    expect(res.body.product).toHaveProperty("category");
    expect(res.body.product).toHaveProperty("seller");
    expect(res.body.product).toHaveProperty("stock");
    expect(res.body.product).toHaveProperty("numOfReviews");
    expect(res.body.product).toHaveProperty("reviews");
  });
}, 70000);

//// TO get a single product ////

describe("TEST GET /product/:id", () => {
  test("It should respond with 200 success", async () => {
    const res = await request(app).get(`/api/v1/product/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body).toHaveProperty("product");
    expect(res.body.product).toHaveProperty("name");
    expect(res.body.product).toHaveProperty("price");
    expect(res.body.product).toHaveProperty("description");
    expect(res.body.product).toHaveProperty("ratings");
    expect(res.body.product).toHaveProperty("images");
    expect(res.body.product).toHaveProperty("category");
    expect(res.body.product).toHaveProperty("seller");
    expect(res.body.product).toHaveProperty("stock");
    expect(res.body.product).toHaveProperty("numOfReviews");
    expect(res.body.product).toHaveProperty("reviews");
  });
}, 70000);

//// TO update a product ////
describe("TEST PUT /product/:id", () => {
  test("It should respond with 200 success", async () => {
    const res = await request(app).put(`/api/v1/admin/product/${id}`).send({
      name: "Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Blue Gray ",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body).toHaveProperty("product");
    expect(res.body.product).toHaveProperty("name");
    expect(res.body.product).toHaveProperty("price");
    expect(res.body.product).toHaveProperty("description");
    expect(res.body.product).toHaveProperty("ratings");
    expect(res.body.product).toHaveProperty("images");
    expect(res.body.product).toHaveProperty("category");
    expect(res.body.product).toHaveProperty("seller");
    expect(res.body.product).toHaveProperty("stock");
    expect(res.body.product).toHaveProperty("numOfReviews");
    expect(res.body.product).toHaveProperty("reviews");
  });
}, 70000);

//// TO delete a product ////
// describe("TEST DELETE /product/:id", () => {
//   test("It should respond with 200 success", async () => {
//     const res = await request(app).delete(`/api/v1/admin/product/${id}`);
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toHaveProperty("success", true);
//     expect(res.body).toHaveProperty("message");
//   });
// }, 70000);
