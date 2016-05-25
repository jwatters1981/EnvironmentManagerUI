'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

    .controller('View2Ctrl', function View2Ctrl($scope, $http) {

      $http.get('http://localhost:8091/env').
      success(function(data, status, headers, config) {
        $scope.envs = data;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
    });