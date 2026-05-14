import { useState } from 'react';

export const Header = ({ filterGenre, setFilterGenre }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleFilterSelect = (genre) => {
        setFilterGenre(genre);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header">
            <h1 data-text="LA BÓVEDA NEGRA">LA BÓVEDA NEGRA</h1>
            <p className="subtitle">LA COLECCIÓN CLANDESTINA</p>
            <nav className="nav-filters">
                {/* Desktop Filters */}
                <ul className="desktop-filters">
                    <li><button onClick={() => setFilterGenre("Pop Punk")} className={filterGenre === "Pop Punk" ? "active" : ""}>Pop Punk</button></li>
                    <li><button onClick={() => setFilterGenre("Post Hardcore")} className={filterGenre === "Post Hardcore" ? "active" : ""}>Post Hardcore</button></li>
                    <li><button onClick={() => setFilterGenre("Hardcore")} className={filterGenre === "Hardcore" ? "active" : ""}>Hardcore</button></li>
                    <li><button onClick={() => setFilterGenre("Indie Rock")} className={filterGenre === "Indie Rock" ? "active" : ""}>Indie Rock</button></li>
                    <li><button onClick={() => setFilterGenre("Hip Hop")} className={filterGenre === "Hip Hop" ? "active" : ""}>Hip Hop</button></li>
                    <li><button onClick={() => setFilterGenre("Punk")} className={filterGenre === "Punk" ? "active" : ""}>Punk</button></li>
                    <li><button onClick={() => setFilterGenre("all")} className={filterGenre === "all" ? "active" : ""}>Show All</button></li>
                </ul>

                {/* Custom Mobile Dropdown */}
                <div className="mobile-custom-dropdown">
                    <button 
                        className="dropdown-toggle" 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span>{filterGenre === 'all' ? 'FILTRAR GÉNERO' : filterGenre}</span>
                        <span className="toggle-icon">{isMobileMenuOpen ? '▲' : '▼'}</span>
                    </button>
                    
                    {isMobileMenuOpen && (
                        <ul className="dropdown-menu">
                            <li><button onClick={() => handleFilterSelect("all")} className={filterGenre === "all" ? "active" : ""}>TODOS LOS GÉNEROS</button></li>
                            <li><button onClick={() => handleFilterSelect("Pop Punk")} className={filterGenre === "Pop Punk" ? "active" : ""}>Pop Punk</button></li>
                            <li><button onClick={() => handleFilterSelect("Post Hardcore")} className={filterGenre === "Post Hardcore" ? "active" : ""}>Post Hardcore</button></li>
                            <li><button onClick={() => handleFilterSelect("Hardcore")} className={filterGenre === "Hardcore" ? "active" : ""}>Hardcore</button></li>
                            <li><button onClick={() => handleFilterSelect("Indie Rock")} className={filterGenre === "Indie Rock" ? "active" : ""}>Indie Rock</button></li>
                            <li><button onClick={() => handleFilterSelect("Hip Hop")} className={filterGenre === "Hip Hop" ? "active" : ""}>Hip Hop</button></li>
                            <li><button onClick={() => handleFilterSelect("Punk")} className={filterGenre === "Punk" ? "active" : ""}>Punk</button></li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};
