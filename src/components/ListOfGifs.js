import Gif from './Gif';
import React, {useEffect, useState} from 'react';
import getGifs from '../services/getGifs';

export default function ListOfGifs ({ keywords }){
    const [gifs, setGifs] = useState([]);

  useEffect(function(){
    getGifs({keywords}).then(gifs =>setGifs(gifs));
  },[keywords]);

    return gifs.map(({id,title,url}) => 
    <Gif 
      id={id}
      key={id} 
      title={title} 
      url={url}
    />
    )
}