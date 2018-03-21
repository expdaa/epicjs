(function () {

    angular
        .module("epicJS")
        .controller("LandingController", LandingController);

    LandingController.$inject = ['FileService'];


    function LandingController(FileService) {
        var vm = this;
     
        vm.data;

   



        vm.FileService = FileService;
        vm.downloadTemplate = downloadTemplate;


        function downloadTemplate(tplName) {

           

            //    FileService.getTemplate();

             window.open('/templates/' + tplName, '_blank', '');

        }


    }

})();






