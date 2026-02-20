document.addEventListener('DOMContentLoaded', function() {
    const tiles = document.querySelectorAll('.post-tile');
    const showMoreBtn = document.getElementById('show-more-btn');
    let visibleCount = 5;

    // Hide all tiles except the first 5
    tiles.forEach((tile, index) => {
        if (index >= visibleCount) {
            tile.style.display = 'none';
        }
    });

    showMoreBtn.addEventListener('click', function() {
        const nextVisible = visibleCount + 10;
        for (let i = visibleCount; i < nextVisible && i < tiles.length; i++) {
            tiles[i].style.display = 'flex';
        }
        visibleCount = nextVisible;
        if (visibleCount >= tiles.length) {
            showMoreBtn.style.display = 'none';
        }
    });
});