class NewApiController {
  constructor($rootScope, $timeout, $interval, $state, NewApiService) {
    this.newApiService = NewApiService;
    this.name = 'newApi';
  }
}

NewApiController.$inject = [
  '$rootScope', '$timeout', '$interval', '$state', 'NewApiService'
];

export default NewApiController;
