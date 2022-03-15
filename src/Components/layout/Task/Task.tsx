import React from 'react';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';
import styles from './Task.module.css';

interface Props {
  task: string;
}

const Task: React.FC<Props> = ({ task }) => {
  return (
    <div className={styles['container-col']}>
      <div className={styles['container-row']}>
        <div className={styles['task']}>{task}</div>
        <DeleteButton />
      </div>
    </div>
  );
};

export default Task;
