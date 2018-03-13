class AboutController {
  constructor($rootScope, $timeout, $interval, $state, AboutService) {
    this.aboutService = AboutService;
    this.name = 'about';
  }
}

AboutController.$inject = [
  '$rootScope', '$timeout', '$interval', '$state', 'AboutService'
];

export default AboutController;
