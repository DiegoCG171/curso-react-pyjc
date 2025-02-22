import { useState } from "react";
import { AddCategory } from "./AddCategory";

export const GifsApp = () => {
  const [categories, setCategories] = useState(["El Aro", "Pacman"]);

    const handleAddCategory = () => {
        // Valorant
        setCategories([...categories, 'Valorant'])
        
    }

  return (
    <>
      <h1>GifsApp</h1>
      <AddCategory addCategory={setCategories} />
      {/* <button onClick={handleAddCategory} style={{marginTop: 8}}>Agregar Categoria</button> */}
      <ul>{
        categories.map((category, i) => {
            return <li key={i}>{category}</li>
        })
      }</ul>
    </>
  );
};
