import { useEffect } from "react";

interface Props {
    category: string;
}

export const GridItem = ({category}: Props) => {

  const getGifs = async() => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uyIji3WtMJuZUCMgrZu2JCTnamzVlmgb&q=${category}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( (gif: any) => {
        return {
            id: gif.id,
            title: gif.title,
            img: gif.images.downsized_medium.url
        }
    })

    return gifs;
  }

  useEffect

  getGifs()

  return (
    <div>{category}</div>
  )
}
