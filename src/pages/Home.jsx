import { useEffect, useState } from "react"
import datos from "../json/discos.json"
import { AlbumCard } from "../components/AlbumCard"
import { AlbumModal } from "../components/AlbumModal"
import { Header } from "../components/Header"
import { SearchFAB } from "../components/SearchFAB"
import { ScrollTopButton } from "../components/ScrollTopButton"
import "./Home.css"

export const Home = () => {

    const [albums, setAlbums] = useState(datos)
    const [filterGenre, setFilterGenre] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedAlbum, setSelectedAlbum] = useState(null)

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

    const closeModal = () => setSelectedAlbum(null)

    return (
        <div className="home-container">
            <Header filterGenre={filterGenre} setFilterGenre={setFilterGenre} />
            
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

            {!selectedAlbum && <ScrollTopButton />}
            
            {!selectedAlbum && (
                <SearchFAB 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    setFilterGenre={setFilterGenre} 
                />
            )}
        </div>
    )
}