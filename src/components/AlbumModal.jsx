import { useState, useEffect } from "react"
import { SpotifyIcon, AppleIcon, TidalIcon } from "./Icons"
import "./AlbumModal.css"

export const AlbumModal = ({ album, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    useEffect(() => {
        if (album) {
            setCurrentImageIndex(0);
        }
    }, [album]);

    if (!album) return null;

    const allImages = album.imagenes ? [album.portada, ...album.imagenes] : [album.portada];

    const nextImage = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    // Swipe handlers
    const minSwipeDistance = 50;
    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };
    const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) nextImage();
        if (distance < -minSwipeDistance) prevImage();
    };

    return (
        <>
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>✕</button>
                <div className="modal-left">
                    <div 
                        className="main-image-container"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {allImages.length > 1 && (
                            <button className="carousel-btn prev" onClick={prevImage}>❮</button>
                        )}
                        <img 
                            src={allImages[currentImageIndex]} 
                            alt={`Imagen de ${album.album}`} 
                            className={`modal-image ${currentImageIndex === 0 ? 'is-cover' : 'is-gallery'}`} 
                            onClick={() => setIsFullscreen(true)}
                            style={{ cursor: 'zoom-in' }}
                        />
                        {allImages.length > 1 && (
                            <button className="carousel-btn next" onClick={nextImage}>❯</button>
                        )}
                    </div>
                    {allImages.length > 1 && (
                        <div className="thumbnail-gallery">
                            {allImages.map((img, idx) => (
                                <img 
                                    key={idx} 
                                    src={img} 
                                    alt={`Miniatura ${idx + 1}`} 
                                    className={`thumbnail ${currentImageIndex === idx ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(idx)}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div className="modal-right">
                    <span className="album-genre">{album.genero}</span>
                    <h2>{album.album}</h2>
                    <h3>{album.banda} ({album.año})</h3>
                    <p className="album-description">{album.Descripcion}</p>
                    
                    <div className="modal-links-container">
                        <h4>Escúchalo en:</h4>
                        <div className="album-links">
                            {album.link[0].Spotify && (
                                <a href={album.link[0].Spotify} target="_blank" rel="noreferrer" className="btn-link spotify">
                                    <SpotifyIcon /> <span>Spotify</span>
                                </a>
                            )}
                            {album.link[0]["Apple Music"] && (
                                <a href={album.link[0]["Apple Music"]} target="_blank" rel="noreferrer" className="btn-link apple">
                                    <AppleIcon /> <span>Apple Music</span>
                                </a>
                            )}
                            {album.link[0].Tidal && (
                                <a href={album.link[0].Tidal} target="_blank" rel="noreferrer" className="btn-link tidal">
                                    <TidalIcon /> <span>Tidal</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {isFullscreen && (
            <div className="fullscreen-overlay" onClick={() => setIsFullscreen(false)}>
                <button className="close-btn close-fullscreen" onClick={() => setIsFullscreen(false)}>✕</button>
                <img 
                    src={allImages[currentImageIndex]} 
                    alt="Pantalla completa" 
                    className="fullscreen-image" 
                    onClick={(e) => e.stopPropagation()} 
                />
            </div>
        )}
        </>
    )
}
