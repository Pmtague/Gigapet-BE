const request = require("supertest");
const server = require("../api/server.js");
const bcrypt = require("bcryptjs")

const db = require("../database/db-config.js");

describe("auth-router.js", () => {
  describe("auth route", () => {
    it("should return status 201 from auth register route", async () => {
      const expectedStatus = 201;

      const response = await request(server)
        .post("/api/auth/register")
        .send({ username: "rahul", password: "hello"});

      expect(response.status).toBe(expectedStatus);
    });
  });
});

