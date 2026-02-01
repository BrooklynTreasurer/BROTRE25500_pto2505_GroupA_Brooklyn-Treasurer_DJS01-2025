import { genres } from '../data.js';

//function to find genres from a id array
export function getAllGenres(podcasts) {
    const genreNames = podcasts.flatMap(podcast =>
        podcast.genres.map(genreId => {
            const genre = genres.find(g => g.id === genreId);
            return genre ? genre.title : 'Unknown';
        })
    );
    return genreNames.join(', ');
}
