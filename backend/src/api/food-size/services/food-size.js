'use strict';

/**
 * food-size service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-size.food-size');
