import { useState } from 'react';
import TodoItem from './TodoItem';

let id = 2;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: '123',
    },
  ])

  const [todoValue, setTodoValue] = useState();

  const handleButtonClick = () => {
    setTodos([{
      id,
      content: todoValue,
    },
     ...todos,]);
     setTodoValue('');
     id++;
  }

  const handleInputChange = (e) => {
    setTodoValue(e.target.value);
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id != id));
  }

  return (
    <div className='App'>
      <input placeholder='something to do?' value={todoValue} onChange={handleInputChange}/>
      <button onClick={handleButtonClick}>新增</button>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo}/>)
      }
    </div>
  );
}

export default App;
