import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';
import Filters from '../../components/Filters/Filters';
import styles from './HomePage.module.css';

const HomePage = () => {
  const pokemons = useSelector(state => state.pokemons.data);

  return (
    <div className={styles.homePageContainer}>
      <NavBar />
      <SearchBar />
      <div className={styles.contentArea}>
        <Filters />
        <div className={styles.cardsContainer}>
          {pokemons && pokemons.map(pokemon => (
            <Cards key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
