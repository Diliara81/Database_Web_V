const form = document.querySelector('form');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
    const words = message.value.trim().split(/\s+/);
    if (words.length > 10) {
        e.preventDefault();
        alert('Message must be 10 words or less.');
        message.focus();
    }
});
