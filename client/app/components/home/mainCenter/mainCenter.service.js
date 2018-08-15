let MainCenterService = ($http) => {

    return {
      
      run(url, callback) {
      	var api = 'http://localhost:5000/image_processing/resize?url=' + url;
      	$.ajax({
      	  url: api,
      	  data: {},
      	  success: (res) => {
      	  	callback(res);
      	  },
      	  contentType: "application/json; charset=utf-8",
		  dataType: "json"
      	});
      }

    }

};

MainCenterService.$inject = ['$http'];

export default MainCenterService;
