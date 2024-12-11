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
    instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();
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

  describe('VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel', function() {
    it('should create an instance of VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel', function() {
      // uncomment below and update the code to test VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();
      //expect(instance).to.be.a(PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel);
    });

    it('should have the property reconstructionReference (base name: "reconstructionReference")', function() {
      // uncomment below and update the code to test the property reconstructionReference
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();
      //expect(instance).to.be();
    });

    it('should have the property detailsReference (base name: "detailsReference")', function() {
      // uncomment below and update the code to test the property detailsReference
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();
      //expect(instance).to.be();
    });

    it('should have the property departureAccessLink (base name: "departureAccessLink")', function() {
      // uncomment below and update the code to test the property departureAccessLink
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();
      //expect(instance).to.be();
    });

    it('should have the property tripLegs (base name: "tripLegs")', function() {
      // uncomment below and update the code to test the property tripLegs
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();
      //expect(instance).to.be();
    });

    it('should have the property connectionLinks (base name: "connectionLinks")', function() {
      // uncomment below and update the code to test the property connectionLinks
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();
      //expect(instance).to.be();
    });

    it('should have the property arrivalAccessLink (base name: "arrivalAccessLink")', function() {
      // uncomment below and update the code to test the property arrivalAccessLink
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();
      //expect(instance).to.be();
    });

    it('should have the property destinationLink (base name: "destinationLink")', function() {
      // uncomment below and update the code to test the property destinationLink
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();
      //expect(instance).to.be();
    });

    it('should have the property isDeparted (base name: "isDeparted")', function() {
      // uncomment below and update the code to test the property isDeparted
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();
      //expect(instance).to.be();
    });

    it('should have the property occupancy (base name: "occupancy")', function() {
      // uncomment below and update the code to test the property occupancy
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();
      //expect(instance).to.be();
    });

  });

}));