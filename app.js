// Select DOM elements
const searchBarButton = document.querySelector('.search-bar button');
const destinationInput = document.querySelector('.search-bar input[type="text"]');
const dateInputs = document.querySelectorAll('.search-bar input[type="date"]');
const guestSelect = document.querySelector('.search-bar select');

// Event listener for the "Search" button
searchBarButton.addEventListener('click', () => {
    const destination = destinationInput.value.trim();
    const checkInDate = dateInputs[0].value;
    const checkOutDate = dateInputs[1].value;
    const guests = guestSelect.value;

    if (!destination) {
        alert('Please enter a destination.');
        return;
    }

    if (!checkInDate || !checkOutDate) {
        alert('Please select check-in and check-out dates.');
        return;
    }

    // Simulate search functionality
    alert(`Searching for:
    Destination: ${destination}
    Check-in: ${checkInDate}
    Check-out: ${checkOutDate}
    Guests: ${guests}`);
});

// Event listener for the "Register" and "Sign In" buttons
const registerButton = document.querySelector('.btn.register');
const signInButton = document.querySelector('.btn.signin');

registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Redirecting to Register Page...');
});

signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Redirecting to Sign In Page...');
});

// Event listener for currency and help options
const currencyOption = document.querySelector('.options span:first-child');
const helpOption = document.querySelector('.options .help');

currencyOption.addEventListener('click', () => {
    alert('Change currency options here.');
});

helpOption.addEventListener('click', () => {
    alert('Contact support or view FAQs here.');
});
