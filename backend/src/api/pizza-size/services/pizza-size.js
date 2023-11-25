'use strict';

/**
 * pizza-size service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pizza-size.pizza-size');
