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
import VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel from './VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel';

/**
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel</code>.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('tariffZone1')) {
                obj['tariffZone1'] = VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel.constructFromObject(data['tariffZone1']);
            }
            if (data.hasOwnProperty('tariffZone2')) {
                obj['tariffZone2'] = VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel.constructFromObject(data['tariffZone2']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel</code>.
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
        // validate the optional field `tariffZone1`
        if (data['tariffZone1']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel.validateJSON(data['tariffZone1']);
        }
        // validate the optional field `tariffZone2`
        if (data['tariffZone2']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel.validateJSON(data['tariffZone2']);
        }

        return true;
    }


}



/**
 * The 16-digit Västtrafik gid of the stop area.
 * @member {String} gid
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel.prototype['gid'] = undefined;

/**
 * The stop area name.
 * @member {String} name
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel.prototype['name'] = undefined;

/**
 * The latitude of the stop point.
 * @member {Number} latitude
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel.prototype['latitude'] = undefined;

/**
 * The longitude of the stop point.
 * @member {Number} longitude
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel.prototype['longitude'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel} tariffZone1
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel.prototype['tariffZone1'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel} tariffZone2
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel.prototype['tariffZone2'] = undefined;






export default VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel;

