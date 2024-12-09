import requests
import json

# Your Västtrafik credentials
client_id = ''
client_secret = ''
auth_url = 'https://ext-api.vasttrafik.se/token'
api_url = 'https://ext-api.vasttrafik.se/pr/v4/journeys'

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

# Step 2: Make a request to the /journeys endpoint
def get_journey(access_token, origin_gid, destination_gid, date, time):
    headers = {'Authorization': f'Bearer {access_token}'}
    params = {
        'originGid': origin_gid,
        'destinationGid': destination_gid,
        'date': date,      # Format: YYYY-MM-DD
        'time': time,      # Format: HH:MM
        'searchForArrival': False  # True for arrival, False for departure
    }

    response = requests.get(api_url, headers=headers, params=params)

    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error making /journeys request: {response.status_code} {response.text}")
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
        # Replace these with actual GIDs from Västtrafik's system
        origin_gid = '9021014001760000'  # Example: Gothenburg Central Station
        destination_gid = '9021014003980000'  # Example: Another valid GID
        date = '2024-12-10'  # Specify your desired date
        time = '14:00'       # Specify your desired time

        journey_data = get_journey(token, origin_gid, destination_gid, date, time)
        if journey_data:
            save_to_json(journey_data, 'journey_result.json')
