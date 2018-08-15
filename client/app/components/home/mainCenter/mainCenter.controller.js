class MainCenterController {
  constructor($rootScope, $timeout, $interval, $state, MainCenterService) {
    this.name = 'mainCenter';
    this.url = 'http://localhost:5000/images?name=home.jpg';
    this.results = [];
    this.currentImgResized = {
    	url: this.url,
    	k: 'Running...'
    };

    this.reset = () => {
    	this.results = [];
    	this.currentImgResized = {
    		url: this.url,
    		k: 'Running...'
    	};
    	this.loading = true;
    };

    this.runDiff = () => {
	    $timeout(() => { 
	    	$("#img-diff").twentytwenty({
			  before_label: 'Ảnh gốc',
			  after_label: 'K = ' + this.currentImgResized.k
			}); 
	    }, 50);
    };

    this.submit = () => {
    	if (this.loading) {
			return;
    	}
    	this.reset();
    	MainCenterService.run(this.url, (res) => {
    		if (res.status) {
    			this.results = res.results;
    			if (this.results.length > 0) {
    				this.currentImgResized = this.results[0];
    				this.runDiff();
    			}
    		} else {
    			console.warn(res);
    		}
    		this.loading = false;
    	});
    };

    this.runDiff();

    this.onChangeDiff = (rs) => {
    	this.currentImgResized = rs;
    	this.runDiff();
    };
  	
    this.submit();

  }
}

MainCenterController.$inject = [
  '$rootScope', '$timeout', '$interval', '$state', 'MainCenterService'
];

export default MainCenterController;
