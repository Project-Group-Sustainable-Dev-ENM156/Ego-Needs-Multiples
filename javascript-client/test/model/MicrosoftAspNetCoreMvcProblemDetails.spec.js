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
    instance = new PlaneraResa.MicrosoftAspNetCoreMvcProblemDetails();
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

  describe('MicrosoftAspNetCoreMvcProblemDetails', function() {
    it('should create an instance of MicrosoftAspNetCoreMvcProblemDetails', function() {
      // uncomment below and update the code to test MicrosoftAspNetCoreMvcProblemDetails
      //var instance = new PlaneraResa.MicrosoftAspNetCoreMvcProblemDetails();
      //expect(instance).to.be.a(PlaneraResa.MicrosoftAspNetCoreMvcProblemDetails);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PlaneraResa.MicrosoftAspNetCoreMvcProblemDetails();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new PlaneraResa.MicrosoftAspNetCoreMvcProblemDetails();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new PlaneraResa.MicrosoftAspNetCoreMvcProblemDetails();
      //expect(instance).to.be();
    });

    it('should have the property detail (base name: "detail")', function() {
      // uncomment below and update the code to test the property detail
      //var instance = new PlaneraResa.MicrosoftAspNetCoreMvcProblemDetails();
      //expect(instance).to.be();
    });

    it('should have the property instance (base name: "instance")', function() {
      // uncomment below and update the code to test the property instance
      //var instance = new PlaneraResa.MicrosoftAspNetCoreMvcProblemDetails();
      //expect(instance).to.be();
    });

  });

}));
