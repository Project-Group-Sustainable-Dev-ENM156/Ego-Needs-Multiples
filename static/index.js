// Define CO2 emission factors (kg CO2 per km) for different transportation methods
var distance = 0    // [m]
var time_data = {      // Value should be set by API if possible. Otherwise distance will be used
    walk: "notSet",
    bicycle: "notSet",
    public_transport: "notSet",
    car: "notSet"
};     

const p = {
    on_foot: getPrice("on_foot", distance),
    bicycle: getPrice("bicycle", distance),
    ICE_car: getPrice("ICE_car", distance),
    electric_car: getPrice("electric_car", distance),
    public_transport: getPrice("public_transport", distance)
};

const units = {
  emissions: " g‎ ",
  price: " kr‎ ",
  time: " min‎ ",
  rating: "/10‎ "
};

var startingPoint;
var destination;
var startingPoint;
var startingPoint;
var social;
var ecological;
var economical;

// Event Listener for Form Submission
document.getElementById('search-button').addEventListener('click', function(event) {
    //event.preventDefault(); // Prevent actual form submission
    // Get user input
    startingPoint = document.getElementById('fromDestination').value;
    destination = document.getElementById('toDestination').value;
    passengers = document.getElementById('passengerCount').value;
    date = document.getElementById('tripDate').value;
    time = document.getElementById('tripTime').value;
    social = document.getElementById('social').value;
    ecological = document.getElementById('ecological').value;
    economical = document.getElementById('economical').value;

    // Create an object to send
    const tripData = {
        startingPoint,
        destination,
        passengers,
        date,
        time
    };

    // Send a POST request to the Flask backend
    fetch('/submit-trip', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tripData) // Convert data to JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from backend, ', data);
        // Handle the response from the server here
        createTable(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

async function createTable(json_data) {
    const data = {};
    console.log("json_data ", json_data)

    // Populate data asynchronously
    for (const key of Object.keys(p)) {
        const emissions = get_CO2_emissions(key, passengers, distance);
        const price = await getPrice(key, distance, passengers); // Await price calculation
        distance = json_data['data']['bike_trip_distance']
        
        time_data['public_transport'] = json_data['data']['public_transport_trip_duration']
        time_data['bicycle'] = json_data['data']['bike_trip_duration']

        const time = getTime(key, time_data, distance)
        
        console.log("distance ", distance)
        console.log("time ", time)
        data[key] = {
            emissions: emissions,
            price: price,
            time: time,
            rating: 0
        };
    }

    rate(data);

    const list = document.getElementById("tbod");
    while (list.children.length >= 1) {
        list.removeChild(list.lastChild); // Remove rows except the first one
    }

    Object.entries(data)
    .sort(([, a], [, b]) => b.rating - a.rating) // Sort by rating in descending order
    .forEach(([key, value]) => {
        const row = document.createElement("tr");

        // Create a cell for the key
        const keyName = document.createElement("td");
        keyName.textContent = capitalizeWords(key.replace("_", " ")); // Set the key as the cell content
        row.appendChild(keyName);

        // Create cells for emissions, price, time, and rating
        ["emissions", "price", "time", "rating"].forEach(elem => {
          
            const cell = document.createElement("td");
            const unit = units[elem] || "";
            cell.textContent = Math.round(value[elem]) + unit; // Use the value of the property
            cell.style.textAlign = "right";
            cell.style.paddingRight = "3px";
            cell.style.paddingLeft = "3px";
            cell.setAttribute("id", key + "_" + elem); // Set an ID for the cell
            cell.setAttribute("class", elem); // Set a class for the cell
            row.appendChild(cell);
        });

        list.appendChild(row);
    });


    document.getElementById('results').classList.remove('hidden');
}

function rate(data) {
    const tot = social + economical + ecological;
    const emissions_weight = ecological / tot;
    const price_weight = economical / tot;
    const time_weight = social / tot;
    let emissions = [];
    let prices = [];
    let times = [];
    Object.keys(data).forEach(key => {
        emissions.push(data[key].emissions);
        prices.push(data[key].price);
        times.push(data[key].time);
      });
    const median_emissions = calculateMedian(emissions);
    const median_price = calculateMedian(prices);
    const median_time = calculateMedian(times);
    let max_rating = 0;
    // Find preliminary rating
    Object.keys(data).forEach(key => {
        data[key].rating = emissions_weight * 10 * median_emissions / Math.max(data[key].emissions / 10, 1) + price_weight * median_price / Math.max(data[key].price, 1) + time_weight * median_time / data[key].time;
        if (data[key].rating > max_rating) {
            max_rating = data[key].rating;
        }
      });
    // Normalize rating to 1-10
    Object.keys(data).forEach(key => {
        data[key].rating = Math.floor(10 * data[key].rating / max_rating);
        if (data[key].rating < 1) {
            data[key].rating = 1;
        }
        // console.log(data[key].rating);
    });
      
}

function calculateMedian(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
  
    return sorted.length % 2 !== 0
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;
  }

function capitalizeWords(sentence) {
    return sentence
        .split(" ") // Split the sentence into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(" "); // Join the words back into a sentence
}

function calculatePrice(key, data, passengers) {
    switch (key) {
        case "on_foot":
        case "bicycle":
            return data[key];
        case "ICE_car":
        case "electric_car":
            const carsRequired = Math.ceil(passengers / 5);
            const totalPrice = carsRequired * data[key];
            return Math.round(totalPrice / passengers);
        case "public_transport":
            return null;
            break;
        default:
            return null;
    }
}



function get_CO2_emissions(transportation_method, passengers, distance) {
    // Distance is in meters

    const emissionFactors = {
        // Average kg co2 emissions per m
        // Source: https://www.vasttrafik.se/info/statistik/ using the calc for electric buss 30 people and 1 for cars
        on_foot: 0,
        bicycle: 0,
        ICE_car: 0.182, // Alternative source for cars (not used): https://www.transportstyrelsen.se/sv/om-oss/statistik-och-analys/statistik-inom-vagtrafik/statistik-over-koldioxidutslapp/statistik-over-koldioxidutslapp-2021/
        electric_car: 0.058,
        public_transport: 0.006,
    };

    // Get the emission factor for the given transportation method
    const factor = emissionFactors[transportation_method];

    // If the transportation method is invalid, throw an error
      if (factor === undefined) {
        throw new Error(`Invalid transportation method: ${transportation_method}`);
    }

    // Calculate CO2 emissions
    const emissions = (factor * distance) / passengers;

    return Math.round(emissions); // Return the calculated emissions
}

function getSelectedTicket() {
    // Find the checked radio button
    const selected = document.querySelector('input[name="ticket_type"]:checked');
    // Return the value of the checked radio button
    return selected ? selected.value : null;
}

// Price calculation function
async function getPrice(transportationMethod, distance, passengers) {
    distance = distance/1000;
    // Variables
    const FuelPrice = 17; // Fuel price per liter (kr)
    const FuelConsumption = 8; // Liters per 100 km
    const electricityConsumption = 10; // kWh per 100 km
    const carsRequired = Math.ceil(passengers / 5);
    const ticket = getSelectedTicket();

    switch (transportationMethod) {
        case "ICE_car":
            const price =  (FuelConsumption / 100) * distance * FuelPrice;
            const totalPrice = carsRequired * price;
            return Number((totalPrice / passengers).toFixed(2));
        case "electric_car":
            const price1 = await elektroShock(distance, 0);
            const totalPrice2 = carsRequired * price1;
            return Number((totalPrice2 / passengers).toFixed(2));
        case "public_transport":
            switch (ticket) {
                case "pb":
                    return 0;
                case "sb":
                    return 36 * passengers;
                case "pl":
                    return 0;
            }
        case "bicycle":
        case "on_foot":
            return 0;
        default:
            throw new Error(`Invalid transportation method: ${transportationMethod}`);
    }
}

function initializeDarkModeToggle(toggleId) {
    // Select the dark mode toggle element
    const darkModeToggle = document.getElementById(toggleId);

    // Check for previously saved user preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Event listener to toggle dark mode
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeDarkModeToggle('dark-mode-toggle');
});


function getTime(transportationMethod, time_data, distance){
    const avg_walking_speed = 4.75 * 16.67 // [m/min]. Source for all: https://tekniskhandbok.goteborg.se/Arkiv/2019-1/wp-content/uploads/1E_9_Hastighet_2018-10.pdf
    const avg_biking_speed = 16 * 16.67   // * 16.67 to convert km/h into m/min
    const avg_public_transport_speed = 9 * 16.67
    const avg_driving_speed = 25 * 16.67

    const minimum_car_time = 2                  // Time for walking to the car, unlocking, sitting, parking, locking.
    const minimum_bycycle_time = 2              // Time for walking to the bike, unlocking, parking and locking.
    const minimun_public_transport_time = 3     // Time for walking to the stop. Usually further away than car or bycycle    

    let time = 0

    switch (transportationMethod) {
        case "ICE_car":
        case "electric_car":
            time += minimum_car_time
            if(time_data["car"] != "notSet"){
                time += Math.round(parseFloat(time_data["car"]))
            }
            else if(distance != undefined){
                time += Math.round(distance/avg_driving_speed)
            }
            break
        case "public_transport":
            time += minimun_public_transport_time
            if(time_data["public_transport"] != "notSet"){
                time += Math.round(parseFloat(time_data["public_transport"]))
            }
            else if(distance != undefined){
                time += Math.round(distance/avg_public_transport_speed)
            }
            break
        case "bicycle":
            time += minimum_bycycle_time
            if(time_data["bicycle"] != "notSet"){
                time += Math.round(parseFloat(time_data["bicycle"]))
            }
            else if(distance != undefined){
                time += Math.round(distance/avg_biking_speed)
            }
            break
        case "on_foot":
            if(time_data["walk"] != "notSet"){
                time += Math.round(parseFloat(time_data["walk"]))
            }
            else if(distance != undefined){
                time += Math.round(distance/avg_walking_speed)
            }
            break
        default:
            throw new Error(`Invalid transportation method: ${transportationMethod}`);
        }
    return time
}

// ONLY ELECTRICIANS MAY ENTER!
// DANGER
// High-Voltage Zone
// --------------------------------------------------------------------------------------

let electricityData = null; // Global variable to store fetched electricity data

// Fetch electricity price data on page load
document.addEventListener("DOMContentLoaded", async () => {
    // Set the default date and time (synchronous operation)
    const now = new Date();
    
    // Set the default date (YYYY-MM-DD format)
    const dateField = document.getElementById('tripDate');
    const currentDate = now.toISOString().split('T')[0];
    dateField.value = currentDate;

    // Set the default time (HH:MM format)
    const timeField = document.getElementById('tripTime');
    const currentTime = now.toTimeString().split(':').slice(0, 2).join(':');
    timeField.value = currentTime;

    try {
        electricityData = await fetchElectricityData();
        console.log("Electricity price data fetched successfully.");
    } catch (error) {
        console.error("Error fetching electricity data:", error.message);
        throw new Error("Failed to load electricity price data.");
    }
});

async function fetchElectricityData() {
    const d = new Date();
    const apiUrl = `https://www.elprisetjustnu.se/api/v1/prices/${d.getFullYear()}/${(d.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}_SE3.json`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Failed to fetch electricity data: HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching JSON data:", error.message);
        throw error;
    }
}

async function calculateCostForDistance(km, mode) {
    if (!electricityData) {
        throw new Error("Electricity price data has not been loaded yet.");
    }

    const power = 6; // kW
    const electricityPerKm = 0.2; // kWh/km
    const electricityConsumed = electricityPerKm * km; // Total kWh required
    const chargeStationPrice = 5.5 // per kWh
    const stationCost = electricityConsumed * chargeStationPrice

    // Map and prepare price intervals from electricity data
    const prices = electricityData.map(entry => ({
        timeStart: new Date(entry.time_start),
        pricePerKwh: entry.SEK_per_kWh,
    }));

    // Find the starting index for 21:00
    const startIndex = prices.findIndex(price =>
        price.timeStart.getHours() === 21 && price.timeStart.getMinutes() === 0
    );

    if (startIndex === -1) {
        throw new Error("Start time 21:00 not found in the electricity price data.");
    }

    // Calculate the total price for the given distance
    let totalPrice = 0;
    let remainingConsumption = electricityConsumed;

    for (let i = 0; remainingConsumption > 0; i++) {
        const index = (startIndex + i) % prices.length;
        const priceInterval = prices[index];
        const intervalCapacity = power;

        // Calculate the consumption covered in this interval
        const consumedInInterval = Math.min(intervalCapacity, remainingConsumption);
        totalPrice += priceInterval.pricePerKwh * consumedInInterval;

        // Reduce remaining consumption
        remainingConsumption -= consumedInInterval;
    }

    if (mode == 0) {
        return Math.round(totalPrice * 100) / 100; // Return the total price, rounded to 2 decimal places
    } else {
        return Math.round(stationCost * 100) / 100;
    }
}

async function elektroShock(km, mode) {
    try {
        if (isNaN(km) || km <= 0) {
            throw new Error("Please enter a valid positive distance.");
        }

        // Wait until the electricity data is available
        if (!electricityData) {
            console.log("Waiting for electricity data to be available...");
            while (!electricityData) {
                await new Promise(resolve => setTimeout(resolve, 50)); // Wait in 50ms intervals
            }
        }
        return calculateCostForDistance(km, mode);
    } catch (error) {
        console.error("Error calculating cost:", error.message);
        throw error;
    }
}

// --------------------------------------------------------------------------------------
// High-Voltage Zone
// DANGER