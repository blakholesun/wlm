import './css/angular-material.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import routing from './app.routeConfig';
import materialConfig from './app.materialConfig';
import routes from './app.routes';

import {homeComponentName, homeComponent} from './home/home.component';

import {patientServiceName, Patient} from './services/patient.service'
console.log("HI");

angular
    .module('wlm', [
        uirouter,
        ngAnimate,
        ngAria,
        ngMaterial
    ])
    .config(routing)
    .config(routes)
    .config(materialConfig)
    .component(homeComponentName, homeComponent)
    .service(patientServiceName, Patient);