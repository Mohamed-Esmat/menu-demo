import { useState } from 'react';
import Title from './components/Title';
import menu from './data';
import Menu from './components/Menu';
import Categories from './Categories';

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['All', ...tempSet];

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  // const [filteredItems, setFilteredItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  //Bad solution because we add a none necessary state
  // const filterItems = (category) => {
  //   if (category === 'all') {
  //     setFilteredItems(menu);
  //   } else {
  //     const filteredItems = menuItems.filter(
  //       (item) => item.category === category
  //     );
  //     setFilteredItems(filteredItems);
  //     // setMenuItems(filteredItems);
  //   }
  // };

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const filteredItems = menu.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
