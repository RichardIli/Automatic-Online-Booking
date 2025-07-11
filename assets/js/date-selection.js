document.addEventListener('DOMContentLoaded', function () {
    const dateInput = document.getElementById('date');

    // Get the current date
    const today = new Date();

    // Format the date as YYYY-MM-DD for the min attribute
    // This ensures that the date input only allows selection from today onwards.
    const year = today.getFullYear();
    // getMonth() returns 0-indexed month, so add 1.
    // padStart(2, '0') ensures two digits (e.g., '01' instead of '1').
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const minDate = `${year}-${month}-${day}`;

    // Set the min attribute of the date input to today's date.
    // Users will not be able to select a date earlier than this.
    dateInput.min = minDate;

    // Optional: Add an event listener to log the selected date to the console
    dateInput.addEventListener('change', function () {
        console.log(`Selected Date: ${this.value}`);
    });
});