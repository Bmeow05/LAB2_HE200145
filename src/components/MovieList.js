import MovieItem from './MovieItem';

function MovieList({ movies, favoriteIds, onToggleFavorite, onViewDetails }) {
  if (movies.length === 0) return <p className="empty">Không tìm thấy phim nào.</p>;
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} isFavorite={favoriteIds.includes(movie.id)} onToggleFavorite={onToggleFavorite} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
}
export default MovieList;
