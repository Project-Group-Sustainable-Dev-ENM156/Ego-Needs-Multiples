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
    instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsCoordinateApiModel();
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

  describe('VTApiPlaneraResaWebV4ModelsCoordinateApiModel', function() {
    it('should create an instance of VTApiPlaneraResaWebV4ModelsCoordinateApiModel', function() {
      // uncomment below and update the code to test VTApiPlaneraResaWebV4ModelsCoordinateApiModel
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsCoordinateApiModel();
      //expect(instance).to.be.a(PlaneraResa.VTApiPlaneraResaWebV4ModelsCoordinateApiModel);
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsCoordinateApiModel();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsCoordinateApiModel();
      //expect(instance).to.be();
    });

    it('should have the property elevation (base name: "elevation")', function() {
      // uncomment below and update the code to test the property elevation
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsCoordinateApiModel();
      //expect(instance).to.be();
    });

    it('should have the property isOnTripLeg (base name: "isOnTripLeg")', function() {
      // uncomment below and update the code to test the property isOnTripLeg
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsCoordinateApiModel();
      //expect(instance).to.be();
    });

    it('should have the property isTripLegStart (base name: "isTripLegStart")', function() {
      // uncomment below and update the code to test the property isTripLegStart
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsCoordinateApiModel();
      //expect(instance).to.be();
    });

    it('should have the property isTripLegStop (base name: "isTripLegStop")', function() {
      // uncomment below and update the code to test the property isTripLegStop
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsCoordinateApiModel();
      //expect(instance).to.be();
    });

  });

}));
