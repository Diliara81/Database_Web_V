const message = document.getElementById('message');
const messageError = document.getElementById('message-error');

function wordCount(s) {
    return s.trim().split(/\s+/).filter(Boolean).length;
}

message.addEventListener('input', () => {
    const words = wordCount(message.value);
    if (words > 10) {
        message.setCustomValidity('Please enter 10 words or less.');
        messageError.textContent = 'Your message has too many words (max 10).';
    } else {
        message.setCustomValidity('');
        messageError.textContent = '';
    }
});
