export default class HomeController {
    constructor(patientService, FileSaver, $mdDialog){
        this.patientService = patientService;
        this.patients = [];
        this.FileSaver= FileSaver;
        this.$mdDialog = $mdDialog;

        // Table options
        this.options = {
            rowHeight: 100,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            selectable: true,
            columns: [{
                name: "Name"
            }, {
                name: "ID"
            }, {
                name: "Diagnosis"
            }, {
                name: "Diagnosis Details"
            }, {
                name: "Priority"
            }, {
                name: "MR Date"
            }, {
                name: "Days on WL"
            }, {
                name: "SGAS Target"
            }, {
                name: "Dosimetry Date"
            }, {
                name: "CT Date"
            }, {
                name: "MR -> CT"
            }, {
                name: "Days Elapsed"
            }, {
                name: "Current Step"
            }, {
                name: "Hors Service"
            }, {
                name: "Comments"
            }, {
                name: "Oncologist"
            }]
        };

        this.patientService.setPatients();
        this.getPatients();

    }



    getPatients(){
        console.log("called get patients");
        this.patients = this.patientService.getPatientList();
    }

    openPatient(patientID){
        this.patient = this.patientService.getSinglePatient(patientID);
    }

    onRowClick(row) {
        this.$mdDialog.show({
            template: require('./patientProfile.html'),
            parent: angular.element(document.body),
            //targetEvent: ev,
            clickOutsideToClose:true,
            //fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    }

    exportToCSV(){
        let dataString="";
        let csvContent ="";
        this.options.columns.forEach((column, index, array) => {
            if ( index == array.length-1 ) {
                csvContent += column.name + "\n"
            } else {
                csvContent += column.name + ",";
            }
        });

        this.patients.forEach((patient) => {
            dataString = Object.values(patient).join(",");
            csvContent += dataString+ "\n";
        });

        let blob = new Blob([csvContent], {type: "data:text/csv;charset=utf-8,"});
        let filename = "WaitList-" + (new Date()).toDateString().replace(/( )/g,"") + ".csv";
        this.FileSaver.saveAs(blob, filename);
    }
}