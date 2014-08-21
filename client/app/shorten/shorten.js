angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  console.log(Links);
  $scope.addLink = Links.addLink;
});
