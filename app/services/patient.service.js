export const patientServiceName = 'patientService';

export class Patient{

    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.patients = [];
    }

    setPatients(){
        return this.$http.get('php/wlmAPI/patients')
            .then((response) => {
                var temp = response.data.list;
                this.patients = temp.map((patient)=>{
                    patient.MedReadyDue = new Date(patient.MedReadyDue.split(' '));
                    patient.SGASCreationDate = new Date(patient.SGASCreationDate);
                    patient.SGASDueDateTime = new Date(patient.SGASDueDateTime);
                    patient.CTDate = new Date(patient.CTDate);
                    return patient;
                })
            });
    }

    /*setPatients(){
        this.patients = undefined;
        //     { name: 'Austin', id: '1234567', diagnosis: 'diagnosis' },
        //     { name: 'Marjan', id: '1234567', diagnosis: 'diagnosis' },
        //     { name: 'Austin', id: '1234567', diagnosis: 'diagnosis' },
        //     { name: 'Marjan', id: '1234567', diagnosis: 'diagnosis' },
        //     { name: 'Austin', id: '1234567', diagnosis: 'diagnosis' },
        //     { name: 'Marjan', id: '1234567', diagnosis: 'diagnosis' },
        //     { name: 'Austin', id: '1234567', diagnosis: 'diagnosis' },
        //     { name: 'Marjan', id: '1234567', diagnosis: 'diagnosis' }
        // ];
    }*/

    getPatientList(){
        console.log(this.patients);
        return this.patients;
    }

    getSinglePatient(patientId){
        return this.$http.get('api/patient/'+patientId);
    }
}

