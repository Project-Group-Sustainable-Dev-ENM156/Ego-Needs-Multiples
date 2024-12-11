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

import ApiClient from '../ApiClient';
import VTApiPlaneraResaWebV4ModelsLocationType from './VTApiPlaneraResaWebV4ModelsLocationType';

/**
 * The VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel</code>.
     * Information about a location.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel
     * @param name {String} The location name.
     * @param locationType {module:model/VTApiPlaneraResaWebV4ModelsLocationType} 
     */
    constructor(name, locationType) { 
        
        VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.initialize(this, name, locationType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, locationType) { 
        obj['name'] = name;
        obj['locationType'] = locationType;
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('locationType')) {
                obj['locationType'] = VTApiPlaneraResaWebV4ModelsLocationType.constructFromObject(data['locationType']);
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('straightLineDistanceInMeters')) {
                obj['straightLineDistanceInMeters'] = ApiClient.convertToType(data['straightLineDistanceInMeters'], 'Number');
            }
            if (data.hasOwnProperty('hasLocalService')) {
                obj['hasLocalService'] = ApiClient.convertToType(data['hasLocalService'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['gid'] && !(typeof data['gid'] === 'string' || data['gid'] instanceof String)) {
            throw new Error("Expected the field `gid` to be a primitive type in the JSON string but got " + data['gid']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['platform'] && !(typeof data['platform'] === 'string' || data['platform'] instanceof String)) {
            throw new Error("Expected the field `platform` to be a primitive type in the JSON string but got " + data['platform']);
        }

        return true;
    }


}

VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.RequiredProperties = ["name", "locationType"];

/**
 * The 16-digit Västtrafik gid.
 * @member {String} gid
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['gid'] = undefined;

/**
 * The location name.
 * @member {String} name
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['name'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsLocationType} locationType
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['locationType'] = undefined;

/**
 * The WGS84 latitude of the location.
 * @member {Number} latitude
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['latitude'] = undefined;

/**
 * The WGS84 longitude of the location.
 * @member {Number} longitude
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['longitude'] = undefined;

/**
 * The location platform, only available for stop points.
 * @member {String} platform
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['platform'] = undefined;

/**
 * The location straight line distance in meters.
 * @member {Number} straightLineDistanceInMeters
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['straightLineDistanceInMeters'] = undefined;

/**
 * Is \"Närtrafik\" (Local Service) available for the location?  Values are only available for LocationType: StopArea, PointOfInterest and Address.  Values are only available for endpoint: locations/by-text.
 * @member {Boolean} hasLocalService
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['hasLocalService'] = undefined;






export default VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel;

