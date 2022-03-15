import React, { useState } from 'react';
import NewTaskButton from '../Buttons/NewTaskButton/NewTaskButton';
import styles from './NewTask.module.css';

const NewTask: React.FC = () => {
  const [taskName, setTaskName] = useState('');

  const taskNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.currentTarget.value);
  };

  const addNewTaskHandler = () => {
    console.log(taskName);
    setTaskName('');
  };

  return (
    <div className={styles['container']}>
      <input
        type='text'
        className={styles['task-input']}
        placeholder='task name...'
        value={taskName}
        onChange={taskNameHandler}
      />
      <NewTaskButton newTaskHandler={addNewTaskHandler} />
    </div>
  );
};

export default NewTask;
