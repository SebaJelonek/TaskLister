import React from 'react';
import styles from './NewCardButton.module.css';

const NewCardButton: React.FC = () => {
  return <button className={styles['btn']}>Add new task list</button>;
};

export default NewCardButton;
