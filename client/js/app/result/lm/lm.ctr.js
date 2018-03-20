(function () {

    angular
        .module("epicJS")
        .controller("LMController", LMController)


    LMController.$inject = ['lmResource', '$scope'];


    function LMController(lmResource, $scope) {
        var vm = this;

        vm.lmResource = lmResource;

        $scope.first_labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.first_series = ['Series A', 'Series B'];
        $scope.first_data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

      

        $scope.first_datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.first_options = {
          
            elements: {
                line:
                    {
                        fill: false
                    }
            },
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left',
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right',
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }
                ],

                //https://stackoverflow.com/questions/36676263/chart-js-v2-hiding-grid-lines
                xAxes: [
                    {
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }   
                    }
                ]
            }
        };






    }

})();






