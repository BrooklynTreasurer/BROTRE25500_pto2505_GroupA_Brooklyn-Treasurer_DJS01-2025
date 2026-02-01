/**
 * Main entry point for the podcast application
 * Initializes the application and manages rendering of podcast cards
 * @module index
 */

import { podcasts } from "./data.js";
import { createPodcastCard } from "./components/createPodcastCard.js";

/**
 * Container element for podcast cards
 * @type {HTMLElement}
 */
const podcastCardsContainer = document.getElementById('podcast-list');

/**
 * Renders podcast cards from the podcasts data array
 * Clears existing cards and creates new card elements for each podcast
 * @function renderPodcastCards
 * @returns {void}
 */
export function renderPodcastCards() {
    if (!podcastCardsContainer) return;
    podcastCardsContainer.innerHTML = '';
    podcasts.forEach(podcasts => {
        const card = createPodcastCard(podcasts);
        podcastCardsContainer.appendChild(card);
    });
    

}

/**
 * Initializes the application
 * Calls renderPodcastCards to display all podcasts on page load
 * @function init
 * @returns {void}
 */
function init() {
    renderPodcastCards();
}
init();