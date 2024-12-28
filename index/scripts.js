document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor tags inside the logo class
    const logoButtons = document.querySelectorAll('.logo a');

    // Add event listeners for smooth transitions
    logoButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = "transform 0.3s ease, color 0.3s ease";
            this.style.transform = "scale(1.1)";
            this.style.color = "#4CAF50"; // Change the color when hovering
        });

        button.addEventListener('mouseleave', function() {
            this.style.transition = "transform 0.3s ease, color 0.3s ease";
            this.style.transform = "scale(1)"; // Reset the scale on hover out
            this.style.color = ""; // Reset the color
        });
    });
});
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message!');
            form.reset();
        } else {
            return response.json().then(data => {
                console.error('Error:', data);
                alert('Oops! Something went wrong. Please try again.');
            });
        }
    })
    .catch(error => {
        console.error('Fetch Error:', error);
        alert('Oops! Something went wrong. Please try again.');
    });
});
