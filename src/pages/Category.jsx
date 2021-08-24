import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCaregory } from '../api';
import { MealList } from '../components/MealList';
import { Preloader } from '../components/Preloader';


function Category() {
  const {name} = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCaregory(name)
    .then((data) => setMeals(data.meals));
  }, [name]);
  return (
    <>
      <button className="btn-small orange back-btn" onClick={goBack}>Back</button>
      {!meals.length ? (
        <Preloader /> 
      ) : (
        <MealList meals={meals} />
      )}
    </>
  )
}
export { Category };
