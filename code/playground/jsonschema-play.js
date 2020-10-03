var Validator = require('jsonschema').Validator;
var v = new Validator();
const PMEntity = require('PMEntity.js')
const TU = require('test-utilities.js');


 
// Address, to be embedded on Person
var addressSchema = {
  "id": "/SimpleAddress",
  "type": "object",
  "properties": {
    "lines": {
      "type": "array",
      "items": {"type": "string"}
    },
    "zip": {"type": "string"},
    "city": {"type": "string"},
    "country": {"type": "string"}
  },
  "required": ["country"]
};
 
// Person
var schema = {
  "id": "/SimplePerson",
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "address": {"$ref": "/SimpleAddress"},
    "votes": {"type": "integer", "minimum": 1}
  }
};
 
var p = {
  "name": "Barack Obama",
  "address": {
    "lines": [ "1600 Pennsylvania Avenue Northwest" ],
    "zip": "DC 20500",
    "city": "Washington",
    "country": "USA"
  },
  "votes": "lots"
};
 
let pmIntance = PMEntity.create();
let invalidPMInstance = {title: "no"}
let pmSchema = PMEntity.schema;

console.log(TU.jsonSchemaValidator.validate(pmIntance, pmSchema).valid);