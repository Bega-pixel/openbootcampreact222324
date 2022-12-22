import './App.css';
import FiltreOptions from './components/pure/FilterOptions.jsx';
import TodoContainer from './components/containers/TodoContainer.jsx';
import TodoFormContainer from './components/containers/TodoFormContainer.jsx';


function App() {
  return (
    <div className="App">
       <TodoContainer></TodoContainer>
       <TodoFormContainer></TodoFormContainer>
       <FiltreOptions></FiltreOptions>
    </div>
  );
}

export default App;
