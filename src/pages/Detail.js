import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Detail.module.css';
import Card from '../components/Card';
import WorkList from '../components/WorkList';
import useCharacter from '../hooks/useCharacter';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';

const Detail = () => {
  const { character, id, loading, error } = useCharacter();
  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

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
