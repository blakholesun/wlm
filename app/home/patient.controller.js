export default class PatientController{
    constructor($mdDialog, patient, patientService) {
        this.patient = patient;
        this.$mdDialog = $mdDialog;
        this.patientService = patientService;
        this.loading = true;

        this.getPatientProfile(patient.id);
    }

    getPatientProfile(patientID){
        // this.patientService.getSinglePatient(patientID)
        //     .then((response)=>{
        //         this.patient.profile = response.data;
        //         this.loading = false;
        //     })
    }

    closeDialog(){
        this.$mdDialog.hide();
    }
}