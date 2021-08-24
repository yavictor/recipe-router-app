import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { CatalogList } from '../components/CatalogList';
import { Preloader } from '../components/Preloader';


function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() =>{
    getAllCategories()
    .then((data) => {
      setCatalog(data.categories);
    })
  }, []);
  return (
  <>
    {!catalog.length ? (
      <Preloader /> 
    ) : (
      <CatalogList catalog={catalog} />
    )}
  </>
  );
}
export { Home };
