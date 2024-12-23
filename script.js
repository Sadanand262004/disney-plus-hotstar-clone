document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (email === '' || password === '') {
        alert('Please enter both email and password');
    } else {
        // Simple validation for demo purposes
        if (email === 'test@example.com' && password === 'password123') {
            alert('Login successful');
            // Redirect to dashboard or next page here
            window.location.href = 'home.html';
        } else {
            alert('Invalid credentials');
        }
    }
});

// Help button functionality
const helpButton = document.getElementById('help-button');
const helpMessage = document.getElementById('help-message');
const closeHelpButton = document.getElementById('close-help');

helpButton.addEventListener('click', function() {
    helpMessage.classList.remove('hidden');
});

closeHelpButton.addEventListener('click', function() {
    helpMessage.classList.add('hidden');
});
