from flask import Flask, request, jsonify, render_template
from test5empty import get_trip_data

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

    data = get_trip_data(trip_data['startingPoint'], trip_data['destination'], trip_data['date'], trip_data['time'])
    print('Estimated duration in minutes: ', data['results'][0]['tripLegs'][0]['estimatedDurationInMinutes'])
    # Example: Respond with a confirmation
    return jsonify({'message': 'Trip data received successfully!', 'data': data})


if __name__ == '__main__':
    app.run(debug=True)
