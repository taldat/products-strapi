"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    const { category, gender, type } = ctx.query;

    const filters = {};

    if (category) filters.category = category;
    if (gender) filters.gender = gender;
    if (type) filters.type = type;

    const products = await strapi.service("api::product.product").find({
      filters,
      pagination: {
        pageSize: 10000,
      },
    });

    return products.results;
  },
}));
