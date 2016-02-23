angular.module('pomoDoro')
.controller('navController', [
'$scope',
'$state',
'Auth',
function($scope, $state, Auth){
  $scope.signedIn = Auth.isAuthenticated;
  $scope.signOut = Auth.logout;
  Auth.currentUser().then(function (user){
    $scope.user = user;
  });
  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });
  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });
  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
    $state.go('signin');
  });
}]);
