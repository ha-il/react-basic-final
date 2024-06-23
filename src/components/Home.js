import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Card from './Card';
import { CHARACTERS_API_URL } from '../constants';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${CHARACTERS_API_URL}?limit=50&orderBy=modified&series=24229,1058,2023`
      );

      const {
        data: { results },
      } = await response.json();

      const fetchedCharacters = results.map((character) => ({
        id: character.id,
        name: character.name,
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        series: character.series.items,
        comics: character.comics.items,
      }));
      setCharacters(fetchedCharacters);
    }
    fetchData();
  }, []);

  return (
    <ul className={styles.charactersContainer}>
      {characters.map((character) => {
        return (
          <li key={character.id} className={styles.character}>
            <Link to={`/detail/${character.id}`} className={styles.link}>
              <Card character={character} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
