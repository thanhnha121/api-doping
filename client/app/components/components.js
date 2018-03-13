import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Blogs from './blogs/blogs';
import Updates from './updates/updates';

let componentModule = angular.module('app.components', [
  Home,
  Blogs,
  Updates,
  About
])

  .name;

export default componentModule;
