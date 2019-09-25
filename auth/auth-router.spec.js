const request = require("supertest");
const server = require("../api/server.js");
const bcrypt = require("bcryptjs");

const db = require("../database/db-config.js");

describe("auth-router.js", () => {
  describe("auth route", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should return status 201 from auth register route", async () => {
      const expectedStatus = 201;

      const response = await request(server)
        .post("/api/auth/register")
        .send({ username: "penny", password: "hello" });

      expect(response.status).toBe(expectedStatus);
    });

    it("should return a JSON object", async () => {
      const expectedBody = await db("users");

      const response = await request(server).get("/api/auth/register");
      expect(response.body.username).toEqual(expectedBody.username);
    });
  });
});
