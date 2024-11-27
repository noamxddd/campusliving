document.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelector('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let counter = 0;
    const size = slide.children[0].clientWidth;

    nextButton.addEventListener('click', () => {
        if (counter >= 3) return; // Previene deslizar más allá de la última imagen
        counter++;
        slide.style.transform = `translateX(${-size * counter}px)`;
    });

    prevButton.addEventListener('click', () => {
        if (counter <= 0) return; // Previene deslizar más allá de la primera imagen
        counter--;
        slide.style.transform = `translateX(${-size * counter}px)`;
    });
});

