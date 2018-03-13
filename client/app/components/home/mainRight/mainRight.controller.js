class MainRightController {
  constructor($rootScope, $timeout, $interval, $state, MainRightService) {
    this.mainRightService = MainRightService;
    this.name = 'mainRight';
  }
}

MainRightController.$inject = [
  '$rootScope', '$timeout', '$interval', '$state', 'MainRightService'
];

export default MainRightController;
