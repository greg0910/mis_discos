import { useState } from 'react';
import { SearchIcon, CloseIcon } from './Icons';

export const SearchFAB = ({ searchQuery, setSearchQuery, setFilterGenre }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className={`search-fab-container ${isSearchOpen ? 'open' : ''}`}>
            {isSearchOpen && (
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Buscar banda o álbum..." 
                    value={searchQuery}
                    onChange={(e) => {
                        const value = e.target.value;
                        setSearchQuery(value);
                        if (value.trim() !== "") {
                            setFilterGenre("all");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                            setIsSearchOpen(false);
                        }
                    }}
                    autoFocus
                />
            )}
            <button className="search-fab-btn" onClick={() => {
                if (isSearchOpen) {
                    setSearchQuery("");
                }
                setIsSearchOpen(!isSearchOpen);
            }}>
                {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
            </button>
        </div>
    );
};
