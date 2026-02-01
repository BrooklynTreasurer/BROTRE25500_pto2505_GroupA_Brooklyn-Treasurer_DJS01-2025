import { getAllGenres } from '../utils/GenreService.js';
import { seasons } from '../data.js';

//function to create podcast modal based on podcard click
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