import  {useState} from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';

const todoList = [
  {
    id: 0,
    text: 'Walk the dog',
    completed: false
  },{
    id: 1,
    text: 'Buy Eggs',
    completed: false
  },{
    id: 2,
    text: 'Guitar Practice',
    completed: true
  }
]
function App() {
  const [todos, setTodos] = useState(todoList)

  const submitTodo = todo => setTodos([...todos, todo])
  const removeTodo = id => setTodos(todos.filter(todo => todo.id !== id))
  return (
    <div className="App">
      <h1>Rodwin's Todo List</h1> 
      <TodoForm submitTodo={submitTodo}/> 
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
