angular.module('starter.services', [])
	.factory('User', function() {

    var loggedIn = false;

		return {

			login: function(credentials) {
        // as an example only: accept any login where the password is at least 3 characters
        if (credentials.password.length > 2) {
          loggedIn = true;
          return true;
        }
        return false;
			},

			isLoggedIn: function() {
        return loggedIn;
      }

		};
	});
