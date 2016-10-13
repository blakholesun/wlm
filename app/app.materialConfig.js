/*App Configurations*/
materialConfig.$inject = ['$mdThemingProvider'];

export default function materialConfig($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-orange')
            .accentPalette('grey');
}



