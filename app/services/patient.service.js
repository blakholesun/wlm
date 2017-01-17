export const patientServiceName = 'patientService';

export class Patient{

    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.patients = [];
    }

    // setPatients(){
    //     return this.$http.get('php/wlmAPI/patients')
    //         .then((response) => {
    //             var temp = response.data.list;
    //             this.patients = temp.map((patient)=>{
    //                 patient.MedReadyDue = new Date(patient.MedReadyDue.split(' '));
    //                 patient.SGASCreationDate = new Date(patient.SGASCreationDate);
    //                 patient.SGASDueDateTime = new Date(patient.SGASDueDateTime);
    //                 patient.CTDate = new Date(patient.CTDate);
    //                 return patient;
    //             })
    //         });
    // }

    setPatients(){
        return Promise.resolve(
        this.patients = [
            { PLastName: 'Austin', PatientId: '1', Diagnosis: 'diagnosis', Priority: "CodeA",
                MedReadyDue: "Due1", DaysOnWL: "3", SGASDueDateTime: "Time", DosiDate: "Other",
                CTDate: "Date5", MRCT: "MRCT", CurrentTask: "Taskerion", SGASActivityCode: "Yes",
                Comments: "WOOOOO", LastName: "Awesome"},
            { PLastName: 'Austin', PatientId: '2', Diagnosis: 'diagnosis', Priority: "CodeA",
                MedReadyDue: "Due1", DaysOnWL: "3", SGASDueDateTime: "Time", DosiDate: "Other",
                CTDate: "Date5", MRCT: "MRCT", CurrentTask: "Taskerion", SGASActivityCode: "Yes",
                Comments: "WOOOOO", LastName: "Awesome"},
            { PLastName: 'Austin', PatientId: '3', Diagnosis: 'diagnosis', Priority: "CodeA",
                MedReadyDue: "Due1", DaysOnWL: "3", SGASDueDateTime: "Time", DosiDate: "Other",
                CTDate: "Date5", MRCT: "MRCT", CurrentTask: "Taskerion", SGASActivityCode: "Yes",
                Comments: "WOOOOO", LastName: "Awesome"},
            { PLastName: 'Austin', PatientId: '4', Diagnosis: 'diagnosis', Priority: "CodeA",
                MedReadyDue: "Due1", DaysOnWL: "3", SGASDueDateTime: "Time", DosiDate: "Other",
                CTDate: "Date5", MRCT: "MRCT", CurrentTask: "Taskerion", SGASActivityCode: "Yes",
                Comments: "WOOOOO", LastName: "Awesome"},
            { PLastName: 'Austin', PatientId: '5', Diagnosis: 'diagnosis', Priority: "CodeA",
                MedReadyDue: "Due1", DaysOnWL: "3", SGASDueDateTime: "Time", DosiDate: "Other",
                CTDate: "Date5", MRCT: "MRCT", CurrentTask: "Taskerion", SGASActivityCode: "Yes",
                Comments: "WOOOOO", LastName: "Awesome"},
            { PLastName: 'Austin', PatientId: '6', Diagnosis: 'diagnosis', Priority: "CodeA",
                MedReadyDue: "Due1", DaysOnWL: "3", SGASDueDateTime: "Time", DosiDate: "Other",
                CTDate: "Date5", MRCT: "MRCT", CurrentTask: "Taskerion", SGASActivityCode: "Yes",
                Comments: "WOOOOO", LastName: "Awesome"},
        ]);
    }

    getPatientList(){
        console.log(this.patients);
        return this.patients;
    }

    getSinglePatient(patientId){
        return this.$http.get('api/patient/'+patientId);
    }
}

