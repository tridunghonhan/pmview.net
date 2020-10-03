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

  it('PMEntity entity create a object success', function() {
    let aPM = PMEntity.create();
    return Promise.resolve()
    .then(()=>{
      TU.assert(aPM !== null ,"created PM should not be null");
      TU.assert(aPM !== undefined ,"created PM  should not be undefined");
    })
  });

  it('PMEntity entity create a object complied to schema', function() {
    let pmInstance = PMEntity.create();
    let pmSchema = PMEntity.schema;
    return Promise.resolve()
    .then(()=>{
      TU.assert(  TU.jsonSchemaValidator.validate(pmInstance, pmSchema).valid,"Valid pm Object");
      TU.assert(! TU.jsonSchemaValidator.validate({random: "random"}, pmSchema).valid,"Invalid pm Object");
    })
  });



});
