from flask import Flask, request, jsonify, render_template
from test5empty import get_trip_data
from location2search import get_location_data

app = Flask(__name__)

@app.route('/')
def get_data():
    print("GET REQ")
    data = {'name': 'Alice', 'age': 30}
    return render_template("index.html", data = data)


@app.route('/submit-trip', methods=['POST'])
def submit_trip():
    trip_data = request.get_json()  # Get JSON data sent from the frontend
    print('Received trip data:', trip_data)  # Debugging in the server logs

    location_data_start = get_location_data(trip_data['startingPoint'])
    location_data_end = get_location_data(trip_data['destination'])
    
    start = filter_by_substring(location_data_start, 'Göteborg')
    end = filter_by_substring(location_data_end, 'Göteborg')
    
    
    latlongStart = get_lat_long_by_name(location_data_start['results'], start)
    latlongEnd = get_lat_long_by_name(location_data_end['results'], end)
    
    print("latlong Start & End")
    print(latlongStart, " ", start)
    print(latlongEnd, " ", end)

    pos = [latlongStart[0], latlongStart[1], latlongEnd[0], latlongEnd[1]]

    data = get_trip_data(pos, trip_data['date'], trip_data['time'])
    #print('Estimated duration in minutes: ', data['results'][0]['tripLegs'][0]['estimatedDurationInMinutes'])
    # Example: Respond with a confirmation
    print("AAAA ", data)
    return jsonify({'message': 'Trip data received successfully!', 'data': data})

def get_lat_long_by_name(arr, name):
    print("NAME ", name)
    for location in arr:
        print("location ", location)
        if location['name'] == name:
            return [location['latitude'], location['longitude']]
    return None

def filter_by_substring(arr, substring):
    matching_items = []
    if arr and 'results' in arr:
        for location in arr['results']:
            if substring in location['name']:
                #print(location['name'], substring)
                matching_items.append(location['name'])
    # print("match")
    # for e in matching_items:
    #     print(e)
    return matching_items[0] # return first match for now

def print_list(arr):
    if arr and 'results' in arr:
        print("Search Results:")
        for location in arr['results']:
            print(location['name'])
    else:
        print("No results found.")


if __name__ == '__main__':
    app.run(debug=True)
