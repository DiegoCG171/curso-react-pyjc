import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GridComponent } from "./GridComponent";

export const GifsApp = () => {
  const [categories, setCategories] = useState(["El Aro", "Pacman"]);

    const handleAddCategory = (value: string) => {
        setCategories([...categories, value])
    }

  return (
    <>
      <h1>GifsApp</h1>
      <AddCategory addCategory={handleAddCategory} />
      <GridComponent categories={categories} />
    </>
  );
};
