# PlaneraResa.ProductsApi

All URIs are relative to *https://ext-api.vasttrafik.se/pr/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productsJourneyticketGet**](ProductsApi.md#productsJourneyticketGet) | **GET** /products/journeyticket | Returns least expensive ticket products between origin and destination for adult and youth.



## productsJourneyticketGet

> [VTApiPlaneraResaWebV4ModelsProductsTicketSpecificationApiModel] productsJourneyticketGet(opts)

Returns least expensive ticket products between origin and destination for adult and youth.

A position reference for origin can be originGid or a LatLong specified by both originLatitude and originLongitude                A position reference for destination can be destinationGid or a LatLong specified by both destinationLatitude and destinationLongitude                For an origin or destination to be valid, either a gid or a combination of latitude and longitude must be specified. A Gid takes precedence over latitude/longitude.                Sample request:                    GET /products/journeyticket?originGid&#x3D;9021014001760000&amp;destinationGid&#x3D;9021014003980000                or                    GET /products/journeyticket?originLongitude&#x3D;12.63308&amp;originLatitude&#x3D;58.028237&amp;destinationLongitude&#x3D;11.930897&amp;destinationLatitude&#x3D;57.586085

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.ProductsApi();
let opts = {
  'originGid': "originGid_example", // String | The 16-digit Västtrafik gid of the origin location (which could be either a stop area (e.g. '9021014001760000'), a stop point (e.g. '9022014001760004') or meta-station (e.g. '0000000800000022')).
  'originLatitude': 3.4, // Number | The latitude of the origin location.
  'originLongitude': 3.4, // Number | The longitude of the origin location.
  'destinationGid': "destinationGid_example", // String | The 16-digit Västtrafik gid of the destination location (which could be either a stop area, stop point or meta-station).
  'destinationLatitude': 3.4, // Number | The latitude of the destination location.
  'destinationLongitude': 3.4 // Number | The longitude of the destination location.
};
apiInstance.productsJourneyticketGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originGid** | **String**| The 16-digit Västtrafik gid of the origin location (which could be either a stop area (e.g. &#39;9021014001760000&#39;), a stop point (e.g. &#39;9022014001760004&#39;) or meta-station (e.g. &#39;0000000800000022&#39;)). | [optional] 
 **originLatitude** | **Number**| The latitude of the origin location. | [optional] 
 **originLongitude** | **Number**| The longitude of the origin location. | [optional] 
 **destinationGid** | **String**| The 16-digit Västtrafik gid of the destination location (which could be either a stop area, stop point or meta-station). | [optional] 
 **destinationLatitude** | **Number**| The latitude of the destination location. | [optional] 
 **destinationLongitude** | **Number**| The longitude of the destination location. | [optional] 

### Return type

[**[VTApiPlaneraResaWebV4ModelsProductsTicketSpecificationApiModel]**](VTApiPlaneraResaWebV4ModelsProductsTicketSpecificationApiModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

