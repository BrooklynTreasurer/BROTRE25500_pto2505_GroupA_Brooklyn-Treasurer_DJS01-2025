import * as dates from '../utils/DateUtils.js';
import { getAllGenres } from '../utils/GenreService.js';
import { createModal } from './createModal.js';

/**
 * createPodcastCard - Creates  a podcast card element.
 *
 * @param {Object} podcast - The podcast data.
 * @param {string} podcast.title - The title of the podcast.
 * @param {string} podcast.description - The description of the podcast.
 * @param {string} podcast.image - The URL of the podcast image.
 * @return {HTMLElement} The podcast card element.
 */

export function createPodcastCard(podcast) {
    const card = document.createElement('div');
    card.className = 'podcast-card';
    card.innerHTML = `
        <img src="${podcast.image}" alt="${podcast.title} Cover" class="podcast-image"/>
         <div class="podcast-info">
            <h3 class="podcast-title">${podcast.title}</h3>
            <p class="podcast-seasons">${podcast.seasons} Seasons</p>
            <p class="genres">${getAllGenres([podcast])}</p>
            <p class="podcast-update">Last Updated: ${dates.formatDate(podcast.updated).toLocaleDateString()}</p>
     </div>
    `;
    card.addEventListener('click', () => {
        createModal(podcast);
    });
    return card;
}