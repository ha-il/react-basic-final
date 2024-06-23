import styles from './WorkList.module.css';

const WorkList = ({ title, works }) => {
  return (
    <div>
      <h2 className={styles.listTitle}>{title}</h2>
      <ul className={styles.listContainer}>
        {works.map((item) => (
          <li key={item.resourceURI} className={styles.listName}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkList;
