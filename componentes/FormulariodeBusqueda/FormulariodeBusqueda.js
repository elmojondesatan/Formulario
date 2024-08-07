document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = this.value;
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});