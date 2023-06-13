import React from "react";
import {Link, Route} from "wouter";
import './styles.css';
// Gifs que saldrán en la pantalla de inicio
const POPULAR_GIFS = ["Panda", "Erizo", "Hamster", "Leon", "Zebra"];

export default function Home() {

  return (
    <>
    <div className="App-content">
      <h3 className="App-title">Tus gifs favoritos</h3>
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