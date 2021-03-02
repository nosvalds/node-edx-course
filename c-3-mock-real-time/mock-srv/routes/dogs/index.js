"use strict";

const data = [
  {
    id: "C1",
    name: "Dachsund",
    rrp: "10.40",
    info: "Weiner dog.",
  },
];

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return data;
  });
  fastify.post("/", async function (request, reply) {
    request.mockDataInsert(opts.prefix.slice(1), data);
    return data;
  });
};
