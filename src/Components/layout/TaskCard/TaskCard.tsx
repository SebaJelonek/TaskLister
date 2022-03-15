import React from 'react';
import NewTask from '../NewTask/NewTask';
import Task from '../Task/Task';
import styles from './TaskCard.module.css';

const dummyTasks = [
  { task: 'Walk the dog', id: 0 },
  { task: 'Eat breakfast', id: 1 },
  { task: 'Drink coffe', id: 2 },
  { task: 'Go to work', id: 3 },
  { task: '1234567890 1234567890', id: 4 },
];

const addNewTaskToArray = (name: string) => {
  console.log(dummyTasks);
  const newTaskObject = { task: name, id: dummyTasks.length };
  dummyTasks.push(newTaskObject);
  console.log(dummyTasks);
};

const onClickHandler = () => {
  addNewTaskToArray('sup');
};

const TaskCard: React.FC = () => {
  return (
    <div onClick={onClickHandler} className={styles['container']}>
      <h2 className={styles['list-title']}>This is task card!</h2>
      {dummyTasks.map(({ task, id }) => (
        <Task key={id} task={task} />
      ))}
      <NewTask />
    </div>
  );
};

export default TaskCard;
