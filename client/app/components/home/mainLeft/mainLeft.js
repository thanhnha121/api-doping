import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainLeftComponent from './mainLeft.component';
import MainLeftService from './mainLeft.service';

let mainLeftModule = angular.module('mainLeft', [
  uiRouter
])

.component('mainLeft', mainLeftComponent)
.service('MainLeftService', MainLeftService)
.name;

export default mainLeftModule;
