'use strict';

/**
 * kebab service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kebab.kebab');
