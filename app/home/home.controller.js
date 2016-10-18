export default class HomeController {
    constructor(patientService){
        this.patientService = patientService;
        this.hello = 'Hello World!';
        this.patients = [
            { name: 'Austin', gender: 'Male' },
            { name: 'Marjan', gender: 'Male' }
        ];
        this.options = {
            rowHeight: 100,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            selectable: false
        };

    }

    getPatients(){
        this.patients = this.patientService.getPatients();
    }
}