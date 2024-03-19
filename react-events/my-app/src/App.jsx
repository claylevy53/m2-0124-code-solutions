import './App.css';
import Button from './Button';

function App() {
  const handleCustomClick = (text) => {
    alert(text);
  };

  return (
    <div>
      <Button text="Hello" color="red" onCustomClick={handleCustomClick} />
      <Button text="I" color="white" onCustomClick={handleCustomClick} />
      <Button text="Clay" color="blue" onCustomClick={handleCustomClick} />
    </div>
  );
}

export default App;
