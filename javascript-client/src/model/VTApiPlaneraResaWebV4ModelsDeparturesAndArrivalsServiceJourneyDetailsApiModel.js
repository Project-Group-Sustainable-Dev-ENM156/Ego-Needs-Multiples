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
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCallDetailsApiModel from './VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCallDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCoordinateApiModel from './VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCoordinateApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel from './VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsDirectionDetailsApiModel from './VTApiPlaneraResaWebV4ModelsDirectionDetailsApiModel';

/**
 * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel</code>.
     * Information about a service journey.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('directionDetails')) {
                obj['directionDetails'] = VTApiPlaneraResaWebV4ModelsDirectionDetailsApiModel.constructFromObject(data['directionDetails']);
            }
            if (data.hasOwnProperty('line')) {
                obj['line'] = VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel.constructFromObject(data['line']);
            }
            if (data.hasOwnProperty('serviceJourneyCoordinates')) {
                obj['serviceJourneyCoordinates'] = ApiClient.convertToType(data['serviceJourneyCoordinates'], [VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCoordinateApiModel]);
            }
            if (data.hasOwnProperty('callsOnServiceJourney')) {
                obj['callsOnServiceJourney'] = ApiClient.convertToType(data['callsOnServiceJourney'], [VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCallDetailsApiModel]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['gid'] && !(typeof data['gid'] === 'string' || data['gid'] instanceof String)) {
            throw new Error("Expected the field `gid` to be a primitive type in the JSON string but got " + data['gid']);
        }
        // ensure the json data is a string
        if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
            throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
        }
        // validate the optional field `directionDetails`
        if (data['directionDetails']) { // data not null
          VTApiPlaneraResaWebV4ModelsDirectionDetailsApiModel.validateJSON(data['directionDetails']);
        }
        // validate the optional field `line`
        if (data['line']) { // data not null
          VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel.validateJSON(data['line']);
        }
        if (data['serviceJourneyCoordinates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['serviceJourneyCoordinates'])) {
                throw new Error("Expected the field `serviceJourneyCoordinates` to be an array in the JSON data but got " + data['serviceJourneyCoordinates']);
            }
            // validate the optional field `serviceJourneyCoordinates` (array)
            for (const item of data['serviceJourneyCoordinates']) {
                VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCoordinateApiModel.validateJSON(item);
            };
        }
        if (data['callsOnServiceJourney']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['callsOnServiceJourney'])) {
                throw new Error("Expected the field `callsOnServiceJourney` to be an array in the JSON data but got " + data['callsOnServiceJourney']);
            }
            // validate the optional field `callsOnServiceJourney` (array)
            for (const item of data['callsOnServiceJourney']) {
                VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCallDetailsApiModel.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * 16-digit Västtrafik service journey gid.
 * @member {String} gid
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel.prototype['gid'] = undefined;

/**
 * A description of the direction.
 * @member {String} direction
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel.prototype['direction'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsDirectionDetailsApiModel} directionDetails
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel.prototype['directionDetails'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel} line
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel.prototype['line'] = undefined;

/**
 * The coordinates of the service journey.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCoordinateApiModel>} serviceJourneyCoordinates
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel.prototype['serviceJourneyCoordinates'] = undefined;

/**
 * All calls on the service journey.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCallDetailsApiModel>} callsOnServiceJourney
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel.prototype['callsOnServiceJourney'] = undefined;






export default VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel;

