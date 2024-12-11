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

/**
 * The VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel</code>.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('long')) {
                obj['long'] = ApiClient.convertToType(data['long'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['gid'] && !(typeof data['gid'] === 'string' || data['gid'] instanceof String)) {
            throw new Error("Expected the field `gid` to be a primitive type in the JSON string but got " + data['gid']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * The 16-digit Västtrafik gid of the stop area.
 * @member {String} gid
 */
VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel.prototype['gid'] = undefined;

/**
 * The stop area name.
 * @member {String} name
 */
VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel.prototype['name'] = undefined;

/**
 * The latitude of the stop point.
 * @member {Number} lat
 */
VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel.prototype['lat'] = undefined;

/**
 * The longitude of the stop point.
 * @member {Number} long
 */
VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel.prototype['long'] = undefined;






export default VTApiPlaneraResaWebV4ModelsStopAreasStopAreaApiModel;
