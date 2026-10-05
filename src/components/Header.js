import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="header">
      <div>
        <h1>Mini Movie Manager</h1>
      </div>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
}
export default Header;
