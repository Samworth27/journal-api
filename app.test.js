const app = require("./app.js");
const request = require("supertest");
const { get } = require("mongoose");
const baseURL = "/api/v1";
describe("App", () => {
  test("GET /", async () => {
    const res = await request(app).get(baseURL + "/");
    expect(res.status).toBe(200);
    expect(res.body.name).toBeDefined();
    expect(res.body.name).toBe("Journal API");
    expect(res.body.endpoints).toBeDefined();
    expect(res.body.endpoints).toBe(baseURL + "/endpoints");
  });
  test("POST /entries", async () => {
    const res = await request(app)
      .post(baseURL + "/entries")
      .send({ category: "test", entry: "jest" });

    expect(res.status).toBe(201);
    expect(res.headers["content-type"]).toMatch(/json/i)
  });
});
