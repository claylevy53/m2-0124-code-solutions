import { useState } from 'react';
import CustomButton from './button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incriment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <CustomButton text={'Up'} onClick={incriment} />
      <p>{count}</p>
      <CustomButton text={'Down'} onClick={decrement} />
    </>
  );
}

export default App;
