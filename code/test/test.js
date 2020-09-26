const server = require('server.js');
const U = require('utilities.js')
const TU = require('test-utilities.js');

before(function (done) {
	server.start(()=>{
		done();
	});
});

describe("Server up", function(){
  it('The server is reachable', function() {
    return TU.axiosInstance.head('/')
    .then(res=>{
			return TU.expect(res.status).to.equal(200);
    })
  });
});
