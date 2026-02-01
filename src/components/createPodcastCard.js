import { podcasts } from '../data.js';
import * as dates from '../utils/DateUtils.js';

/**
 * createPodcastCard - Creates a podcast card element.
 *
 * @param {Object} podcastss - The podcast data.
 * @param {string} podcast.title - The title of the podcast.
 * @param {string} podcast.description - The description of the podcast.
 * @param {string} podcast.image - The URL of the podcast image.
 * @return {HTMLElement} The podcast card element.
 */

export function createPodcastCard(podcasts) {
    const card = document.createElement('div');
    card.className = 'podcast-card';
    card.innerHTML = `
        <img src="${podcasts.image}" alt="${podcasts.title} Cover" class="podcast-image"/>
         <div class="podcast-info">
            <h3 class="podcast-title">${podcasts.title}</h3>
            <p class="podcast-seasons">${podcasts.seasons} Seasons</p>
            <p class="genres">${podcasts.genres.join(', ')}</p>
            <p class="podcast-update">Last Updated: ${dates.formatDate(podcasts.updated).toLocaleDateString()}</p>
     </div>
    `;
    return card;
}