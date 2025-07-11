document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const messageBox = document.getElementById('messageBox');

    // Function to display messages
    function showMessage(message, isError = false) {
        messageBox.textContent = message;
        messageBox.classList.remove('error');
        if (isError) {
            messageBox.classList.add('error');
            messageBox.style.backgroundColor = '#f44336'; // Red
        } else {
            messageBox.style.backgroundColor = '#4CAF50'; // Green
        }
        messageBox.classList.add('show');

        setTimeout(() => {
            messageBox.classList.remove('show');
        }, 3000); // Hide after 3 seconds
    }

    bookingForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        if (!name || !email || !service || !date || !time) {
            showMessage('Please fill in all fields.', true);
            return;
        }

        if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
            showMessage('Please enter a valid email address.', true);
            return;
        }

        // // Simulate booking process
        // console.log('Booking details:', { name, email, service, date, time });


        // // For this simple example, we just show a success message and clear the form
        // showMessage('Booking for ' + service + ' on ' + date + ' at ' + time + ' confirmed!');

        // Prepare booking details to send to the email sender function
        const bookingDetails = { name, email, service, date, time };

        // Call the separate function to send the email API request
        // Ensure emailSender.js is loaded before this script
        try {
            const emailResult = await sendBookingConfirmationEmail(bookingDetails);

            if (emailResult.success) {
                showMessage('Booking for ' + service + ' on ' + date + ' at ' + time + ' confirmed! Confirmation email sent.', false);
            } else {
                showMessage('Booking confirmed, but failed to send confirmation email: ' + emailResult.message, true);
            }
        } catch (error) {
            console.error('Error in sending email process:', error);
            showMessage('An unexpected error occurred while confirming booking and sending email.', true);
        }

        // Put here the submit function where it make an api call for sending email message

        bookingForm.reset(); // Clear the form
    });
});