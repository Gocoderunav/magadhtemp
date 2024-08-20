
import React, { useState } from 'react';
import "./Carditems.css";
import { FaSearch, FaFilter, FaLeaf, FaDrumstickBite } from 'react-icons/fa';

const restaurantData = [
  {
    id: 1,
    cuisine: "Drinks-Beverages",
    dishTypes: ["snacks", "Beverages"],
    itemName: "Nibbu Panni",
    img: "path_to_nibbu.png",
    isVeg: true,
  },
  {
    id: 2,
    cuisine: "Drinks-Beverages",
    dishTypes: ["snacks", "Beverages"],
    itemName: "Fish Drink",
    img: "path_to_fish.png",
    isVeg: false,
  },
  {
    id: 3,
    cuisine: "Drinks-Beverages",
    dishTypes: ["snacks", "Beverages"],
    itemName: "Aam Panna",
    img: "path_to_aam.png",
    isVeg: true,
  },
  {
    id: 4,
    cuisine: "Drinks-Beverages",
    dishTypes: ["snacks", "Beverages"],
    itemName: "Mango Egg shake",
    img: "path_to_mango.png",
    isVeg: false,
  },
  {
    id: 5,
    cuisine: "Food",
    dishTypes: ["Dinner", "Lunch", "breakfast"],
    itemName: "Kadai Chicken",
    img: "path_to_kadaichicken.png",
    isVeg: false,
  },
  {
    id: 6,
    cuisine: "Food",
    dishTypes: ["Dinner", "Lunch", "breakfast"],
    itemName: "Masala Chicken",
    img: "path_to_masalachicken.png",
    isVeg: false,
  },
  {
    id: 7,
    cuisine: "Food",
    dishTypes: ["Dinner", "Lunch", "breakfast"],
    itemName: "Paneer Masala",
    img: "path_to_paneermasala.png",
    isVeg: true,
  },
  {
    id: 8,
    cuisine: "Food",
    dishTypes: ["Dinner", "Lunch", "breakfast"],
    itemName: "Kadai Paneer",
    img: "path_to_kadaipaneer.png",
    isVeg: true,
  },
  {
    id: 9,
    cuisine: "Snacks",
    dishTypes: ["Snacks", "breakfast", "Beverages"],
    itemName: "Tea",
    img: "path_to_tea.png",
    isVeg: true,
  },
  {
    id: 10,
    cuisine: "Snacks",
    dishTypes: ["Snacks", "breakfast", "Beverages"],
    itemName: "Coffee",
    img: "path_to_coffee.png",
    isVeg: true,
  },
];

export const Carditems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [vegFilter, setVegFilter] = useState('all');
  const [mealTypeFilter, setMealTypeFilter] = useState('all');

  const filteredItems = restaurantData.filter(item =>
    (item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cuisine.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (vegFilter === 'all' || (vegFilter === 'veg' && item.isVeg) || (vegFilter === 'nonveg' && !item.isVeg)) &&
    (mealTypeFilter === 'all' || item.dishTypes.includes(mealTypeFilter))
  );

  const currentFilterText = () => {
    if (vegFilter !== 'all' || mealTypeFilter !== 'all') {
      return `${vegFilter !== 'all' ? vegFilter.charAt(0).toUpperCase() + vegFilter.slice(1) : ''} ${mealTypeFilter !== 'all' ? mealTypeFilter.charAt(0).toUpperCase() + mealTypeFilter.slice(1) : ''}`.trim();
    }
    return '';
  };

  return (
    <div className="restaurant-page">
      <div className="search-filter-container">
        <div className="search-bar-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for dishes or restaurants"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
        </div>
        <div>{currentFilterText()}</div> {/* Show selected filter option here */}
        <div className="filter-options">
          <button onClick={() => setVegFilter('all')} className={vegFilter === 'all' ? 'active' : ''}>All</button>
          <button onClick={() => setVegFilter('veg')} className={vegFilter === 'veg' ? 'active' : ''}>Veg</button>
          <button onClick={() => setVegFilter('nonveg')} className={vegFilter === 'nonveg' ? 'active' : ''}>Non-Veg</button>
          <div className="dropdown">
            <button className="dropbtn"><FaFilter /> Filter</button>
            <div className="dropdown-content">
              <a href="#" onClick={() => setMealTypeFilter('all')}>All</a>
              <a href="#" onClick={() => setMealTypeFilter('breakfast')}>Breakfast</a>
              <a href="#" onClick={() => setMealTypeFilter('Beverages')}>Beverages</a>
              <a href="#" onClick={() => setMealTypeFilter('Snacks')}>Snacks</a>
              <a href="#" onClick={() => setMealTypeFilter('Lunch')}>Lunch</a>
              <a href="#" onClick={() => setMealTypeFilter('Dinner')}>Dinner</a>
            </div>
          </div>
        </div>
      </div>
      <div className="restaurant-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="restaurant-card">
            <img src={item.img} alt={item.itemName} className="restaurant-image" />
            <div className="restaurant-info">
              <h3>{item.itemName}</h3>
              <div className="veg-nonveg-icon">
                {item.isVeg ? <FaLeaf className="veg-icon" /> : <FaDrumstickBite className="nonveg-icon" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
