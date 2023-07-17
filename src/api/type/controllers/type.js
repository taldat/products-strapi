"use strict";

/**
 * type controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::type.type", ({ strapi }) => ({
  async find(ctx) {
    const types = await strapi.service("api::type.type").find({
      pagination: {
        pageSize: 10000,
      },
    });

    return types.results;
  },
}));
