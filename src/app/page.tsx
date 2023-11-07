import React from 'react';
import './scss/page.scss';

import Column from './components/Column';
import { columns } from './columns';

const App: React.FC = () => {
  return (
    <div className='kanban-board'>
      {Object.keys(columns).map((title) => (
        <Column key={title} title={title} tasks={columns[title]} />
      ))}
      </div>
  );
};

export default App;
