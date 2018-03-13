class LikeApiController {
  constructor($rootScope, $timeout, $interval, $state, LikeApiService) {
    this.likeApiService = LikeApiService;
    this.name = 'likeApi';
  }
}

LikeApiController.$inject = [
  '$rootScope', '$timeout', '$interval', '$state', 'LikeApiService'
];

export default LikeApiController;
