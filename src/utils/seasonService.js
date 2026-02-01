import { seasons } from '../data.js';
// function to match podcast id to seasons id array and return seasons and episodes

export function getAllSeasons(podcasts) {
    const seasons = podcasts.flatMap(podcast =>
        podcast.seasons.map(seasonId => {
            const season = seasons.find(s => s.id === seasonId);
            return season ? season.title : 'Unknown';
        })
    );
    return seasons.join(', ');
}