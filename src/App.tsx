import React from 'react';
import './App.css';
import TaskCard from './Components/layout/TaskCard/TaskCard';
import NewCardButton from './Components/layout/Buttons/NewCardButton/NewCardButton';

const App: React.FC = () => {
  return (
    <div className='App'>
      <NewCardButton />
      <TaskCard />
    </div>
  );
};

export default App;
