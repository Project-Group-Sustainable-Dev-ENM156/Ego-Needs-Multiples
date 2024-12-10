import requests
import json

# Your Västtrafik credentials
client_id = ''
client_secret = ''
auth_url = 'https://ext-api.vasttrafik.se/token'
api_url = 'https://ext-api.vasttrafik.se/pr/v4/locations/by-text'

# Step 1: Get an access token
def get_access_token(client_id, client_secret):
    auth = (client_id, client_secret)
    data = {'grant_type': 'client_credentials'}
    response = requests.post(auth_url, auth=auth, data=data)

    if response.status_code == 200:
        return response.json().get('access_token')
    else:
        print(f"Error fetching access token: {response.status_code} {response.text}")
        return None

# Step 2: Make a request to the /locations/by-text endpoint
def get_locations_by_text(access_token, query, types=None, limit=10, offset=0, bod_search=False, latitude=None, longitude=None):
    headers = {'Authorization': f'Bearer {access_token}'}
    params = {
        'q': query,
        'limit': limit,
        'offset': offset,
        'bodSearch': bod_search
    }
    if types:
        params['types'] = ','.join(types)
    if latitude is not None and longitude is not None:
        params['latitude'] = latitude
        params['longitude'] = longitude

    response = requests.get(api_url, headers=headers, params=params)

    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error making /locations/by-text request: {response.status_code} {response.text}")
        return None

# Save the result to a JSON file
def save_to_json(data, filename):
    with open(filename, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)
    print(f"Result saved to {filename}")

# Example usage
if __name__ == '__main__':
    token = get_access_token(client_id, client_secret)
    if token:
        # Replace 'brunnsparken' with your desired search query
        query = 'brunnsparken'
        types = ['stoparea', 'address']  # Example: filter by location types
        limit = 10
        offset = 0
        bod_search = False
        latitude = None  # Example: 57.70887
        longitude = None  # Example: 11.97456

        location_data = get_locations_by_text(
            token,
            query,
            types=types,
            limit=limit,
            offset=offset,
            bod_search=bod_search,
            latitude=latitude,
            longitude=longitude
        )
        if location_data:
            save_to_json(location_data, 'locations_result.json')