function GenreFilter({ genre, onGenreChange }) {
  const genres = [
    ['All Genres', 'Tất cả thể loại'],
    ['Action', 'Hành động'],
    ['Animation', 'Hoạt hình'],
    ['Comedy', 'Hài'],
    ['Drama', 'Chính kịch'],
    ['Romance', 'Tình cảm'],
    ['Sci-Fi', 'Khoa học viễn tưởng'],
  ];
  return (
    <div className="control-group">
      <label>Thể loại:</label>
      <select value={genre} onChange={(e) => onGenreChange(e.target.value)}>
        {genres.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
      </select>
    </div>
  );
}
export default GenreFilter;
