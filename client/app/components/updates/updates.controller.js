class UpdatesController {
  constructor($rootScope, $timeout, $interval, $state, UpdatesService) {
    this.updatesService = UpdatesService;
    this.name = 'updates';
  }
}

UpdatesController.$inject = [
  '$rootScope', '$timeout', '$interval', '$state', 'UpdatesService'
];

export default UpdatesController;
