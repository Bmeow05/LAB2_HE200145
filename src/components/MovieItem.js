const genreLabels = {
  'Sci-Fi': 'Sci-Fi',
  Animation: 'Animation',
  Action: 'Action',
  Drama: 'Drama',
  Comedy: 'Comedy',
  Romance: 'Romance',
};

function MovieItem({ movie, isFavorite, onToggleFavorite, onViewDetails }) {
  return (
    <div className="movie-card">
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p> {genreLabels[movie.genre] || movie.genre}</p>
        <p>{movie.year}</p>
        <p> ⭐ {movie.rating}</p>
      </div>
      <div className="movie-actions">
        <button className={isFavorite ? 'favorite active' : 'favorite'} onClick={() => onToggleFavorite(movie.id)}>
          {isFavorite ? '★ Bỏ yêu thích' : '☆ Yêu thích'}
        </button>
        <button onClick={() => onViewDetails(movie)}>Xem chi tiết</button>
      </div>
    </div>
  );
}
export default MovieItem;
