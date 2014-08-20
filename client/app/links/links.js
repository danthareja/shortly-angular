angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
    $scope.data = {};
    $scope.getLinks = function(){
      console.log('LinksController called getLinks('+JSON.stringify(arguments)+').');
    };
    $scope.getLinks();
});
