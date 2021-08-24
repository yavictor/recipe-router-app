import { CatalogItem } from "./CatalogItem";

function CategoryList({catalog = []}) {
  return (
    <div className="catalog">
      {catalog.map(el => {
        return <CatalogItem key={el.idCategory} {...el} />
      })}
    </div>
  );
}

export { CategoryList };