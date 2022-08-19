import { useState } from 'react';

const PLACE_HOLDER = 'Enter todo...';

function Input({ value, setValue, saveTodo }) {
  const [placeholder, setPlaceholder] = useState(PLACE_HOLDER);

  function onInputChange(event) {
    // Меняем значение *value*. (Рендер)
    setValue(event.target.value);
  }

  function onSave() {
    validateValue();
    saveTodo();
  }

  function validateValue() {
    if (value.trim() === '') {
      setPlaceholder('must not be blank');
    }
  }

  return (
    <div>
      <input
        id='input'
        value={value}
        onFocus={() => setPlaceholder(PLACE_HOLDER)}
        placeholder={placeholder}
        onChange={onInputChange}
      />
      <button onClick={onSave}>Save</button>
    </div>
  );
}

export default Input;
