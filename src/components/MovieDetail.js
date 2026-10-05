const genreLabels = {
  'Sci-Fi': 'Sci-Fi',
  Animation: 'Animation',
  Action: 'Action',
  Drama: 'Drama',
  Comedy: 'Comedy',
  Romance: 'Romance',
};

function MovieDetail({ movie, onClose }) {
  if (!movie) return null;
  return (
    <div className="detail-overlay">
      <div className="movie-detail">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{movie.title}</h2>
        <p><b>Genre:</b> {genreLabels[movie.genre] || movie.genre}</p>
        <p><b>Year:</b> {movie.year}</p>
        <p><b>Rating:</b> {movie.rating}</p>
        <p><b>Director:</b> {movie.director}</p>
        <p><b>Duration:</b> {movie.duration} minutes</p>
        <p><b>Description:</b> {movie.description}</p>
      </div>
    </div>
  );
}
export default MovieDetail;
