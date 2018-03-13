class NavbarController {
  constructor($rootScope, $timeout, $interval, $state) {
    this.name = 'navbar';
    this.$state = $state;
  }
}

NavbarController.$inject = [
  '$rootScope', '$timeout', '$interval', '$state'
];

export default NavbarController;
