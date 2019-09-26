const Users = require("./users-model.js")
const db = require("../database/db-config.js")

describe("users-model.js", () => {
    beforeEach(async () => {
        await db("users").truncate();
    })

    it("should set environment to testing", () => {
        expect(process.env.DB_ENV).toBe("testing")
    })

    describe("add()", () => {
        it("should add user into the db", async () => {
            await Users.add({
                username:"neha",
                password: "patel"
            })

            let users = await db("users")

            expect(users).toHaveLength(1)
        })
    })

})