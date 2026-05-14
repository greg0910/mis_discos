import "./AlbumCard.css"

export const AlbumCard = ({ album, onClick }) => {
    // Si alguna palabra del título tiene 11+ letras sin espacio, aplicar clase long-title
    const hasLongWord = album.album.split(' ').some(word => word.length >= 11);

    // Precarga las imágenes adicionales cuando el usuario acerca el cursor o toca la tarjeta
    const preloadImages = () => {
        if (album.imagenes) {
            album.imagenes.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        }
    };

    return (
        <article 
            className="album-card compact" 
            onClick={onClick}
            onMouseEnter={preloadImages}
            onTouchStart={preloadImages}
        >
            <div className="album-image-wrapper">
                <img src={album.portada} alt={`Portada de ${album.album}`} className="album-image" />
            </div>
            <div className="album-info-compact">
                <h2 className={hasLongWord ? "long-title" : ""}>{album.album}</h2>
                <h3>{album.banda} <span className="album-year">• {album.año}</span></h3>
            </div>
        </article>
    )
}
