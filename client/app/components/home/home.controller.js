class HomeController {
  constructor($rootScope, $timeout, $interval, $state, HomeService) {
    this.homeService = HomeService;
    this.name = 'home';
  }
}

HomeController.$inject = [
  '$rootScope', '$timeout', '$interval', '$state', 'HomeService'
];

export default HomeController;
