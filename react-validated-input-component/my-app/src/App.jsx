import { useState } from 'react';
import './App.css';

const ValidatedInput = () => {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Function to handle input change
  const handleChange = (event) => {
    const value = event.target.value;
    // Perform validation here
    const isValidInput = value.length >= 8; // Password should be at least 8 characters long
    setIsValid(isValidInput);
    setPassword(value);
  };

  return (
    <div className="validated-input">
      <input
        type="password"
        value={password}
        onChange={handleChange}
        className={password.length >= 8 ? 'valid' : 'invalid'} // Dynamically apply CSS classes based on validation status
      />
      {password.length === 0 && <span className="icon">❌</span>}
      {password.length > 0 && password.length < 8 && (
        <span className="icon">❌</span>
      )}
      {password.length >= 8 && <span className="icon">✅</span>}
      {!isValid && (
        <span className="error-message">
          Password must be at least 8 characters long
        </span>
      )}{' '}
      {/* Display error message if input is invalid */}
    </div>
  );
};

export default ValidatedInput;
