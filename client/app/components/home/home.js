import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import HomeService from './home.service';
import mainLeft from './mainLeft/mainLeft';
import mainCenter from './mainCenter/mainCenter';
import mainRight from './mainRight/mainRight';

let homeModule = angular.module('home', [
    uiRouter,
    mainLeft,
    mainCenter,
    mainRight,
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        component: 'home'
      });
  })

  .component('home', homeComponent)
  .service('HomeService', HomeService)
  .name;

export default homeModule;
