import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newApiComponent from './newApi.component';
import NewApiService from './newApi.service';

let newApiModule = angular.module('newApi', [
  uiRouter
])

.component('newApi', newApiComponent)
.service('NewApiService', NewApiService)
.name;

export default newApiModule;
