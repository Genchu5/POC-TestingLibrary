import { useState } from "react";

interface counterProps{
  initialCount  : number 
}

export default function Counter( {initialCount} : counterProps ) {

  const [count, setCount] = useState(initialCount);

  function increment(){
    setCount((prev) => prev + 1);
  };

  function decrement(){
    setCount((prev) => prev - 1);
  };

  function restart(){
    setCount(0);
  };

  function switchSigns(){
    setCount((prev) => prev * -1);
  };

  return (
    <div>
      <h1>
        Contador: <h3 data-testid="count">{count}</h3>
      </h1>
      <div>
        <button onClick={increment}> Incrementar </button>
        <button onClick={decrement}> Reducir </button>
        <button onClick={restart}> Reiniciar </button>
        <button onClick={switchSigns}> Cambiar signo </button>
      </div>
    </div>
  );
}
