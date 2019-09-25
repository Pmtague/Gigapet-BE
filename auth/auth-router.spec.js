const request = require("supertest");
const server = require("../api/server.js");
const bcrypt = require("bcryptjs");

const db = require("../database/db-config.js");

describe("auth-router.js", () => {
  describe("auth route", () => {
    // beforeEach(async () => {
    //   await db("users").truncate();
    // });

    it("should return status 201 from auth register route", async () => {
      const expectedStatus = 201;

      const response = await request(server)
        .post("/api/auth/register")
        .send({ username: "rahul", password: "patel" });

      expect(response.status).toBe(expectedStatus);
    });

    it("should return a JSON object", async () => {
      const expectedBody = await db("users");

      const response = await request(server).get("/api/auth/register");
      expect(response.body.username).toBe(expectedBody.username);
    });

    it("should return status 200 for login route", async () => {
        const expectedStatus = 200;

        const response = await request(server)
        .post("/api/auth/login")
        .send({ username: "rahul", password: "patel"})

        expect(response.status).toBe(expectedStatus)
    })
  });
});
