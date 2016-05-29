'use strict';

/**
 * LandingPage1Controller
 *
 * @description :: Server-side logic for managing Landingpage1s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function index(request, response) {
    return response.view('index', {
      currentDate: new Date().toString()
    });
  }
};