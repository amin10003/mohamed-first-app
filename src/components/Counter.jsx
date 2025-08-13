import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  

  return (
    <div style={{backgroundColor:'black',color: "white", margin: "12px", padding: "20px", borderRadius: '8px'}}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
       <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default Counter


