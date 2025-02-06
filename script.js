const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        window.location.href = `https://www.google.com/search?q=${searchTerm} site:apple.com/iphone`;
    }
});

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});
