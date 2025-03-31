import { useState, useEffect } from "react";
import "./Bestiaire.css"; // CSS

function Bestiaire() {
    const [champions, setChampions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedChampion, setSelectedChampion] = useState(null);
    const version = "14.6.1";
    const lang = "fr_FR";
    const apiLink = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/champion.json`;

    // fetch pour les champions
    useEffect(() => {
        fetch(apiLink)
            .then((response) => response.json())
            .then((data) => {
                if (data.data) {
                    setChampions(Object.values(data.data));
                }

                // Debuge API champs
                // console.log(data.data);
            })
            .catch((error) => console.error("Erreur lors du chargement des champions :", error));
    }, []);

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    function getFilteredChampions() {
        return champions.filter((champ) =>
            champ.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // fetch pour les spells
    function fetchChampionDetails(championId) {
        const champApi = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/champion/${championId}.json`;
        fetch(champApi)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && data.data[championId]) {
                    setSelectedChampion(data.data[championId]);
                }

                // Debuge API spells
                // console.log(data.data[championId]);
            })
            .catch((error) => console.error("Erreur lors du chargement des détails :", error));
    }

    const filteredChampions = getFilteredChampions();

    return (
        <div className="bestiaire-container">
            {selectedChampion ? (
                <div className="champion-details">

                    <button onClick={() => setSelectedChampion(null)} className="close-button">Retour</button>

                    <div className="upInfo">
                        <h2>{selectedChampion.name}</h2>
                        <p>{selectedChampion.title}</p>
                    </div>
                    
                    <img 
                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${selectedChampion.id}_0.jpg`} 
                        alt={selectedChampion.name} 
                        className="champion-img" 
                    />

                    <div className="downInfo">
                        <h3>Rôles :</h3>
                        <p>{selectedChampion.tags.join(", ")}</p>

                        <h3>Statistiques (Niveau 1):</h3>
                        <div className="stats">
                            <p>PV : {selectedChampion.stats.hp}</p>
                            <p>Mana : {selectedChampion.stats.mp}</p>
                            <p>Attaque : {selectedChampion.stats.attackdamage}</p>
                            <p>Armure : {selectedChampion.stats.armor}</p>
                        </div>
                        
                        <h3>Sorts :</h3>
                        <div className="spells-container">
                            {selectedChampion.spells && selectedChampion.spells.map((spell) => (
                                <div key={spell.id} className="spell">
                                    <img 
                                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`} 
                                        alt={spell.name} 
                                        className="spell-img" 
                                    />
                                    <p>{spell.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <h1>Champions LoL</h1>

                    <div className="search">
                        <input
                            type="text"
                            placeholder="Rechercher un champion"
                            className="search-input"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <table className="bestiaire-table">

                        <thead>
                            <tr>
                                <th className="bestiaire-th">Image</th>
                                <th className="bestiaire-th">Nom</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredChampions.map((champ) => (
                                <tr key={champ.id} className="bestiaire-tr" onClick={() => fetchChampionDetails(champ.id)}>
                                    <td className="bestiaire-td">
                                        <img
                                            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png`}
                                            alt={champ.name}
                                            className="bestiaire-img"
                                        />
                                    </td>
                                    <td className="bestiaire-td">{champ.name}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </>
            )}
        </div>
    );
}

export default Bestiaire;