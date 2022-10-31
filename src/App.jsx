import apiService from "./services/api.service";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState(null);

  // will run on first page load
  useEffect(
    () => {
      apiService.getTodo().then((data) => {
        setTodo(data);
      });
    },

    // Dependency array
    []
  );

  return <h1 className="text-3xl font-bold underline">{todo?.title}</h1>;
}

export default App;
