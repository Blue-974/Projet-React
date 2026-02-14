import { useState, useEffect } from "react" 
import { useNavigate } from "react-router-dom";
import Loader from "react-js-loader";

import "./Music.css"

let apiLink = "https://itunes.apple.com/search?term="

function Music() {
    const [value, setValue] = useState("")
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [albumSet, setAlbumSet] = useState(null)

    const navigate = useNavigate()

    // Couleur pour le Loader
    let color = "#ffffff"

    useEffect(() => {
        fetch(apiLink + search)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            // On récupère les résultats de la requete 
            setResults(data)

            // On crée un Set() => C'est comme un tableau mais qui ne prend pas en compte les doublons 
            // Ici on utilise le Set afin de n'insérer qu'un élément par album (et pas tous les morceaux)
            let set = new Set()

            // On ajoute les résultats au Set
            data.results.forEach((result) => 
                set.add({ 
                    id : result.collectionId,
                    artist: result.artistName, 
                    album: result.collectionName, 
                    artwork: result.artworkUrl100, 
                    date: result.releaseDate.slice(0, 4)}
                ) 
            )

            // On vient changer le state pour les albums 
            setAlbumSet(set)
        })
        .catch(err => console.log(err))
    }, [search])

    function play() {
        var audio = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/00/13/3c/00133c94-7a87-30d5-91ea-31c034a8f967/mzaf_2732778722635858690.plus.aac.p.m4a');

        audio.play();
        audio.pause();
    }

    function redirect(id) {
        console.log(id)
        navigate("album/" + id)
    }


    console.log(albumSet)

    return ( 
        <>
            <h1>MU$IC</h1>

            <input className="search"
                type="text" 
                placeholder="Chercher un artiste, une musique, un album ..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="btn-search" onClick={() => setSearch(value)}>Rechercher</button>

            {(search && !albumSet ) && <Loader type="spinner-default" bgColor={color} color={color} title={"chargement..."} size={100} />}

            <div className="search-result">
                { albumSet && Array.from(albumSet).map((elem, index) => (
                    <div className="result" key={index} onClick={() => redirect(elem.id)}>
                        <img src={elem.artwork} />
                        <h3>Artist : {elem.artist}</h3>
                        <h3>Album : {elem.album}</h3>
                    </div>
                ))}
            </div>
        </>
     );
}

export default Music;