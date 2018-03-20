'use strict';
(function () {

    angular
        .module("epicJS")
        .controller("LMController", LMController)


    LMController.$inject = ['lmResource', '$scope'];


    function LMController(lmResource, $scope) {
        var vm = this;

        vm.lmResource = lmResource; //JSON from the /lm call

        var jsonReturn = lmResource;

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


        $scope.plData = [trace1, trace2];
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






