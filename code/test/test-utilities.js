const config = require('config.js');
const server = require('server.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

const Utls = require('utilities.js')

let baseURL= Utls.baseURL();
const axios = require('axios');
const axiosInstance = axios.create({baseURL})
var Validator = require('jsonschema').Validator;

module.exports={
  expect,
  should,
  assert,
  axiosInstance,
  jsonSchemaValidator: new Validator()
}