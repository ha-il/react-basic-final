# 리액트 스터디 - 리액트 기초 졸업작품

## 신경 쓴 부분

### 1. 커스텀 훅을 사용하여 관심사 분리

페이지를 나타내는 `Home` 컴포넌트는 오직 UI만 그려내길 원했습니다. 데이터를 불러오는 것 같은 로직에 관련된 코드를 따로 분리하고 싶었습니다. `useCharacters`라는 커스텀 훅을 만들어 캐릭터 데이터를 불러오는 로직을 분리했습니다.

```js
const Home = () => {
  // 데이터를 불러오는 로직을 useCharacters 커스텀 훅으로 대체
  const { characters, loading, error } = useCharacters();

  // Home 컴포넌트는 UI 렌더링에만 관심을 갖게 만들기
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
```

### 2. 폴더 구조

변하지 않는 상수 값은 `constants` 폴더에, 일반적으로 사용되는 컴포넌트는 `components/common` 폴더에, 하나의 페이지를 나타내는 컴포넌트는 `pages` 폴더에 넣는 등 전반적인 폴더 구조를 잡는데 신경을 썼습니다.

### 3. 스타일

마블 캐릭터들을 보니 왠지 카드 게임이 생각나서 카드 게임 스타일로 CSS 작업을 해봤습니다.
