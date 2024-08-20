


// DataItems.js
import React, { useEffect, useState, useRef } from 'react';
import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FaFilter, FaSearch } from 'react-icons/fa';
import './DataItem.css';

export const DataItems = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsCollection = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsCollection);
        const itemsList = itemsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(itemsList);
        setFilteredItems(itemsList);

        const uniqueCategories = [...new Set(itemsList.map(item => item.item))];
        setCategories(['All', ...uniqueCategories]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => item.item === category);
      setFilteredItems(filtered);
    }
    setDropdownVisible(false);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = items.filter(item =>
      item.itemname.toLowerCase().includes(value)
    );
    setFilteredItems(filtered);
  };

  const handleItemClick = (item) => {
    setSearchTerm(item.itemname);
  };

  return (
    <div className="data-items-container">
      <div className="filter-bar">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for items"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <div className="filter-dropdown" ref={dropdownRef}>
          <button
            className="filter-button"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            <FaFilter /> Offerings
          </button>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <button 
                onClick={() => handleFilter('All')} 
                className={selectedCategory === 'All' ? 'active' : ''}
              >
                All
              </button>
              {categories.filter(category => category !== 'All').map(category => (
                <button
                  key={category}
                  onClick={() => handleFilter(category)}
                  className={selectedCategory === category ? 'active' : ''}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="items-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="item-card" onClick={() => handleItemClick(item)}>
            <img src={item.imgUrl} alt={item.itemname} />
            <h3>{item.itemname}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};