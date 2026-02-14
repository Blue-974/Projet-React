import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Album.css";

function Album() {
    const [album, setAlbum] = useState(null);
    const [tracks, setTracks] = useState(null);

    let apiLinkId = "https://itunes.apple.com/lookup?id=";
    let apiLinkTracks = "https://itunes.apple.com/lookup?id=";
    let { id } = useParams();

    // fetch pour les détails de l'album
    useEffect(() => {
        if (!id) return;
        fetch(apiLinkId + id)
            .then((res) => res.json())
            .then((data) => {
                if (data.results && data.results.length > 0) {
                    setAlbum(data);
                }
            })
            .catch((err) => console.log(err));
    }, [id]);

    // fetch pour les tracks de l'album
    useEffect(() => {
        if (!id) return;
        fetch(apiLinkTracks + id + "&entity=song")
            .then((res) => res.json())
            .then((data) => {
                if (data.results && data.results.length > 1) {
                    let onlyTracks = data.results.slice(1);
                    setTracks(onlyTracks);
                }
            })
            .catch((err) => console.log(err));
    }, [id]);

    const play = (extract, e) => {
        let button = e.target;
        let audio = button.audio || new Audio(extract);

        if (audio.paused) {
            audio.play();
            button.textContent = "⏸️";
        } else {
            audio.pause();
            button.textContent = "▶️";
        }

        button.audio = audio; // On attache l’audio à l’élément pour le garder en mémoire
    };

    return (
        <>
            <button className="back-button" onClick={() => window.history.back()}>Retour</button>

            <h2>Page d'album</h2>

            <div className="album-container">
                {album && album.results.map((elem) => (
                        <div className="album" key={elem.collectionId}>
                            <h2>{elem.collectionName}</h2>
                            <img src={elem.artworkUrl100.replace("100x100", "600x600")} alt="" />
                        </div>
                    ))}

                <div className="tracks-container">
                    {tracks &&
                        tracks.map((elem) => (
                            <div className="track" key={elem.trackId}>
                                <button className="play" onClick={(e) => play(elem.previewUrl, e)}>▶️</button>
                                <h4>
                                    {elem.trackNumber} - {elem.trackName}
                                </h4>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default Album;