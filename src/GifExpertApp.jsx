import React, { useState } from "react";
import { AddCategory } from "./Component/AddCategory";
import { GifGrid } from "./Component/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

   const onAddCategory = (newCategory) => {

    if (categories.includes (newCategory)) return

    

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      
      <h1>GifExpertApp</h1>

     

      <AddCategory 
      // setCategories={setCategories}
      onNewCategory={(value) => onAddCategory(value) }
       />

      
      
        {
        categories.map( ( category ) => (
            <GifGrid 
            key={ category } 
            category={category}
            />
          ))
        }
   

     
    </>
  );
};
