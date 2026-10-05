import { useMemo, useState } from 'react';
import './App.css';
import { movies } from './datas/movies';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import useLocalStorage from './hooks/useLocalStorage';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All Genres');
  const [sort, setSort] = useState('default');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favoriteIds, setFavoriteIds] = useLocalStorage('movie_favorites', []);

  const displayedMovies = useMemo(() => {
    let result = movies.filter((movie) => movie.title.toLowerCase().includes(search.trim().toLowerCase()));
    if (genre !== 'All Genres') result = result.filter((movie) => movie.genre === genre);
    if (sort === 'high') result = [...result].sort((a, b) => b.rating - a.rating);
    if (sort === 'low') result = [...result].sort((a, b) => a.rating - b.rating);
    return result;
  }, [search, genre, sort]);

  const toggleFavorite = (id) => {
    setFavoriteIds((current) => current.includes(id) ? current.filter((movieId) => movieId !== id) : [...current, id]);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Header />
        <section className="controls">
          <SearchBar onSearch={setSearch} />
          <GenreFilter genre={genre} onGenreChange={setGenre} />
          <div className="control-group">
            <label>Sắp xếp theo:</label>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="default">Mặc định</option>
              <option value="high">Đánh giá: cao đến thấp</option>
              <option value="low">Đánh giá: thấp đến cao</option>
            </select>
          </div>
        </section>
        <div className="summary"><b>Tổng số phim: {displayedMovies.length}</b> <span>Phim yêu thích: {favoriteIds.length}</span></div>
        <MovieList movies={displayedMovies} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} onViewDetails={setSelectedMovie} />
        <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      </div>
    </div>
  );
}
export default App;
