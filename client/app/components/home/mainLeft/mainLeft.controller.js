class MainLeftController {
  constructor($rootScope, $timeout, $interval, $state, MainLeftService) {
    this.mainLeftService = MainLeftService;
    this.name = 'mainLeft';
  }
}

MainLeftController.$inject = [
  '$rootScope', '$timeout', '$interval', '$state', 'MainLeftService'
];

export default MainLeftController;
