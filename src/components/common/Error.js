import styles from './Error.module.css';

const Error = ({ message }) => {
  return <div className={styles.message}>{message}</div>;
};

export default Error;
