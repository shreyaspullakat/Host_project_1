// This script adds functionality to the search bar
document.querySelector('.search-bar button').addEventListener('click', () => {
    const query = document.querySelector('.search-bar input').value;
    if (query) {
        alert(`You searched for: ${query}`);
    } else {
        alert('Please enter a search term.');
    }
});
