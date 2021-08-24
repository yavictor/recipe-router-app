import { Link } from 'react-router-dom';

function CatalogItem(props) {
  const {idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props;
  return (
    <div className="card" id={idCategory}>
      {/* <div className="card-title center">{strCategory}</div> */}
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory}/>
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription}</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${idCategory}`} className="btn orange">More in this category</Link>
      </div>
    </div>
  );
}

export { CatalogItem };