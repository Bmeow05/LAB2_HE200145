import { useRef } from 'react';

function SearchBar({ onSearch }) {
  const searchRef = useRef(null);
  const handleChange = () => onSearch(searchRef.current.value);
  return (
    <div className="control-group">
      <label>Tìm phim:</label>
      <input ref={searchRef} type="text" placeholder="Nhập tên phim..." onChange={handleChange} />
    </div>
  );
}
export default SearchBar;
