import { useEffect, useState } from "react";

interface Props {
  category: string;
}

export const GridItem = ({ category }: Props) => {
  const [images, setImages] = useState([]);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uyIji3WtMJuZUCMgrZu2JCTnamzVlmgb&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
    
    const gifs = data.map((gif: any) => {
      return {
        id: gif.id,
        title: gif.title,
        url_img: gif.images.downsized_medium.url,
      };
    });

    return gifs;
  };

  useEffect(() => {
    getGifs().then((gifs) => setImages(gifs));
  }, [category]);

  return (
    <div style={{display: 'flex', width: '100%',}}>
      {
        images.map((img: any) => (
          <div >
            <p>{img.title}</p>
            <img src={img.url_img} style={{width: 150, height: 150}} />
          </div>
        ))}
    </div>
  );
};
