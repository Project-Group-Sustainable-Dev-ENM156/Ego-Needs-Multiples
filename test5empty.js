const fs = require('fs');

// Your Västtrafik credentials
const clientId = '';
const clientSecret = '';
const authUrl = 'https://ext-api.vasttrafik.se/token';
const apiUrl = 'https://ext-api.vasttrafik.se/pr/v4/journeys';

// Function to get an access token
async function getAccessToken(clientId, clientSecret) {
    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    const body = new URLSearchParams({ grant_type: 'client_credentials' });

    try {
        const response = await fetch(authUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: body.toString(),
        });

        if (response.ok) {
            const data = await response.json();
            return data.access_token;
        } else {
            console.error(`Error fetching access token: ${response.status} ${await response.text()}`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching access token:', error);
        return null;
    }
}

// Function to make a request to the /journeys endpoint
async function getJourney(accessToken, originGid, destinationGid, date, time, mode) {
    const params = new URLSearchParams({
        originGid,
        destinationGid,
        date,  // Format: YYYY-MM-DD
        time,  // Format: HH:MM
        searchForArrival: 'false',  // true for arrival, false for departure
        transportModes: mode,
    });

    try {
        const response = await fetch(`${apiUrl}?${params.toString()}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            console.error(`Error making /journeys request: ${response.status} ${await response.text()}`);
            return null;
        }
    } catch (error) {
        console.error('Error making /journeys request:', error);
        return null;
    }
}

// Function to save the result to a JSON file
function saveToJson(data, filename) {
    try {
        fs.writeFileSync(filename, JSON.stringify(data, null, 4), 'utf-8');
        console.log(`Result saved to ${filename}`);
    } catch (error) {
        console.error(`Error saving file: ${error.message}`);
    }
}

// Example usage
(async () => {
    const token = await getAccessToken(clientId, clientSecret);
    if (token) {
        // Replace these with actual GIDs from Västtrafik's system
        const originGid = '9021014003980000';  // Example: Gothenburg Central Station
        const destinationGid = '9021014001050000';  // Example: Another valid GID
        const date = '2024-12-10';  // Specify your desired date
        const time = '14:00';       // Specify your desired time
        const mode = 'walk';

        const journeyData = await getJourney(token, originGid, destinationGid, date, time, mode);
        if (journeyData) {
            saveToJson(journeyData, 'journey_resultJS.json');
        }
    }
})();
