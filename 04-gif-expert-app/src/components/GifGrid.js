import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=cxFEwYkkSqLvK6S2UB2hP2N7A0iTbS4X&q=Rick and Morty';
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    });
    setImages(gifs);
  };


  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          images.map( (image) => (
            <GifGridItem
              key={image.id}
              { ...image } />
          ))
        }
      </div>
    </>
  )
};