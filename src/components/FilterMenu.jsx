import React, { useEffect, useState } from 'react';
import './external styles/filterMenu.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchByCategory, fetchProducts } from '../Rtk/slices/products-slice';
const SideFilterMenu = () => {
 const [selectedCategory, setSelectedCategory] = useState(null);
 const [active, setActive] = useState(null);

 useEffect(() => {
  console.log(active);
  
 }, [active])

 const categories = [
  { id: 1, name: 'All', value: 'all' },
  { id: 2, name: 'Electronics', value: 'electronics' },
  { id: 3, name: `Men's Clothing`, value: 'men\'s clothing' },
  { id: 4, name: `Women's Clothing`, value: 'women\'s clothing' },
  { id: 5, name: 'Jewelry', value: 'jewelery' },
 ]
 const dispatch = useDispatch();
 const handleButtonFilter = (e, category) => {
  if (e.target.dataset.value === 'all') {
   dispatch(fetchProducts());
   setSelectedCategory(null);

  } else{
  dispatch(fetchByCategory(e.target.dataset.value));
  setSelectedCategory(category);
  setActive(e.target.dataset.value);
  }

 };


 return (
  <div className="side-filter">
   <h3>Categories</h3>
   <ul>
    {categories.map((category) => (
     <li key={category.id} data-value={category.value} className={`${category.value === active ? 'active' : ''}filter-links `} onClick={(e) => handleButtonFilter(e, category)}>
      {category.name}
     </li>
    ))}
   </ul>
  </div>
 );
};

export default SideFilterMenu;
