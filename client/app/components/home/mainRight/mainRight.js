import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainRightComponent from './mainRight.component';
import MainRightService from './mainRight.service';
import newApi from './newApi/newApi';
import likeApi from './likeApi/likeApi';

let mainRightModule = angular.module('mainRight', [
  uiRouter,
  newApi,
  likeApi,
])

  .component('mainRight', mainRightComponent)
  .service('MainRightService', MainRightService)
  .name;

export default mainRightModule;
