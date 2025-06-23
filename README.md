# Phase-1-Final-Project

The User Directory SPA is a dynamic, single-page web application designed to provide an intuitive interface for exploring and managing user data. Imagine a sleek directory where users can browse a list of people, search for specific individuals by name, filter by city, and view detailed contact information with a single click—all without reloading the page. This app serves as a proof-of-concept for a modern, user-friendly contact management system, leveraging a public API to deliver real-time data in a responsive, interactive format. It’s perfect for scenarios like event planning, customer relationship management, or community directories, offering a seamless experience for users to find and interact with contact information efficiently.

## Core Features of the MVP

The Minimum Viable Product (MVP) includes the following core features:

User List Display: Renders a list of users fetched from a public API, showing each user’s name with a clean, card-like design.

Search by Name: A search form allows users to filter the list by entering a name, updating results instantly upon form submission.

City Filter: A dropdown menu lets users filter the list by city, dynamically populated with unique cities from the API data.

Toggle User Details: Clicking a user’s name reveals or hides their details (e.g., email, address, phone) without affecting other elements.

Responsive Design: A mobile-friendly layout ensures usability across devices, with hover effects and smooth transitions for enhanced interaction.

## API Data and Usage

The app uses the JSONPlaceholder API’s /users endpoint (https://jsonplaceholder.typicode.com/users), a free, no-authentication-required API that returns a JSON array of 10 user objects. Each user object includes attributes such as:

id (unique identifier)

name (full name, e.g., “Leanne Graham”)

email (e.g., “Sincere@april.biz”)

address (object with street, city, etc.)

phone (e.g., “1-770-736-8031”)

### How the Data is Used:

Fetching Data: On page load, the app asynchronously fetches the user list using a GET request, parsing the JSON response to populate the users array.

Rendering: The renderUsers function iterates over the user array to display each user’s name in a list, with details (email, address, phone) hidden by default.

Search Functionality: The filter method matches user names against the search input, updating the displayed list dynamically.

City Filtering: The map method extracts unique cities from the address.city field to populate a dropdown, and filter restricts the list to users from the selected city.

Detail Toggling: Clicking a user’s name toggles a div containing their email, address, and phone, enhancing interactivity without additional API calls.

## Conclusion

The User Directory SPA delivers a polished, interactive experience for browsing and filtering user data, built with HTML, CSS, and JavaScript. By leveraging JSONPlaceholder’s API, it ensures reliable data access without authentication hurdles. The app’s core features—search, city filtering, and detail toggling—provide practical interactivity, while modular code and array iteration ensure maintainability and efficiency. Despite challenges like asynchronous data handling and dynamic updates, the app is designed for robustness and scalability, making it an ideal foundation for further enhancements like sorting or user management. This project showcases a modern, client-side application that meets all technical requirements while offering a user-friendly interface.

#### Project Setup

Clone the repository to your local machine.

Navigate to the project directory.

Open index.html in a web browser to start the application. No additional dependencies or setup are required.

#### Author & License

Immanuel Kinuthia

immanuel.kinuthia@student.moringaschool.com

Created: 04:00 PM EAT, Friday, June 27, 2025

Free to use, modify, and distribute.