import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';
import Gif from './components/Gif';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function(){
    console.log('actualizando los gifs');
    getGifs({keyword: 'erizo'}).then(gifs =>setGifs(gifs));
  },[])
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(({id,title,url}) => 
          <Gif 
            id={id}
            key={id} 
            title={title} 
            url={url}
          />
          )
        }
      </section>
    </div>
  );
}

export default App;
