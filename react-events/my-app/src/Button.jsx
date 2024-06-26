export default function Button({ text, color, onCustomClick }) {
  const handleClick = () => {
    onCustomClick(text);
  };

  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {text}
    </button>
  );
}
