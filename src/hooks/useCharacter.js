import { useEffect, useState } from 'react';
import { CHARACTERS_API_URL } from '../constants';
import { useParams } from 'react-router-dom';

const useCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({
    name: '',
    thumbnail:
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
    series: [],
    comics: [],
    stories: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${CHARACTERS_API_URL}/${id}`);
        if (!response.ok) {
          throw new Error('데이터를 불러오는 데 실패했습니다.');
        }
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
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { character, id, loading, error };
};

export default useCharacter;
