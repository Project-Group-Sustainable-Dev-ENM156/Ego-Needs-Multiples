// Define CO2 emission factors (kg CO2 per km) for different transportation methods
const distance = 10
const emissionFactors = {
    // Average kg co2 emissions per km
    // Source: https://www.vasttrafik.se/info/statistik/ using the calc for electric buss 30 people and 1 for cars
    on_foot: 0,
    bicycle: 0,
    ICE_car: 182, // Alternative source for cars (not used): https://www.transportstyrelsen.se/sv/om-oss/statistik-och-analys/statistik-inom-vagtrafik/statistik-over-koldioxidutslapp/statistik-over-koldioxidutslapp-2021/
    electric_car: 58, 
    public_transport: 6, 
};

// const p = {
//     on_foot: getPrice("on_foot", distance),
//     bicycle: getPrice("bicycle", distance),
//     ICE_car: getPrice("ICE_car", distance),
//     electric_car: getPrice("electric_car", distance),
//     public_transport: getPrice("public_transport", distance)
// };

const p = {
    on_foot: 0,
    bicycle: 0,
    ICE_car: 1000,
    electric_car: 100,
    public_transport: 0
};

var startingPoint;
var destination;
var startingPoint;
var startingPoint;

// Event Listener for Form Submission
document.getElementById('search-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get user input
    startingPoint = document.getElementById('fromDestination').value;
    destination = document.getElementById('toDestination').value;
    passengers = document.getElementById('passengerCount').value;

    createTable()
});

function createTable() {
    let data = {}
    Object.keys(p).forEach(k => {
        data[k] = {
            emissions: get_CO2_emissions(k, emissionFactors, passengers, distance), 
            price: calculatePrice(k, p, passengers), 
            time: null
        }
    })

    let list = document.getElementById("tbod")
    while (list.children.length >= 1) {
        list.removeChild(list.lastChild); // Remove rows except the first one
    }

    Object.entries(data).forEach(([key, value]) => {
        let row = document.createElement("tr");
        
        // Create a cell for the key
        let keyName = document.createElement("td");
        keyName.textContent = capitalizeWords(key.replace("_", " ")); // Set the key as the cell content
        row.appendChild(keyName);
        
        // Create cells for emissions, price, and time
        ["emissions", "price", "time"].forEach(elem => {
            let cell = document.createElement("td");
            cell.textContent = value[elem]; // Use the value of the property
            cell.setAttribute("id", key + "_" + elem); // Set an ID for the cell
            cell.setAttribute("class", elem); // Set an Class for the cell
            row.appendChild(cell);
        });

        document.getElementById("tbod").appendChild(row);
    });

    document.getElementById('results').classList.remove('hidden');
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



function get_CO2_emissions(key, emissionFactors, passengers, distance) {
    let transportation_method = key
    // Get the emission factor for the given transportation method
    const factor = emissionFactors[transportation_method];

    // If the transportation method is invalid, throw an error
      if (factor === undefined) {
        throw new Error(`Invalid transportation method: ${transportation_method}`);
    }

    // Calculate CO2 emissions
    const emissions = factor * distance * passengers;

    return emissions; // Return the calculated emissions
}

// Variables I dont have
const ElectricityPrice = 2.5;  // Price per kWh (kr)

// Variables
const FuelPrice = 15; // Fuel price per liter (kr)
const FuelConsumption = 8; // Liters per 100 km 
const electricityConsumption = 10; // kWh per 100 km

// Price calculation function
function getPrice(transportationMethod, distance) {

    switch (transportationMethod) {
        case "ICE_car":
            return (FuelConsumption / 100) * distance * FuelPrice;
        case "electric_car":
            return (electricityConsumption / 100) * distance * ElectricityPrice;
        case "public_transport":
            return 36; 
        case "bicycle":
        case "on_foot":
            return 0;
        default:
            throw new Error(`Invalid transportation method: ${transportationMethod}`);
    }
};
