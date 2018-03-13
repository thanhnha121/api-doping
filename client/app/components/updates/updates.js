import angular from 'angular';
import uiRouter from 'angular-ui-router';
import updatesComponent from './updates.component';
import UpdatesService from './updates.service';

let updatesModule = angular.module('updates', [
  uiRouter
])



  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('updates', {
        url: '/updates',
        component: 'updates'
      });
  })


  .component('updates', updatesComponent)
  .service('UpdatesService', UpdatesService)
  .name;

export default updatesModule;
