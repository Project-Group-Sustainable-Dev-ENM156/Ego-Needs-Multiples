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
import VTApiPlaneraResaWebV4ModelsCoordinateApiModel from './VTApiPlaneraResaWebV4ModelsCoordinateApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel from './VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel from './VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel';
import VTApiPlaneraResaWebV4ModelsNoteApiModel from './VTApiPlaneraResaWebV4ModelsNoteApiModel';
import VTApiPlaneraResaWebV4ModelsTransportMode from './VTApiPlaneraResaWebV4ModelsTransportMode';
import VTApiPlaneraResaWebV4ModelsTransportSubMode from './VTApiPlaneraResaWebV4ModelsTransportSubMode';

/**
 * The VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel</code>.
     * Information about a walk, bike or car link from origin to destination.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();

            if (data.hasOwnProperty('transportMode')) {
                obj['transportMode'] = VTApiPlaneraResaWebV4ModelsTransportMode.constructFromObject(data['transportMode']);
            }
            if (data.hasOwnProperty('transportSubMode')) {
                obj['transportSubMode'] = VTApiPlaneraResaWebV4ModelsTransportSubMode.constructFromObject(data['transportSubMode']);
            }
            if (data.hasOwnProperty('origin')) {
                obj['origin'] = VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.constructFromObject(data['origin']);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], [VTApiPlaneraResaWebV4ModelsNoteApiModel]);
            }
            if (data.hasOwnProperty('distanceInMeters')) {
                obj['distanceInMeters'] = ApiClient.convertToType(data['distanceInMeters'], 'Number');
            }
            if (data.hasOwnProperty('plannedDepartureTime')) {
                obj['plannedDepartureTime'] = ApiClient.convertToType(data['plannedDepartureTime'], 'String');
            }
            if (data.hasOwnProperty('plannedArrivalTime')) {
                obj['plannedArrivalTime'] = ApiClient.convertToType(data['plannedArrivalTime'], 'String');
            }
            if (data.hasOwnProperty('plannedDurationInMinutes')) {
                obj['plannedDurationInMinutes'] = ApiClient.convertToType(data['plannedDurationInMinutes'], 'Number');
            }
            if (data.hasOwnProperty('estimatedDepartureTime')) {
                obj['estimatedDepartureTime'] = ApiClient.convertToType(data['estimatedDepartureTime'], 'String');
            }
            if (data.hasOwnProperty('estimatedArrivalTime')) {
                obj['estimatedArrivalTime'] = ApiClient.convertToType(data['estimatedArrivalTime'], 'String');
            }
            if (data.hasOwnProperty('estimatedDurationInMinutes')) {
                obj['estimatedDurationInMinutes'] = ApiClient.convertToType(data['estimatedDurationInMinutes'], 'Number');
            }
            if (data.hasOwnProperty('estimatedNumberOfSteps')) {
                obj['estimatedNumberOfSteps'] = ApiClient.convertToType(data['estimatedNumberOfSteps'], 'Number');
            }
            if (data.hasOwnProperty('linkCoordinates')) {
                obj['linkCoordinates'] = ApiClient.convertToType(data['linkCoordinates'], [VTApiPlaneraResaWebV4ModelsCoordinateApiModel]);
            }
            if (data.hasOwnProperty('segments')) {
                obj['segments'] = ApiClient.convertToType(data['segments'], [VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel</code>.
     */
    static validateJSON(data) {
        // validate the optional field `origin`
        if (data['origin']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.validateJSON(data['origin']);
        }
        // validate the optional field `destination`
        if (data['destination']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.validateJSON(data['destination']);
        }
        if (data['notes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['notes'])) {
                throw new Error("Expected the field `notes` to be an array in the JSON data but got " + data['notes']);
            }
            // validate the optional field `notes` (array)
            for (const item of data['notes']) {
                VTApiPlaneraResaWebV4ModelsNoteApiModel.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['plannedDepartureTime'] && !(typeof data['plannedDepartureTime'] === 'string' || data['plannedDepartureTime'] instanceof String)) {
            throw new Error("Expected the field `plannedDepartureTime` to be a primitive type in the JSON string but got " + data['plannedDepartureTime']);
        }
        // ensure the json data is a string
        if (data['plannedArrivalTime'] && !(typeof data['plannedArrivalTime'] === 'string' || data['plannedArrivalTime'] instanceof String)) {
            throw new Error("Expected the field `plannedArrivalTime` to be a primitive type in the JSON string but got " + data['plannedArrivalTime']);
        }
        // ensure the json data is a string
        if (data['estimatedDepartureTime'] && !(typeof data['estimatedDepartureTime'] === 'string' || data['estimatedDepartureTime'] instanceof String)) {
            throw new Error("Expected the field `estimatedDepartureTime` to be a primitive type in the JSON string but got " + data['estimatedDepartureTime']);
        }
        // ensure the json data is a string
        if (data['estimatedArrivalTime'] && !(typeof data['estimatedArrivalTime'] === 'string' || data['estimatedArrivalTime'] instanceof String)) {
            throw new Error("Expected the field `estimatedArrivalTime` to be a primitive type in the JSON string but got " + data['estimatedArrivalTime']);
        }
        if (data['linkCoordinates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['linkCoordinates'])) {
                throw new Error("Expected the field `linkCoordinates` to be an array in the JSON data but got " + data['linkCoordinates']);
            }
            // validate the optional field `linkCoordinates` (array)
            for (const item of data['linkCoordinates']) {
                VTApiPlaneraResaWebV4ModelsCoordinateApiModel.validateJSON(item);
            };
        }
        if (data['segments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['segments'])) {
                throw new Error("Expected the field `segments` to be an array in the JSON data but got " + data['segments']);
            }
            // validate the optional field `segments` (array)
            for (const item of data['segments']) {
                VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsTransportMode} transportMode
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['transportMode'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsTransportSubMode} transportSubMode
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['transportSubMode'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel} origin
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['origin'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel} destination
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['destination'] = undefined;

/**
 * An ordered list (most important first) of notes related to the access link.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsNoteApiModel>} notes
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['notes'] = undefined;

/**
 * Distance in meters.
 * @member {Number} distanceInMeters
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['distanceInMeters'] = undefined;

/**
 * The planned departure time in RFC 3339 format.
 * @member {String} plannedDepartureTime
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['plannedDepartureTime'] = undefined;

/**
 * The planned arrival time in RFC 3339 format.
 * @member {String} plannedArrivalTime
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['plannedArrivalTime'] = undefined;

/**
 * The planned duration in minutes.
 * @member {Number} plannedDurationInMinutes
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['plannedDurationInMinutes'] = undefined;

/**
 * The estimated departure time in RFC 3339 format, if available.
 * @member {String} estimatedDepartureTime
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['estimatedDepartureTime'] = undefined;

/**
 * The estimated arrival time in RFC 3339 format, if available.
 * @member {String} estimatedArrivalTime
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['estimatedArrivalTime'] = undefined;

/**
 * The estimated duration in minutes, if available.
 * @member {Number} estimatedDurationInMinutes
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['estimatedDurationInMinutes'] = undefined;

/**
 * Number of steps based on the distance and an estimated step length of 0.65 meters.
 * @member {Number} estimatedNumberOfSteps
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['estimatedNumberOfSteps'] = undefined;

/**
 * The coordinates for the link.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsCoordinateApiModel>} linkCoordinates
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['linkCoordinates'] = undefined;

/**
 * The segments that make up this link.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel>} segments
 */
VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.prototype['segments'] = undefined;






export default VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel;

