const restaurants = ["In-N-Out", "Thai Village", "Sol Agave", "Don Joaquin Street Tacos", "Chick-fil-A", "CHOM Burger", "Taco Bell", "El Mexiquense Grill"]

function getRandomRestaurant() {
    const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)]
        alert(`We recommend: ${randomRestaurant}`)
}

const recommendationButton = document.getElementById('recommendation-button');

recommendationButton.addEventListener('click', getRandomRestaurant);

