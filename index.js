// Event Listener for Form Submission
document.getElementById('tripForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get user input
    const startingPoint = document.getElementById('startingPoint').value;
    const destination = document.getElementById('destination').value;
    const transportation = document.getElementById('transportation').value;
    const passengers = document.getElementById('passengers').value;

    // Example data for demonstration
    const data = {
        car: { emissions: "120 g/km", price: "$50", time: "2 hours" },
        bus: { emissions: "30 g/km", price: "$10", time: "3 hours" },
        bicycle: { emissions: "0 g/km", price: "$0", time: "4 hours" }
    };

    // Update table with data
    document.getElementById('car-emissions').textContent = data.car.emissions;
    document.getElementById('car-price').textContent = data.car.price;
    document.getElementById('car-time').textContent = data.car.time;

    document.getElementById('bus-emissions').textContent = data.bus.emissions;
    document.getElementById('bus-price').textContent = data.bus.price;
    document.getElementById('bus-time').textContent = data.bus.time;

    document.getElementById('bicycle-emissions').textContent = data.bicycle.emissions;
    document.getElementById('bicycle-price').textContent = data.bicycle.price;
    document.getElementById('bicycle-time').textContent = data.bicycle.time;

    // Show the results table
    document.getElementById('results').classList.remove('hidden');
});