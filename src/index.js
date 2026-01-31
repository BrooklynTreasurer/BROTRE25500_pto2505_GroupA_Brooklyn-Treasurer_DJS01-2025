import { podcasts } from "./data.js";
import { createPodcastCard } from "./components/createPodcastCard.js";


const podcastCardsContainer = document.getElementById('podcast-list');

// Function to render podcast cards
export function renderPodcastCards() {
    if (!podcastCardsContainer) return;
    podcastCardsContainer.innerHTML = '';
    podcasts.forEach(podcasts => {
        const card = createPodcastCard(podcasts);
        podcastCardsContainer.appendChild(card);
    });
    

}


// Initial rendering of podcast cards

function init() {
    renderPodcastCards();
}
init();