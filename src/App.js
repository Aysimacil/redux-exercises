import Counter from "./components/Counter/Counter";
import Todo from "./components/Todo/Todo";
import { store } from "./redux";
import { Provider } from "react-redux";
import React, { useState } from 'react';

function App() {
  const [showTodo, setShowTodo] = useState(false);
  return (
    <div className="App">
      <Provider store={store}>
     <h1 >Redux</h1>
      <br/>
     {!showTodo ? (
      <Counter onClick={() => setShowTodo(true)} />
     ) : (
      <Todo />
     )}

      </Provider>
    </div>
  );
}

export default App;
