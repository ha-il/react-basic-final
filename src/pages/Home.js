import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import useCharacters from '../hooks/useCharacters';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';

const Home = () => {
  const { characters, loading, error } = useCharacters();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

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
