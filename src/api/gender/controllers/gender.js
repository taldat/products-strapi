"use strict";

/**
 * gender controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::gender.gender", ({ strapi }) => ({
  async find(ctx) {
    const genders = await strapi.service("api::gender.gender").find({
      pagination: {
        pageSize: 10000,
      },
    });

    return genders.results;
  },
}));
