angular.module('myApp', []);

angular.module('myApp')
  .controller('MultiplcationController', ['$scope', '$attrs', function($scope, $attrs) {
    // $scope.numbers = [1,2,3,4,5,6,7,8,9,10];
    $attrs.initialNumberLimit;

    function populateNumbers(x) {
      var numbers = [];
      for(var i = 1; i <= x; i++) {
        numbers.push(i);
      };
      return numbers;
    }
    $scope.numberLimit = $attrs.initialNumberLimit || 10;
    $scope.numbers = populateNumbers($scope.numberLimit);
    console.log($scope.numbers);
    
  }]);
