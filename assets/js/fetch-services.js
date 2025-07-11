// fetch-services.js

// Define the API endpoint URL
const apiUrl = "https://appointment-booking-api-kappa.vercel.app/services";

/**
 * Function to fetch data from the API.
 * This function is exported so it can be imported and used in other JavaScript files.
 * @returns {Promise<Array|undefined>} A promise that resolves to an array of service data,
 * or undefined if an error occurs.
 */
export async function fetchServices() {
  try {
    // Make the API request using the fetch API
    const response = await fetch(apiUrl);

    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      // If not successful, throw an error with the status
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Log the fetched data to the console (for debugging)
    console.log("Fetched Services:", data);

    // Return the data
    return data;

  } catch (error) {
    // Catch and log any errors that occurred during the fetch operation
    console.error("Error fetching services:", error);
    // You might want to display a user-friendly message here as well
    return undefined; // Return undefined on error
  }
}
