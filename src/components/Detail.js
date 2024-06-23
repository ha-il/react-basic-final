import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Detail.module.css';
import { CHARACTER_API_URL } from '../constants';
import Card from './Card';
import WorkList from './WorkList';

const Detail = () => {
  const [character, setCharacter] = useState({
    name: '',
    thumbnail:
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
    series: [],
    comics: [],
    stories: [],
  });
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(CHARACTER_API_URL + id);

      const {
        data: { results },
      } = await response.json();

      const character = results[0];

      const fetchedCharacter = {
        name: character.name,
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        series: character.series.items,
        comics: character.comics.items,
        stories: character.stories.items,
      };
      setCharacter(fetchedCharacter);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Link to={'/'} className={styles.link}>
        ⬅️ Home
      </Link>
      <div className={styles.contentContainer}>
        <div className={styles.character}>
          <Card character={{ ...character, id }} />
        </div>

        <div className={styles.worklistContainer}>
          <WorkList title={'Series'} works={character.series} />
          <WorkList title={'Comics'} works={character.comics} />
          <WorkList title={'Stories'} works={character.stories} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
