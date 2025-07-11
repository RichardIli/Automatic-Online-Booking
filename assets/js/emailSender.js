// emailSender.js
async function sendBookingConfirmationEmail(bookingDetails) {
    const { name, email, service, date, time } = bookingDetails;

    const apiUrl = 'https://appointment-booking-api-kappa.vercel.app/send-email'; // **IMPORTANT: Update this URL**

    const emailData = {
        to: email,
        subject: "Appointment Confirmation",
        templateData: {
            userName: name,
            appointmentDetails: {
                service: service,
                date: date,
                time: time
            },
            // You can generate a dynamic confirmation link here if needed
            confirmationLink: "http://www.facebook.com" // Sample link
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Email send success:', result);
        return { success: true, message: 'Email sent successfully!', details: result };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send email.', details: error.message };
    }
}