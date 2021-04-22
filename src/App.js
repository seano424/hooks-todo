import './App.css';
import TodoApp from './components/TodoApp'
import Nav from './components/Nav'

function App() {
  return (
    <div className="uppercase h-full flex justify-center">
      <Nav />
      <TodoApp />
    </div>
  );
}

export default App;
