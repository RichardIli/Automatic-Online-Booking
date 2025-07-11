# ✨ Automatic Online Booking ✨

Effortless scheduling, instant confirmations.

This repository hosts the front-end code for a streamlined online booking system, meticulously crafted with HTML, CSS, and JavaScript. It seamlessly communicates with a robust backend API to manage service availability and automate appointment confirmations, ensuring a smooth experience for both users and service providers.

## 🚀 Features at a Glance

* **Service Discovery:** The intuitive web interface performs dynamic API requests to fetch and beautifully display all available services, allowing users to browse with ease.

* **Simplified Appointment Scheduling:** Users can effortlessly select their desired service, input essential details, and secure their appointment with just a few clicks.

* **📧 Instant Email Confirmation:** The moment an appointment is booked, the system dispatches a request to the backend API, which then automatically sends a personalized confirmation email to the user's provided inbox. No more manual follow-ups!

## 🛠️ Technologies Powering This App

* **Frontend Brilliance:**
    * **HTML5:** The structural foundation, clean and semantic.
    * **CSS3:** Bringing designs to life with modern styling and responsiveness.
    * **JavaScript (Vanilla JS):** The intelligent core, handling API interactions and dynamic UI updates.

* **Backend (API) Excellence:**
    * **Express.js (Node.js framework):** A fast, unopinionated, minimalist web framework providing the robust API endpoints.
    * **Deployed on Vercel:** Leveraging serverless capabilities for scalable and efficient hosting, ensuring high availability.
    * **Email Sending Capabilities:** Integrated for reliable and automated communication.

## 💡 How It Works

1.  **User Visits Page:** The user opens the `index.html` in their browser.

2.  **Fetch Services:** The JavaScript code makes an API call to your Vercel-deployed Express.js backend to retrieve a list of available services.

3.  **Display Services:** The fetched services are dynamically rendered on the webpage.

4.  **User Books:** The user fills out the booking form and submits it.

5.  **Send Booking Request:** The frontend sends the booking data to a specific API endpoint on your backend.

6.  **Backend Processes & Confirms:** Your Express.js backend receives the request, processes the booking, and then triggers the automatic email confirmation to the user.