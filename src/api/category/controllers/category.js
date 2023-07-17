"use strict";

/**
 * category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async find(ctx) {
      const categories = await strapi.service("api::category.category").find({
        pagination: {
          pageSize: 10000,
        },
      });

      return categories.results;
    },
  })
);
