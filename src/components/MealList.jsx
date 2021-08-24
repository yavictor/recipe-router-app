import { MealItem } from "./MealItem";

function MealList({ meals }) {
  return (
    <div className="catalog meals">
      {meals.map(el => {
        return <MealItem key={el.idMeal} {...el} />
      })}
    </div>
  );
}

export { MealList };