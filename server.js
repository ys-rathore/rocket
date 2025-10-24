// --- BACKEND LOGIC (Node.js/Express) ---

const express = require('express');
const app = express();
// Render requires the application to listen on the port defined by the PORT environment variable.
const port = process.env.PORT || 10000; 

// State variable to hold the counter value (dynamic data)
let visitCount = 0;

// Middleware to serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static('public'));

// Define a Dynamic API Endpoint
app.get('/api/increment', (req, res) => {
    // Increment the count every time this endpoint is hit
    visitCount++;
    
    // Respond with the new dynamic data as JSON
    res.json({
        message: `Hello from the server! This is visit number ${visitCount}.`,
        count: visitCount,
        timestamp: new Date().toLocaleTimeString()
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running and listening on port ${port}`);
});