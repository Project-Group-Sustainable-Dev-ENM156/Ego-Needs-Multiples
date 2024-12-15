import requests
import json
import os

# Your Västtrafik credentials
client_id = os.getenv('CLIENT_ID')
client_secret = os.getenv('CLIENT_SECRET')
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
def get_locations_by_text(access_token, query, limit=10, offset=0, bod_search=False, latitude=None, longitude=None):
    headers = {'Authorization': f'Bearer {access_token}'}
    params = {
        'q': query,
        'limit': limit,
        'offset': offset,
        'bodSearch': bod_search,
        'types': ['stoparea', 'address']
    }
    if latitude is not None and longitude is not None:
        params['latitude'] = latitude
        params['longitude'] = longitude

    response = requests.get(api_url, headers=headers, params=params)

    if response.status_code == 200:
        #print(response.json())
        return response.json()
    else:
        print(f"Error making /locations/by-text request: {response.status_code} {response.text}")
        return None
if __name__ == '__main__':
    token = get_access_token(client_id, client_secret)
    if token:
        print("Interactive search mode. Type your query and press Enter. Type 'exit' to quit.")
        while True:
            try:
                # Get user input
                query = input("Enter search query: ").strip()
                if query.lower() == 'exit':
                    print("Exiting program.")
                    break

                # Fetch locations for the input query
                location_data = get_locations_by_text(token, query, limit=10)
                print(location_data)
                if location_data and 'results' in location_data:
                    print("Search Results:")
                    for location in location_data['results']:
                        print(location['name'])
                else:
                    print("No results found.")
            except KeyboardInterrupt:
                print("\nExiting program.")
                break
            except Exception as e:
                print(f"An error occurred: {e}")

#####################
# Exported function #
#####################
def get_location_data(query):
    token = get_access_token(client_id, client_secret)
    if token:
        location_data = get_locations_by_text(token, query, limit=10)
        #print("FROM LOCATION2SEARCH ", location_data)
        return location_data