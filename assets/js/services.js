// services.js

// Import the fetchServices function from fetch-services.js
import { fetchServices } from './fetch-services.js'; // Adjust the path if fetch-services.js is in a different directory

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', async function () { // Made the function async
    // Get a reference to the select element
    const serviceSelect = document.getElementById('service');

    let services = []; // Initialize an empty array for services

    try {
        // Fetch the data using the imported function
        const fetchedData = await fetchServices();

        // Check if data was successfully fetched and is an array
        if (Array.isArray(fetchedData)) {
            // Map the fetched data to the format expected by your select options
            // Assuming the API returns objects with '_id' for value and 'name' for text
            services = fetchedData.map(service => ({
                value: service.value, // Changed from service._id to service.value
                text: service.text    // Changed from service.name to service.text
            }));

            // Add a default "Select a service" option
            const defaultOption = document.createElement('option');
            defaultOption.value = "";
            defaultOption.textContent = "Select a service";
            defaultOption.selected = true;
            defaultOption.disabled = true;
            serviceSelect.appendChild(defaultOption);


            // Loop through the services array and create an <option> element for each
            services.forEach(service => {
                const option = document.createElement('option'); // Create a new option element
                option.value = service.value; // Set the value attribute
                option.textContent = service.text; // Set the visible text
                serviceSelect.appendChild(option); // Add the option to the select element
            });
        } else {
            console.error("Fetched data is not an array or is undefined.");
            // Optionally, display an error message to the user
        }
    } catch (error) {
        console.error("Failed to load services:", error);
        // Optionally, display an error message to the user
    }

    // Optional: Add an event listener to show the selected value
    serviceSelect.addEventListener('change', function () {
        const selectedValue = this.value;
        const selectedText = this.options[this.selectedIndex].textContent;
        if (selectedValue) {
            console.log(`Selected Service: ${selectedText} (Value: ${selectedValue})`);
        } else {
            console.log('No service selected.');
        }
    });
});