// Event Listener for Form Submission
document.getElementById('tripForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get user input
    const startingPoint = document.getElementById('startingPoint').value;
    const destination = document.getElementById('destination').value;
    //const transportation = document.getElementById('transportation').value;
    const passengers = document.getElementById('passengers').value;

    // Example data for demonstration
    const data = {
        car_electric: { emissions: "120 g/km", price: "$50", time: "2 hours" },
        car_fossil: { emissions: "120 g/km", price: "$50", time: "2 hours" },
        bus: { emissions: "30 g/km", price: "$10", time: "3 hours" },
        bicycle: { emissions: "0 g/km", price: "$0", time: "4 hours" }
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

    // Show the results table
    document.getElementById('results').classList.remove('hidden');
});