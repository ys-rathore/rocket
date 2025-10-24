// --- FRONTEND SCRIPT (Makes the API call) ---

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('increment-button');
    const countDisplay = document.getElementById('count-display');
    const messageDisplay = document.getElementById('message');
    const timestampDisplay = document.getElementById('timestamp');

    const fetchCount = async () => {
        try {
            messageDisplay.textContent = "Fetching new count...";
            
            // Make request to the Express backend (uses relative path /api/increment)
            const response = await fetch('/api/increment');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();

            // Update UI
            countDisplay.textContent = data.count;
            messageDisplay.textContent = data.message;
            timestampDisplay.textContent = `Last server update: ${data.timestamp}`;

        } catch (error) {
            console.error("Error fetching data:", error);
            messageDisplay.textContent = "Error: Could not connect to the dynamic server.";
            timestampDisplay.textContent = "Check server logs for details.";
        }
    };

    button.addEventListener('click', fetchCount);
    fetchCount(); // Initial load when the page first loads
});