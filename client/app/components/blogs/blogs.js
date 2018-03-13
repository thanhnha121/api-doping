import angular from 'angular';
import uiRouter from 'angular-ui-router';
import blogsComponent from './blogs.component';
import BlogsService from './blogs.service';

let blogsModule = angular.module('blogs', [
  uiRouter
])


  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('blogs', {
        url: '/blogs',
        component: 'blogs'
      });
  })

  .component('blogs', blogsComponent)
  .service('BlogsService', BlogsService)
  .name;

export default blogsModule;
