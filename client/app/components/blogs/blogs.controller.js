class BlogsController {
  constructor($rootScope, $timeout, $interval, $state, BlogsService) {
    this.blogsService = BlogsService;
    this.name = 'blogs';
  }
}

BlogsController.$inject = [
  '$rootScope', '$timeout', '$interval', '$state', 'BlogsService'
];

export default BlogsController;
