from flask import Flask, request, jsonify, render_template
from journeyFromLocation import get_trip_data
from locationFromQuery import get_location_data
from jsonpath_ng import jsonpath, parse
import json

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
    #print("AAAA ", data)
    public_transport_trip_duration = find_public_transport_trip(data)
    bike_trip_duration, bike_trip_distance = find_bike_trip(data)

    response_data = {
        "public_transport_trip_duration": public_transport_trip_duration,
        "bike_trip_duration": bike_trip_duration,
        "bike_trip_distance": bike_trip_distance
    }

    return jsonify({'message': 'Trip data received successfully!', 'data': response_data})

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

def find_bike_trip(data):
    bike_trip = data["results"][0]
    total_trip_time = sum_part_durations(bike_trip, "destinationLink", "Biking")
    total_distance = sum_biking_distances(bike_trip, "destinationLink")

    print("Bike trip duration: ", total_trip_time)
    print("Bike trip distance: ", total_distance)
    return total_trip_time, total_distance

def find_public_transport_trip(data):
    # Get all results
    # Error handling here?
    all_trips = data.get("results", [])
    #print("Number of results: ", len(all_trips))
    shortest_trip_duration = 1000

    # Loop over all trips except for the first trip, since it is a bike trip
    for trip in all_trips[1:]:
        current_trip_duration = get_public_transport_duration(trip)
        if current_trip_duration < shortest_trip_duration:
            shortest_trip_duration = current_trip_duration
    
    print("Public transport trip duration: ", shortest_trip_duration)
    return shortest_trip_duration
    
def get_public_transport_duration(trip):
    # Summing walking time part 1
    time_walking_1 = sum_part_durations(trip, "departureAccessLink", "Walking")

    # Summing walking time part 2
    time_walking_2 = sum_part_durations(trip, "destinationLink", "Walking")

    # Summing all time on buses and trams
    total_time_bus_tram = sum_part_durations(trip, "tripLegs", "Public transport")

    # Summing all time waiting for connections
    """ if "connectionLinks" in trip:
        waiting_reference = trip["connectionLinks"]
        
        # Use jsonpath to find all instances of "plannedDurationInMinutes"
        jsonpath_expr = parse("$..plannedDurationInMinutes")
        time_waiting = [match.value for match in jsonpath_expr.find(waiting_reference)]
        
        # Sum the durations
        total_time_waiting = sum(time_waiting)
        print("Minutes for waiting: ", total_time_waiting)
    else:
        total_time_waiting = 0
        print("No time spent waiting on this trip, i.e, connectionLinks not found in results[1].") """

    # Sum all durations
    total_trip_time = time_walking_1 + time_walking_2 + total_time_bus_tram #+ total_time_waiting
    #print("Total trip time: ", total_trip_time)

    return total_trip_time

def sum_part_durations(trip, json_keyword, transportation_mode):
    if json_keyword in trip:
        reference = trip[json_keyword]
        
        # Use jsonpath to find all instances of "plannedDurationInMinutes" and "plannedConnectingTimeInMinutes"
        jsonpath_expr = parse("$..plannedDurationInMinutes")
        jsonpath_expr_2 = parse("$..plannedConnectingTimeInMinutes")
        time_instances = [match.value for match in jsonpath_expr.find(reference)] + [match.value for match in jsonpath_expr_2.find(reference)]
        total_time = sum(time_instances)
        # Sum the durations
        #print(transportation_mode, " minutes: ", total_time)
        return total_time
    else:
        #print("No time spent on ", transportation_mode)
        return 0
    
def sum_biking_distances(trip, json_keyword):
    if json_keyword in trip:
        reference = trip[json_keyword]

        jsonpath_expr = parse("$..distanceInMeters")
        matches = jsonpath_expr.find(reference)
        total_distance = matches[0].value if matches else None

        return total_distance
    else:
        return 0


if __name__ == '__main__':
    app.run(debug=True)
