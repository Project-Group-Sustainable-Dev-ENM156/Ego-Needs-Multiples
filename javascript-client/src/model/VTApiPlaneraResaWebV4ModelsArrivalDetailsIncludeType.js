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
* Enum class VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType.
* @enum {}
* @readonly
*/
export default class VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType {
    
        /**
         * value: "servicejourneycalls"
         * @const
         */
        "servicejourneycalls" = "servicejourneycalls";

    
        /**
         * value: "servicejourneycoordinates"
         * @const
         */
        "servicejourneycoordinates" = "servicejourneycoordinates";

    

    /**
    * Returns a <code>VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType} The enum <code>VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
