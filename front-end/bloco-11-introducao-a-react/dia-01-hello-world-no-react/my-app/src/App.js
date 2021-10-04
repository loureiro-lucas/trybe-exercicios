import './App.css';

const taskList = ['Estudar React', 'Revisar JEST', 'Aprender Bulma']

const Task = (array) => array.map((item) => <li>{item}</li>);

function App() {
  return (
    <div>{Task(taskList)}</div>
  );
}

export default App;
