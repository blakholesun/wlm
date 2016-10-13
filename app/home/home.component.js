import HomeController from './home.controller';

export const homeComponentName = 'homeComponent';

export const homeComponent = {
    template : require('./home.template.html'),
    controller : HomeController,
    controllerAs : 'home'
};