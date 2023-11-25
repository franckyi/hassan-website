'use strict';

/**
 * business-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-info.business-info');
