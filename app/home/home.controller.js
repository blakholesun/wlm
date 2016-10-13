export default class HomeController {
    constructor(patientService){
        this.patientService = patientService;
        this.hello = 'Hello World!';
        this.patients = [];
    }

    getPatients(){
        this.patients = this.patientService.getPatients();
    }
}