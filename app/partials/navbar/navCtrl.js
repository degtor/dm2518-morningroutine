morningRoutine.controller("navCtrl", function($scope, $routeParams, backend) {
  console.log("I am navbar!");
  $scope.user = backend.getUserID();
  $scope.thisDate = backend.getDate();

});
