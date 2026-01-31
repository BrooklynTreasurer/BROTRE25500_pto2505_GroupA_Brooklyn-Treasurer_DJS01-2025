import podcasts from '../src/data.js';

/**
 * createPodcastCard - Creates a podcast card element.
 *
 * @param {Object} podcasts - The podcast data.
 * @param {string} podcast.title - The title of the podcast.
 * @param {string} podcast.description - The description of the podcast.
 * @param {string} podcast.imageUrl - The URL of the podcast image.
 * @return {HTMLElement} The podcast card element.
 */

export function createPodcastCard(podcasts) {
    const card = document.createElement('div');
    card.className = 'podcast-card';
    card.innerHTML = `
        <img src="${podcast.imageUrl}" alt="${podcasts.title} Cover" class="podcast-image"/>
         <div class="podcast-info">
            <h3 class="podcast-title">${podcasts.title}</h3>
            <p class="podcast-description">${podcasts.description}</p>
            <p class="podcast-seasons">${podcasts.seasons} Seasons</p>
            <p class="genres">${podcasts.genres.join(', ')}</p>
            <p class="podcast-update">Last Updated: ${new Date(podcasts.lastUpdated).toLocaleDateString()}</p>
     </div>
    `;
    return card;
}