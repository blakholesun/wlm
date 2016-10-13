routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    // State definitions
    let states = [
        {
            name: 'home',
            url: '/',
            component: 'homeComponent',
            /*resolve: {
                home: function(PatientService) {
                    return PatientService.getAllPatients();
                }
            }*/
        },

        {
            name: 'patient',
            // This state takes a URL parameter called personId
            url: '/patient/{patientId}',
            component: 'person',
            // This state defines a 'person' resolve
            // It delegates to the PeopleService, passing the personId parameter
            resolve: {
                patient: function(PatientService, $transition$) {
                    return PatientService.getPatient($transition$.params().personId);
                }
            }
        }
    ];

    // Loop over the state definitions and register them
    states.forEach(function(state) {
        $stateProvider.state(state);
    });
}