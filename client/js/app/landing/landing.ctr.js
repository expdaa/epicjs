(function () {

    angular
        .module("epicJS")
        .controller("LandingController", LandingController);

    LandingController.$inject = ['FileService','$scope'];


    function LandingController(FileService,$scope) {
        var vm = this;
     
        vm.data;

        vm.FileService = FileService;
        vm.downloadTemplate = downloadTemplate;


        function downloadTemplate(tplName) {
             window.open('/templates/' + tplName, '_blank', '');
        }


        /**
         * XLXS library functions
         */

        /* processing array buffers, only required for readAsArrayBuffer */
        function fixdata(data) {
            var o = "", l = 0, w = 10240;
            for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
            o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
            return o;
        }

        var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
        /* set up drag-and-drop event */
        function handleDrop(e) {

            e.stopPropagation();
            e.preventDefault();
            var files = e.dataTransfer.files;
            var i, f;

            console.log(files);
            console.log(e.dataTransfer);


            for (i = 0; i != files.length; ++i) {
                f          = files[i];

                vm.file    = files[i];

                var reader = new FileReader();

                var name      = f.name;
                reader.onload = function (e) {


                    var data = e.target.result;

                    var workbook;
                    if (rABS) {
                        /* if binary string, read with type 'binary' */
                        //https://github.com/SheetJS/js-xlsx/issues/134 - to use dates
                        workbook = XLSX.read(data, {type: 'binary', cellDates: true});
                    } else {
                        /* if array buffer, convert to base64 */
                        var arr  = fixdata(data);
                        workbook = XLSX.read(btoa(arr), {type: 'base64', cellDates: true});
                    }

                    /* DO SOMETHING WITH workbook HERE */

                    var first_sheet_name = workbook.SheetNames[0];

                   

                    /* Get worksheet */
                    var worksheet = workbook.Sheets[first_sheet_name];

                    console.log(worksheet);


                    var test = XLSX.utils.sheet_to_row_object_array(worksheet);
                    console.log(test);

                    var testJSON = XLSX.utils.sheet_to_json(worksheet);

                    console.log(XLSX.utils.sheet_to_json(worksheet));

                    console.log(testJSON);

                    // test[0].color = "ok";
                    // console.log(Number(test[0].Airline));


                    // $scope.$apply(function () {
                    //     vm.processing = false;
                    //     vm.data       = XLSX.utils.sheet_to_json(worksheet);

                    //     // setting round number that comes from the path/round parameters
                    //     for (let i = 0; i < vm.data.length; i++) {
                    //         vm.data[i].roundNum = $routeParams.roundNum;
                    //     }
                    //     // vm.data = XLSX.utils.sheet_to_json(worksheet,{header:1});
                    //     console.log(vm.data);
                    // });


                };
                if (rABS) reader.readAsBinaryString(f);
                else reader.readAsArrayBuffer(f);
            }



        }


        /**
         * Functions to handle drag and drop of excel sheets
         */
        function handleDropVisual() {
            vm.processing = true;
        }

        function handleDragover(e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        }

        function handleMouseDown(e) {
            console.log("works");
        }

        //get a handle on the dropArea in the document
        var dropId              = document.getElementById('dropArea');

        if (dropId.addEventListener) {
            dropId.addEventListener('dragenter', handleDragover, false);
            dropId.addEventListener('dragover', handleDragover, false);
            dropId.addEventListener('drop', handleDropVisual, false);
            dropId.addEventListener('drop', handleDrop, false);
            dropId.addEventListener('mousedown', handleMouseDown, false)

        }





    }

})();






