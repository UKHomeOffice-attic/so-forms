'use strict';

var controllers = {

  ajax: require('./lib/controllers/ajax-controller.js'),
  ajax_edit: require('./lib/controllers/ajax-edit-controller.js'),
  base: require('./lib/controllers/base-controller.js'),
  error: require('./lib/controllers/base-error.js'),
  date: require('./lib/controllers/date-controller.js'),
  edit: require('./lib/controllers/edit-controller.js'),
  logger: require('./lib/controllers/logger.js'),
  start: require('./lib/controllers/start-controller.js')
  
};

module.exports = {
  controllers: controllers,
  template: require('hmpo-govuk-template')
};
