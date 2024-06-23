import { useEffect, useState } from 'react';
import { CHARACTERS_API_URL } from '../constants';

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${CHARACTERS_API_URL}?limit=50&orderBy=modified&series=24229,1058,2023`
        );
        if (!response.ok) {
          throw new Error('데이터를 불러오는 데 실패했습니다.');
        }
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
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { characters, loading, error };
};

export default useCharacters;
