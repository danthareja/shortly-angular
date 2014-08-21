angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  console.log(Links);
  $scope.addLink = function(link) {
    Links.addLink(link)
      .then(function() {
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
