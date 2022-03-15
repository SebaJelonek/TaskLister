import React from 'react';
import styles from './NewTaskButton.module.css';

interface Props {
  newTaskHandler: () => void;
}

const NewTaskButton: React.FC<Props> = ({ newTaskHandler }) => {
  return (
    <button onClick={newTaskHandler} className={styles['btn']}>
      Add
    </button>
  );
};

export default NewTaskButton;
