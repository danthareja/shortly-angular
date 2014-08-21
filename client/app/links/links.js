angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
    $scope.data = {};
    $scope.getLinks = function(){
      Links.getLinks()
        .then(function(links) {
          console.log('response from getLinks',links);
          $scope.data = links;
        })
        .catch(function (error) {
          console.error(error);
        });
    };
});
