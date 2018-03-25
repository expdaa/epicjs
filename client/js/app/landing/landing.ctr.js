(function () {

    angular
        .module("epicJS")
        .controller("LandingController", LandingController);

    LandingController.$inject = ['FileService', '$scope', 'DataService'];


    function LandingController(FileService, $scope, DataService) {
        var vm = this;

        /** Variables */
        vm.sheetData;

        /** Functions */
        vm.downloadTemplate = downloadTemplate;

        /** Services */
        vm.FileService = FileService;




        /**
         * Builds the API URL to download a specific template
         * @param {*} tplName name of the template
         */
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
                f = files[i];
                vm.file = files[i];

                var reader = new FileReader();
                var name = f.name;
                reader.onload = function (e) {
                    var data = e.target.result;
                    var workbook;
                    if (rABS) {
                        /* if binary string, read with type 'binary' */
                        //https://github.com/SheetJS/js-xlsx/issues/134 - to use dates
                        workbook = XLSX.read(data, { type: 'binary', cellDates: true });
                    } else {
                        /* if array buffer, convert to base64 */
                        var arr = fixdata(data);
                        workbook = XLSX.read(btoa(arr), { type: 'base64', cellDates: true });
                    }

                    /* DO SOMETHING WITH workbook HERE */
                    var first_sheet_name = workbook.SheetNames[0];
                    /* Get worksheet */
                    var worksheet = workbook.Sheets[first_sheet_name];
                    // var test = XLSX.utils.sheet_to_row_object_array(worksheet);
                    var testJSON = XLSX.utils.sheet_to_json(worksheet);




                    $scope.$apply(function () {
                        //     vm.processing = false;
                        vm.sheetData = XLSX.utils.sheet_to_json(worksheet);


                        console.log(vm.sheetData);
                        var parsedData = [];

                        vm.sheetData.forEach((obj, idx) => {
                            if (obj.x !== "(independent variable)") {
                                parsedData.push({
                                    id: idx,
                                    x: obj.x,
                                    y: obj.y
                                });
                            }
                        });

                        DataService.persistTplData(parsedData);


                    });


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
        var dropId = document.getElementById('dropArea');

        if (dropId.addEventListener) {
            dropId.addEventListener('dragenter', handleDragover, false);
            dropId.addEventListener('dragover', handleDragover, false);
            dropId.addEventListener('drop', handleDropVisual, false);
            dropId.addEventListener('drop', handleDrop, false);
            dropId.addEventListener('mousedown', handleMouseDown, false)

        }





    }

})();






