(function () {

    angular
        .module("epicJS")
        .controller("LMController", LMController)
        .config(['ChartJsProvider', function (ChartJsProvider) {
            // Configure all charts
            ChartJsProvider.setOptions({
                chartColors: ['#FF5252', '#d0d0d0'],
                responsive: false
            });
            // Configure all line charts
            ChartJsProvider.setOptions('line', {
                showLines: true
            });
        }]);

    LMController.$inject = ['lmResource'];


    function LMController(lmResource) {
        var vm = this;

        vm.lmResource = lmResource;


        vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
        vm.series = ['Series A', 'Series B'];
        vm.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        vm.onClick = function (points, evt) {
            console.log(points, evt);
        };





    }

})();






