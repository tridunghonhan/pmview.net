const server = require('server.js');
const U = require('utilities.js')
const TU = require('test-utilities.js');
const PMEntity = require('PMEntity.js')

describe("PMEntity entity", function(){
  it('PMEntity entity have schema', function() {
    let sensorSchema = PMEntity.schema;
    return Promise.resolve()
    .then(()=>{
      TU.assert(sensorSchema !== null ,"sensorSchema should not be null");
      TU.assert(sensorSchema !== undefined ,"sensorSchema should not be undefined");
    })
  });

});
