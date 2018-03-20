'use strict';
(function () {

    angular
        .module("epicJS")
        .controller("LMController", LMController)


    LMController.$inject = ['lmResource', '$scope'];


    function LMController(lmResource, $scope) {
        var vm = this;

        vm.lmResource = lmResource;

               



        var jsonReturn = ({"coords":[{"id":1,"x":3.87,"y":4.87},{"id":2,"x":3.61,"y":3.93},{"id":3,"x":4.33,"y":6.46},{"id":4,"x":3.43,"y":3.33},{"id":5,"x":3.81,"y":4.38},{"id":6,"x":3.83,"y":4.7},{"id":7,"x":3.46,"y":3.5},{"id":8,"x":3.76,"y":4.5},{"id":9,"x":3.5,"y":3.58},{"id":10,"x":3.58,"y":3.64},{"id":11,"x":4.19,"y":5.9},{"id":12,"x":3.78,"y":4.43},{"id":13,"x":3.71,"y":4.38},{"id":14,"x":3.73,"y":4.42},{"id":14,"x":3.78,"y":4.25}],"intercept":-8.4761,"const":3.4311})

var lineY = [];
var lineX = [];
var plotY = [];

for (let i = 0; i < jsonReturn.coords.length; i++) {
	let slope = jsonReturn.const;
  let int = jsonReturn.intercept;
  lineY[i] = slope * jsonReturn.coords[i].x + int;
	lineX[i] = jsonReturn.coords[i].x;
  plotY[i] = jsonReturn.coords[i].y;
}

var plotX = lineX;


// plotly js portion

var trace1 = {
  x: plotX,
  y: plotY,
  name: 'Data',
  mode: 'markers'
};

var trace2 = {
  x: lineX,
  y: lineY,
  name: 'Regression',
  mode: 'lines'
};


        $scope.plData = [ trace1, trace2];
        $scope.plLayout = {};
        $scope.plOptions = {};






    }

})();





