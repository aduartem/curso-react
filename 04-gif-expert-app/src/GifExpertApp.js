import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GitExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  // const handleAdd = () => {
  //   setCategories([...categories, 'HunterXHunter']);
  // };

  return (
    <>
      <h2>GitExpertApp</h2>

      <AddCategory />

      <hr />
      <ol>
        {
          categories.map(category => {
            return (
              <li key={category}>{category}</li>
            )
          })
        }
      </ol>
    </>
  );
};

export default GitExpertApp;