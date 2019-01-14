angular.module('myApp', ['ionic'])

.controller('AppController', function($scope, $interval, $ionicSlideBoxDelegate) {
 $scope.mData = [];
  for(var i = 0; i<100; i++){
    $scope.mData.push(i);
    
  }
  $scope.options = {
  loop: false,
  autoHeight:true,
  speed: 500,
}
 
  $scope.data = {};
	$scope.$watch('data.slider',function(nv, ov) {
 	$scope.slider = $scope.data.slider;
			//console.log($scope.slider);
			})
  
   


})