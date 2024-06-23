import { PALETTE } from '../constants';
import styles from './Card.module.css';

const Card = ({ character: { id, name, thumbnail, series } }) => {
  const getRandomColor = () => {
    const mainColors = Object.keys(PALETTE);

    const randomColor =
      mainColors[Math.floor(Math.random() * mainColors.length)];
    const colorSet = [randomColor, PALETTE[randomColor]];
    return colorSet;
  };

  const getRandomGradient = () => {
    const randomColor = getRandomColor();

    return `linear-gradient(45deg, ${randomColor[0]}, ${randomColor[1]}, ${randomColor[0]})`;
  };

  return (
    <div
      className={styles.characterBackGround}
      style={{ background: getRandomGradient() }}
    >
      <div className={name.length < 29 ? styles.name : styles.longName}>
        {name}
      </div>
      <div className={styles.thumbnailContainer}>
        <img className={styles.thumbnail} src={thumbnail} />
      </div>
      <div className={styles.series}>
        {series.slice(0, 3).map((item) => (
          <div key={item.resourceURI} className={styles.seriesTitle}>
            {item.name}
          </div>
        ))}
      </div>
      <div className={styles.copyright}>
        <div>© 2023 MARVEL</div>
        <div>MARVEL-{id}</div>
      </div>
    </div>
  );
};

export default Card;
