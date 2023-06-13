import React, {useState} from "react";
import {Link, useLocation} from "wouter";
import './styles.css';
// Gifs que saldrán en la pantalla de inicio
const POPULAR_GIFS = ["Panda", "Erizo", "Hamster", "Leon", "Zebra"];

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const handleSubmit = evt =>{
    evt.preventDefault(); // para evitar que haga el refresco por defecto
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt =>{
    setKeyword(evt.target.value);
  }

  return (
    <>
    <div className="App-content">
      <h3 className="App-title">Tus gifs favoritos</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Busca tu gif fav aquí" onChange={handleChange} type="text" value={keyword} />
        <button>Buscar</button>
      </form>
      <ul>
        {POPULAR_GIFS.map((popularGif)=>(
            <li key={popularGif}>
                <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
        ))}
      </ul>
    </div>
    </>
  )
}