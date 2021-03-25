import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
  const [categories, setCategories] = useState(['Samurai X'])

  /* const handleAdd = () => {
    setCategories([...categories, 'Ranma 1/2'])
  } */

  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
      <ol>
        {categories.map((category, index) => (
          <GifGrid
            key={index}
            category={category}/>
        ))}
      </ol>
    </>
  );
}
