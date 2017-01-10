export const patientServiceName = 'patientService';

export class Patient{

    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.patients = [];
    }

    // setPatients(){
    //     return this.$http.get('api/patients')
    //         .then((response) => {
    //             this.patients = response.data;
    //         });
    // }

    setPatients(){
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
    }

    getPatientList(){
        console.log(this.patients);
        return this.patients;
    }

    getSinglePatient(patientId){
        return this.$http.get('api/patient/'+patientId);
    }
}

