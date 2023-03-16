import React, { useState } from 'react';

const TodoList = ({ todos, deleteTodo }) => {
  const [isCheckedMap, setIsCheckedMap] = useState({});

  const handleCheck = (id) => {
    setIsCheckedMap(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-between items-center py-2 px-6 border-b border-gray-200">
          
          <div className="text-gray-500 w-12">{todo.id}</div>
          <div className="flex-1 ml-2" style={{marginLeft: 'calc(5px + 2rem)'}}>
            {todo.text}
          </div>

          <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white py-1 px-1 rounded hover:bg-red-600 mr-3">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
          
          <button onClick={() => handleCheck(todo.id)} className="bg-green-500 text-white py-1 px-1 rounded hover:bg-green-600">
            {isCheckedMap[todo.id] ? 
            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  
              <line x1="18" y1="6" x2="6" y2="18" />  
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg> : 
            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  
              <polyline points="20 6 9 17 4 12" />
            </svg>}
          </button>

        </div>
      ))}
    </div>
  );
};

export default TodoList;