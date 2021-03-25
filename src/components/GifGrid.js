// import React, { useEffect, useState } from 'react'
import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifts } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

  // const [images, setImages] = useState([])

  // useEffect(() =>  {
  //   getGifts(category).then(imgs => setImages(imgs))
  // }, [category])

  const {data: images, loading} = useFetchGifts(category)



  return (
    <>
      <h3 className="animate__animated animate__bounce">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem
            key={img.id}
            {...img}
          />
        })}
      </div>
    </>

  )
}
