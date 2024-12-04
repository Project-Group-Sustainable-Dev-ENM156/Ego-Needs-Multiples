// Event Listener for Form Submission
document.getElementById('tripForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get user input
    const startingPoint = document.getElementById('startingPoint').value;
    const destination = document.getElementById('destination').value;
    const passengers = document.getElementById('passengers').value;

    const distance = 10;

    // Example data for demonstration
    const data = {
        car_electric: { emissions: get_CO2_emissions("electric_car", distance), price: "$50", time: "2 hours" },
        car_fossil: { emissions: get_CO2_emissions("fosil_car", distance), price: "$50", time: "2 hours" },
        bus: { emissions: get_CO2_emissions("bus", distance), price: "$10", time: "3 hours" },
        bicycle: { emissions: get_CO2_emissions("bicycle", distance), price: "$0", time: "4 hours" },
        on_foot: { emissions: get_CO2_emissions("walk", distance), price: 0, time: "4 hours" }
    };

    // Update table with data
    document.getElementById('car-electric-emissions').textContent = data.car_electric.emissions;
    document.getElementById('car-electric-price').textContent = data.car_electric.price;
    document.getElementById('car-electric-time').textContent = data.car_electric.time;

    document.getElementById('car-fossil-emissions').textContent = data.car_fossil.emissions;
    document.getElementById('car-fossil-price').textContent = data.car_fossil.price;
    document.getElementById('car-fossil-time').textContent = data.car_fossil.time;

    document.getElementById('bus-emissions').textContent = data.bus.emissions;
    document.getElementById('bus-price').textContent = data.bus.price;
    document.getElementById('bus-time').textContent = data.bus.time;

    document.getElementById('bicycle-emissions').textContent = data.bicycle.emissions;
    document.getElementById('bicycle-price').textContent = data.bicycle.price;
    document.getElementById('bicycle-time').textContent = data.bicycle.time;

    document.getElementById('on-foot-emissions').textContent = data.on_foot.emissions;
    document.getElementById('on-foot-price').textContent = "$" + data.on_foot.price;
    document.getElementById('on-foot-time').textContent = data.on_foot.time;

    // Show the results table
    document.getElementById('results').classList.remove('hidden');
});

function get_CO2_emissions(transportation_method, distance) {
    // Define CO2 emission factors (kg CO2 per km) for different transportation methods
    const emissionFactors = {
        // Average kg co2 emissions per km
        // Source: https://www.vasttrafik.se/info/statistik/ using the calc for electric buss 30 people and 1 for cars
        bus: 6, 
        fosil_car: 182, // Alternative source for cars (not used): https://www.transportstyrelsen.se/sv/om-oss/statistik-och-analys/statistik-inom-vagtrafik/statistik-over-koldioxidutslapp/statistik-over-koldioxidutslapp-2021/
        electric_car: 58, 
        bicycle: 0,
        walk: 0
    };

    // Get the emission factor for the given transportation method
    const factor = emissionFactors[transportation_method.toLowerCase()];

    // If the transportation method is invalid, throw an error
      if (factor === undefined) {
        throw new Error(`Invalid transportation method: ${transportation_method}`);
    }

    // Calculate CO2 emissions
    const emissions = factor * distance;

    return emissions; // Return the calculated emissions
}



