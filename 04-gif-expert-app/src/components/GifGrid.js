import React from 'react';

export const GifGrid = ({category}) => {

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
    console.log(gifs);
  };

  getGifs();

  return (
    <div>
      {category}
    </div>
  )
};