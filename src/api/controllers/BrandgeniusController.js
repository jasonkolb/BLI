/**
 * BrandgeniusController
 *
 * @description :: Server-side logic for managing brandgeniuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function( request, response){
    return response.view('brandgenius', {
      currentDate: (new Date()).toString()
    })
  }
};
