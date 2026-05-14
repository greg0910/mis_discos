import { useEffect, useState } from "react"
import datos from "../json/discos.json"
import { AlbumCard } from "../components/AlbumCard"
import { AlbumModal } from "../components/AlbumModal"
import { SearchIcon, CloseIcon } from "../components/Icons"
import "./Home.css"

export const Home = () => {

    const [albums, setAlbums] = useState(datos)
    const [filterGenre, setFilterGenre] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [selectedAlbum, setSelectedAlbum] = useState(null)
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        let filteredAlbums = datos;
        
        if (filterGenre !== "all") {
            filteredAlbums = filteredAlbums.filter(album => album.genero === filterGenre);
        }

        if (searchQuery.trim() !== "") {
            const lowerQuery = searchQuery.toLowerCase();
            filteredAlbums = filteredAlbums.filter(album => 
                album.album.toLowerCase().includes(lowerQuery) || 
                album.banda.toLowerCase().includes(lowerQuery)
            );
        }

        setAlbums(filteredAlbums);
    }, [filterGenre, searchQuery])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true)
            } else {
                setShowScrollTop(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const closeModal = () => setSelectedAlbum(null)
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    const handleFilterSelect = (genre) => {
        setFilterGenre(genre);
        setIsMobileMenuOpen(false);
    }

    return (
        <div className="home-container">
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
            
            <main className="albums-grid">
                {albums.map((album) => (
                    <AlbumCard 
                        key={album.id} 
                        album={album} 
                        onClick={() => setSelectedAlbum(album)} 
                    />
                ))}
            </main>
            
            <AlbumModal album={selectedAlbum} onClose={closeModal} />

            <footer className="footer">
                <p>© 2026 Mis Discos. Colección Musical.</p>
            </footer>

            {showScrollTop && (
                <button className="scroll-top-btn" onClick={scrollToTop}>
                    ↑
                </button>
            )}

            <div className={`search-fab-container ${isSearchOpen ? 'open' : ''}`}>
                {isSearchOpen && (
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Buscar banda o álbum..." 
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            if (e.target.value.trim() !== "") {
                                setFilterGenre("all");
                                window.scrollTo({ top: 0, behavior: "smooth" });
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
        </div>
    )
}