angular.module('myApp', []);

angular.module('myApp')
  .controller('MultiplcationController', ['$scope', '$attrs', function($scope, $attrs) {

    function populateNumbers(x) {
      var numbers = [];
      for(var i = 1; i <= x; i++) {
        numbers.push(i);
      };
      return numbers;
    }

    $scope.compute = function(a, b) {
      return a * b;
    };

    $scope.$watch('numberLimit', function(newNumberLimit) {
      $scope.numbers = populateNumbers(newNumberLimit);
    });
    $scope.numberLimit = $attrs.initialNumberLimit || 10;

    var activeRow, activeCol;
    $scope.setActiveFactors = function(row, col) {
      activeRow = row;
      activeCol = col;
    };

    $scope.matchesFactor = function(row, col) {
      return row === activeRow || col === activeCol;
    };


  }]);
