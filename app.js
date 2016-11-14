(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController)

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.message = "";

    // Count number of dishes and update message
    $scope.countDishes = function () {
      var numberOfDishes = 0;
      var dishesInput = $scope.dishes;

      if (dishesInput.length != 0) {
        var dishesArray = dishesInput.split(",");

        for (var index = 0; index < dishesArray.length; index++) {
          //Don't consider empty item
          if (dishesArray[index].length != 0) {
            numberOfDishes++;
          }
        }
      }

      $scope.message = getMessage(numberOfDishes);
    }
  }

  // Return message based on number passed in argument
  function getMessage(number) {
    var message = "";

    if (number == 0) {
      message = "Please enter data first";
    } else if (number <= 3 ) {
      message = "Enjoy!";
    } else {
      message = "Too Much!"
    }

    return message;
  }

})();
