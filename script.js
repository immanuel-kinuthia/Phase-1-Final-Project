// DOM elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const cityFilter = document.getElementById('cityFilter');
const userList = document.getElementById('userList');
let users = []; // Store all users fetched from API
let uniqueCities = new Set(); // Store unique cities for filter dropdown

// Fetch users from JSONPlaceholder API
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

// Populate city filter dropdown with unique cities
function populateCityFilter() {
  uniqueCities = new Set(users.map(user => user.address.city));
  cityFilter.innerHTML = '<option value="">All Cities</option>'; // Reset dropdown
  uniqueCities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    cityFilter.appendChild(option);
  });
}

// Render users to the DOM
function renderUsers(filteredUsers) {
  userList.innerHTML = ''; // Clear existing list
  filteredUsers.forEach(user => {
    const li = document.createElement('li');
    li.className = 'user-item';
    li.innerHTML = `
      ${user.name}
      <div class="user-details">
        Email: ${user.email}<br>
        Address: ${user.address.street}, ${user.address.city}<br>
        Phone: ${user.phone}
      </div>
    `;
    // Add click event listener for toggling details
    li.addEventListener('click', toggleUserDetails);
    userList.appendChild(li);
  });
}

// Event handler for toggling user details (click event)
function toggleUserDetails(event) {
  const details = event.currentTarget.querySelector('.user-details');
  details.classList.toggle('show');
}

// Event handler for form submission (submit event)
function handleSearch(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCity = cityFilter.value;
  // Filter users by name and city
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm) &&
    (!selectedCity || user.address.city === selectedCity)
  );
  renderUsers(filteredUsers);
}

// Event handler for city filter change (change event)
function handleCityFilterChange() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCity = cityFilter.value;
  // Filter users by name and city
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm) &&
    (!selectedCity || user.address.city === selectedCity)
  );
  renderUsers(filteredUsers);
}

// Initialize the app
async function init() {
  users = await fetchUsers();
  if (users.length > 0) {
    populateCityFilter();
    renderUsers(users);
  }
}

// Add event listeners
searchForm.addEventListener('submit', handleSearch);
cityFilter.addEventListener('change', handleCityFilterChange);

// Start the app
init();