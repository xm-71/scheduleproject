
// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {

  // connect to firebase
  var ref = new Firebase("https://scheduler-c3dfc.firebaseio.com/days");  
  var fb = $firebase(ref);

  // sync as object
  var syncObject = fb.$asObject();

  // three way data binding
  syncObject.$bindTo($scope, 'days');

});
