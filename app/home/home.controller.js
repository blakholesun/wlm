export default class HomeController {
    constructor(patientService){
        this.patientService = patientService;
        this.hello = 'Hello World!';
        this.patients = [
            { name: 'Austin', id: '1234567', diagnosis: 'diagnosis' },
            { name: 'Marjan', id: '1234567', diagnosis: 'diagnosis' },
            { name: 'Austin', id: '1234567', diagnosis: 'diagnosis' },
            { name: 'Marjan', id: '1234567', diagnosis: 'diagnosis' },
            { name: 'Austin', id: '1234567', diagnosis: 'diagnosis' },
            { name: 'Marjan', id: '1234567', diagnosis: 'diagnosis' },
            { name: 'Austin', id: '1234567', diagnosis: 'diagnosis' },
            { name: 'Marjan', id: '1234567', diagnosis: 'diagnosis' }
        ];
        this.options = {
            rowHeight: 100,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            selectable: true
        };

    }

    getPatients(){
        this.patients = this.patientService.getPatients();
    }
}