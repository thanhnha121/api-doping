import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainCenterComponent from './mainCenter.component';
import MainCenterService from './mainCenter.service';

let mainCenterModule = angular.module('mainCenter', [
  uiRouter
])

.component('mainCenter', mainCenterComponent)
.service('MainCenterService', MainCenterService)
.name;

export default mainCenterModule;
