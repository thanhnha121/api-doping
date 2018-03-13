class <%= upCaseName %>Controller {
  constructor($rootScope, $timeout, $interval, $state, <%= upCaseName %>Service) {
    this.<%= name %>Service = <%= upCaseName %>Service;
    this.name = '<%= name %>';
  }
}

<%= upCaseName %>Controller.$inject = [
  '$rootScope', '$timeout', '$interval', '$state', '<%= upCaseName %>Service'
];

export default <%= upCaseName %>Controller;
