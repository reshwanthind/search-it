import { useState, useContext, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// CSS import
import './Navbar.css';

// Context import
import ThemeContext from '../../context/ThemeContext';

// Component import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';

function Navbar() {
    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const {movieList} = useMovieList(searchTerm);
    const navigator = useNavigate();
    const {theme, setTheme} = useContext(ThemeContext);

    function updateTheme() {
        if(theme === 'dark') {
            setTheme('light');
            localStorage.setItem('app-theme', 'light');
        } else {
            setTheme('dark');
            localStorage.setItem('app-theme', 'dark');
        }
    }

    function handleAutoCompleteClick(e, movieImdbId) {
        navigator(`/movie/${movieImdbId}`);
    }
    
    const debouncedChangeHandler = useCallback(
        useDebounce((e) => {
          setSearchTerm(e.target.value);
        }, 500),
        [] 
    );

    return (
        <nav className="navbar">
            <div className="navbar-row">
                <div className="navbar-logo">
                    <Link to="/">Search It</Link>
                </div>
                <div className="navbar-links">
                    <button className="theme-toggle" onClick={updateTheme} aria-label="Toggle theme">
                        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="theme-toggle-icon" />
                        <span className="theme-toggle-text">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                    </button>
                </div>
            </div>
            <div className="navbar-search-bar">
                <input
                    id="movie-search-input"
                    type="text"
                    onFocus={() => setIsAutoCompleteVisible(true)}
                    onBlur={() => setIsAutoCompleteVisible(false)}
                    onChange={debouncedChangeHandler}
                    placeholder="What movie are you thinking about..."
                    style={{width: '100%', padding: '0.5em 1em', borderRadius: '2em', border: '1px solid var(--light-prime-gray)', outline: 'none', fontSize: '1rem', background: 'var(--card-background)', color: 'var(--font-color)', transition: 'background var(--transition), color var(--transition)'}}
                />
                <div id="result-list" style={{display: isAutoCompleteVisible ? 'block' : 'none', position: 'absolute', background: 'var(--card-background)', boxShadow: 'var(--shadow)', borderRadius: '1em', marginTop: '0.5em', width: '100%', zIndex: 10}}>
                    {searchTerm && <div className="autocomplete-result" style={{padding: '0.5em 1em', color: 'var(--dull-blue)'}}>Search results for: {searchTerm}</div>}
                    {movieList.length > 0 && 
                        movieList.map(movie => (
                        <div 
                            onMouseDown={(e) => handleAutoCompleteClick(e, movie.imdbID)} 
                            key={movie.imdbID}
                            className="autocomplete-result"
                            style={{padding: '0.5em 1em', cursor: 'pointer', color: 'var(--font-color)'}}>
                                {movie.Title}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;  