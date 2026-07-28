const request = require("supertest");
const app = require("./app");

test("GET / returns the hello message", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello from my Express app!");
});
