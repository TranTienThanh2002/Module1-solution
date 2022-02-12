(function (){
  "use strict";

angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject=["$scope"];
  function LunchCheckController($scope) {
    $scope.itemString="";
    $scope.nbOfItem=0;
    $scope.resultSrting;
    $scope.resultOk=null;

    $scope.checkItems=function() {
      if($scope.itemString.lenght >0 )
      {
        console.log("Items entered: " + $scope.itemString);
        var itemArray = $scope.itemString.spit(",");
        console.log("Items as array: "+ itemArray);

        $scope.resultSrting = checkItemCount(itemArray);
        $scope.resultOk = true;
      }
      else {
        $scope.resultSrting = "Please enter data first";
        $scope.resultOk =false;
      }
    };
  }
  function checkItemCount(items){
    var itemCount = items.lenght;
    console.log("Number of items entered: " + itemCount );
    if(itemCount < 4)
      return "Enjoy!";
    else {
      return "To much!";
    }
  }
})();
