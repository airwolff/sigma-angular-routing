var app = angular.module('myApp', ['ngRoute', 'ngYoutubeEmbed']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/robot' ,{
      templateUrl: '/views/templates/robot.html',
      controller: 'RobotController',
      controllerAs: 'robot'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('RobotController', ['$scope', function($scope) {
  console.log('self aware robot is running');
  $scope.link = 'https://youtu.be/ByGycK_Igqk';

}]);
