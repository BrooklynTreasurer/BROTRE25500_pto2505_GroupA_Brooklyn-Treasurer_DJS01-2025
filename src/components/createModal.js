/**
 * Modal creation component
 * Handles the creation and display of a detailed podcast modal window
 * @module createModal
 */

import { getAllGenres } from '../utils/GenreService.js';
import { seasons } from '../data.js';

/**
 * Creates and displays a modal dialog with detailed podcast information
 * The modal displays the podcast title, description, genres, update date, and season details.
 * Clicking outside the modal or on the close button will dismiss it.
 * @function createModal
 * @param {Object} podcast - The podcast object containing the data to display
 * @param {string} podcast.id - Unique identifier for the podcast
 * @param {string} podcast.title - Title of the podcast
 * @param {string} podcast.description - Description of the podcast
 * @param {string} podcast.image - URL of the podcast cover image
 * @param {Array<number>} podcast.genres - Array of genre IDs
 * @param {string} podcast.updated - ISO date string of last update
 * @returns {void}
 */
export function createModal(podcast) {
    // Create modal elements
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close-button">&times;</span>
        <h2>${podcast.title}</h2>
        <div class="modal-content-top">
        <div class="img-container">
            <img src="${podcast.image}" alt="${podcast.title} Cover" class="modal-podcast-image"/>
        </div>
        <div class="modal-info">
            <h2>Description</h2>
                <p class="modal-description">${podcast.description}</p>
            <h3>Genres</h3>
            <p class="modal-genres">${getAllGenres([podcast])}</p>
            <p><strong>Last Updated:</strong> ${new Date(podcast.updated).toLocaleDateString()}</p>
        </div>
        </div>
        <h3>Seasons</h3>
        <div class="modal-seasons">
            ${(() => {
                const seasonEntry = seasons.find(s => s.id === podcast.id);
                if (seasonEntry && Array.isArray(seasonEntry.seasonDetails)) {
                    return seasonEntry.seasonDetails.map(sd => `
                        <div class="season">
                            <h4>${sd.title}</h4>
                            <p>Episodes: ${sd.episodes}</p>
                        </div>
                    `).join('');
                }
                // fallback if there's no season details
                return '<p>No season details available</p>';
            })()}
        </div>
        `;

    // Append modal to overlay
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
    // Show modal
    modalOverlay.style.display = 'block';
    // Close modal on clicking close button or outside modal
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay || e.target.className === 'close-button') {
            document.body.removeChild(modalOverlay);
        }
    });
}