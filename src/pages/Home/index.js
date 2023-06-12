import React from "react";
import {Link} from "wouter";
// Gifs que saldrán en la pantalla de inicio
const POPULAR_GIFS = ["Panda", "Erizo", "Hamster"];

export default function Home() {

  return (
    <>
      <h3 className="App-title">Tus gifs favoritos</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif)=>(
            <li key={popularGif}>
                <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
        ))}
      </ul>
    </>
  )
}