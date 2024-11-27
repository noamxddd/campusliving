document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const carouselInner = carousel.querySelector('.carousel-inner');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        const items = carousel.querySelectorAll('.carousel-item');
        const counter = carousel.querySelector('.image-counter');
        let currentIndex = 0;

        function updateCarousel() {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
            counter.textContent = `${currentIndex + 1} / ${items.length}`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });

        updateCarousel();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const favoriteButtons = document.querySelectorAll('.favorite');
    let favoritesList = [];

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const propertyId = this.getAttribute('data-id');

            // Alternar clase "favorited" para cambiar el color
            this.classList.toggle('favorited');

            // Añadir o quitar de la lista de favoritos
            if (this.classList.contains('favorited')) {
                // Añadir a favoritos
                if (!favoritesList.includes(propertyId)) {
                    favoritesList.push(propertyId);
                }
            } else {
                // Quitar de favoritos
                favoritesList = favoritesList.filter(fav => fav !== propertyId);
            }

            console.log('Favoritos:', favoritesList);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const favoriteButtons = document.querySelectorAll('.favorite');
    const favoritesSection = document.getElementById('favoritesSection');
    const favoritesGrid = document.getElementById('favoritesGrid');
    const showFavoritesButton = document.getElementById('showFavorites');
    let favoritesList = [];

    

    // Función para añadir una propiedad a la sección de favoritos
    function addPropertyToFavorites(propertyCard, propertyId) {
        const favoriteCard = propertyCard.cloneNode(true);
        favoriteCard.classList.add('favorite-card');
        favoriteCard.querySelector('.favorite').remove(); // Eliminar el botón de favorito en la vista de favoritos
        favoriteCard.setAttribute('data-id', propertyId); // Asegurarse de que tiene el ID de la propiedad
        favoritesGrid.appendChild(favoriteCard);
    }

    // Función para remover una propiedad de la sección de favoritos
    function removePropertyFromFavorites(propertyId) {
        const favoriteCard = favoritesGrid.querySelector(`[data-id="${propertyId}"]`);
        if (favoriteCard) {
            favoriteCard.remove();
        }
    }

    // Al hacer clic en el botón de "Favoritos", mostrar la sección de favoritos
    showFavoritesButton.addEventListener('click', function(event) {
        event.preventDefault();
        favoritesSection.style.display = 'block';
    });
});

document.querySelectorAll('.report').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('reportModal').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('reportModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('reportModal')) {
        document.getElementById('reportModal').style.display = 'none';
    }
});
