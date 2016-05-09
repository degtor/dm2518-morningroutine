morningRoutine.controller("loginCtrl", function($scope, $routeParams, backend) {

  $scope.login = function() {
    $scope.user = backend.getUserID();
    $scope.thisDate = backend.getDate();
  };

});
