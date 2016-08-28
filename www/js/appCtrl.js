app.controller('AppCtrl', function($scope, $timeout, appService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.regId = localStorage.getItem('regId');
  // appService.getReg();

  /*$timeout(function () {
    var reg = appService.getReg()
   // alert(reg);
    $scope.regId = reg;
  }, 5000);
*/
});
