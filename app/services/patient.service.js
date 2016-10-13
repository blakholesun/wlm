export const patientServiceName = 'patientService';

export class Patient{

    constructor($http) {
        'ngInject';
        this.$http = $http;
    }

    getPatients(){
        return this.$http.get('backend/url');
    }

    getPatient(patientId){
        return this.$http.get('backend/url/patientid');
    }
}

