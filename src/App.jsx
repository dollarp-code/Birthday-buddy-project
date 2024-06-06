import { useState } from 'react';
import data from './data.js';
import List from './List.jsx';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <div>
      <h2>{people.length} birthdays today</h2>;
      <List people={people} />
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear List
      </button>
    </div>
  );
};
export default App;
