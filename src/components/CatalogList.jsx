import { CatalogItem } from "./CatalogItem";

function CatalogList({catalog = []}) {
  return (
    <div className="catalog">
      {catalog.map(el => {
        return <CatalogItem key={el.idCategory} {...el} />
      })}
    </div>
  );
}

export { CatalogList };