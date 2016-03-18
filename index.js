'use strict';

var controllers = {

  base: require('hof').controllers.base,
  error: require('hof').controllers.error,
  date: require('hof').controllers.date,
  ajax: require('./lib/controllers/ajax-controller.js'),
  ajax_edit: require('./lib/controllers/ajax-edit-controller.js'),
  reset: require('./lib/controllers/reset.js'),
  logger: require('./lib/controllers/logger.js')
  
};

module.exports = {
  controllers: controllers,
  template: require('hof').template,
  wizard: require('hof').wizard,
  toolkit: require('hof').toolkit,
  mixins: require('hof').mixins
};
