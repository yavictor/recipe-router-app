import { Link } from 'react-router-dom';

function MealItem(props) {
  const { strMeal, idMeal, strMealThumb } = props;
  return (
    <div className="card" id={idMeal}>
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal}/>
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn orange">View full recipe</Link>
      </div>
    </div>
  );
}

export { MealItem };