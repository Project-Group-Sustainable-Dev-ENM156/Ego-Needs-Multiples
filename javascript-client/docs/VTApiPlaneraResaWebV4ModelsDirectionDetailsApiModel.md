# PlaneraResa.VTApiPlaneraResaWebV4ModelsDirectionDetailsApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullDirection** | **String** | The original direction string. | [optional] 
**shortDirection** | **String** | The direction string after parsing and removing the different components. | [optional] 
**replaces** | **String** | The name of the replaced line, if any. Parses and replaces the following component: \&quot;, Ersätter [replaces]\&quot; | [optional] 
**via** | **String** | The name of the via location, if any. Parses and replaces the following component: \&quot;, via [via]\&quot; | [optional] 
**isFreeService** | **Boolean** | Whether the service is free. Parses and replaces the following component: \&quot;, Fri resa\&quot; | [optional] 
**isPaidService** | **Boolean** | Whether the service is paid. Parses and replaces the following component: \&quot;, Avgiftsbelagd tur\&quot; | [optional] 
**isSwimmingService** | **Boolean** | Whether the service is a swimming service. Parses and replaces the following component: \&quot;, Badbuss\&quot; | [optional] 
**isDirectDestinationBus** | **Boolean** | Whether the service is a direct destination bus. Parses and replaces the following component: \&quot;, Direktbuss\&quot; | [optional] 
**isFrontEntry** | **Boolean** | Whether the service has front entry. Parses and replaces the following component: \&quot;, Påstigning fram\&quot; | [optional] 
**isExtraBus** | **Boolean** | Whether the service is an extra bus. Parses and replaces the following component: \&quot;, Extrabuss\&quot; | [optional] 
**isExtraBoat** | **Boolean** | Whether the service is an extra boat. Parses and replaces the following component: \&quot;, Extrabåt\&quot; | [optional] 
**isExtraTram** | **Boolean** | Whether the service is an extra tram. Parses and replaces the following component: \&quot;, Extravagn\&quot; | [optional] 
**isSchoolBus** | **Boolean** | Whether the service is a school bus. Parses and replaces the following component: \&quot;, Skolbuss\&quot; | [optional] 
**isExpressBus** | **Boolean** | Whether the service is an express bus. Parses and replaces the following component: \&quot;, Snabbuss\&quot; | [optional] 
**fortifiesLine** | **String** | The name of the fortified line, if any. Parses and replaces the following component: \&quot;, Fortifies [fortifies]\&quot; | [optional] 


