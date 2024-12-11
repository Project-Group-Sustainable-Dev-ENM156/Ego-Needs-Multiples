/**
 * Planera Resa
 * Sök och planera resor med Västtrafik
 *
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PlaneraResa);
  }
}(this, function(expect, PlaneraResa) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsProductsTicketConfigurationApiModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VTApiPlaneraResaWebV4ModelsProductsTicketConfigurationApiModel', function() {
    it('should create an instance of VTApiPlaneraResaWebV4ModelsProductsTicketConfigurationApiModel', function() {
      // uncomment below and update the code to test VTApiPlaneraResaWebV4ModelsProductsTicketConfigurationApiModel
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsProductsTicketConfigurationApiModel();
      //expect(instance).to.be.a(PlaneraResa.VTApiPlaneraResaWebV4ModelsProductsTicketConfigurationApiModel);
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsProductsTicketConfigurationApiModel();
      //expect(instance).to.be();
    });

    it('should have the property validityLength (base name: "validityLength")', function() {
      // uncomment below and update the code to test the property validityLength
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsProductsTicketConfigurationApiModel();
      //expect(instance).to.be();
    });

    it('should have the property itemPrice (base name: "itemPrice")', function() {
      // uncomment below and update the code to test the property itemPrice
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsProductsTicketConfigurationApiModel();
      //expect(instance).to.be();
    });

    it('should have the property offerSpecification (base name: "offerSpecification")', function() {
      // uncomment below and update the code to test the property offerSpecification
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsProductsTicketConfigurationApiModel();
      //expect(instance).to.be();
    });

    it('should have the property ageType (base name: "ageType")', function() {
      // uncomment below and update the code to test the property ageType
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsProductsTicketConfigurationApiModel();
      //expect(instance).to.be();
    });

    it('should have the property zoneIds (base name: "zoneIds")', function() {
      // uncomment below and update the code to test the property zoneIds
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsProductsTicketConfigurationApiModel();
      //expect(instance).to.be();
    });

  });

}));