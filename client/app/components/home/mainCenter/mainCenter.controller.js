class MainCenterController {
  constructor($rootScope, $timeout, $interval, $state, MainCenterService) {
    this.mainCenterService = MainCenterService;
    this.name = 'mainCenter';
  }
}

MainCenterController.$inject = [
  '$rootScope', '$timeout', '$interval', '$state', 'MainCenterService'
];

export default MainCenterController;
