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
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel</code>.
     * Information about ticket validity.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isValidForJourney')) {
                obj['isValidForJourney'] = ApiClient.convertToType(data['isValidForJourney'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}



/**
 * The ticket id.
 * @member {String} id
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel.prototype['id'] = undefined;

/**
 * Indicates if the ticket is valid for the journey.
 * @member {Boolean} isValidForJourney
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel.prototype['isValidForJourney'] = undefined;






export default VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel;

