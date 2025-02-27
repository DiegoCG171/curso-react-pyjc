import { GridItem } from "./GridItem";

interface Props {
  categories: string[];
}

export const GridComponent = ({ categories }: Props) => {
  return (
    <>
      {categories.map((category) => {
        return <GridItem key={category} category={category} />;
      })}
    </>
  );
};
