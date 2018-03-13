import angular from 'angular';
import uiRouter from 'angular-ui-router';
import likeApiComponent from './likeApi.component';
import LikeApiService from './likeApi.service';

let likeApiModule = angular.module('likeApi', [
  uiRouter
])

.component('likeApi', likeApiComponent)
.service('LikeApiService', LikeApiService)
.name;

export default likeApiModule;
