import './css/angular-material.css';
import './css/dataTable.css';
import './css/material.css';
import './css/md-data-table-style.css'

import 'jquery';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import dataTable from 'angular-data-table';
import ngFileSaver from 'angular-file-saver';
import ngSanitize from 'angular-sanitize';
import mdDataTable from 'md-data-table';
import 'lodash';

import routing from './app.routeConfig';
import materialConfig from './app.materialConfig';
import routes from './app.routes';

import {homeComponentName, homeComponent} from './home/home.component';
import PatientController from './home/patient.controller';

import {patientServiceName, Patient} from './services/patient.service'

angular
    .module('wlm', [
        uirouter,
        ngAnimate,
        ngAria,
        ngMaterial,
        dataTable.name,
        ngFileSaver,
        ngSanitize,
        mdDataTable
    ])
    .config(routing)
    .config(routes)
    .config(materialConfig)
    .component(homeComponentName, homeComponent)
    .controller('PatientController', PatientController)
    .service(patientServiceName, Patient);