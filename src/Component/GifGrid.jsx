
import React from 'react'

export const GifGrid = ({category}) => {


    const getGifs = async() => {


        const url = `https://api.giphy.com/v1/gifs/search?api_key=89nPq3wiFfdsjPZ7Q5UYyfutOUSARzJn&q=${ category }`

        const resp = await fetch (url)

        const {data} = await resp.json()


        console.log(data)


    }

    getGifs()


  return (
    <>
    
        <h3>{category}</h3>
    
    
    </>
  )
}
