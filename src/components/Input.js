

function Input({value, setValue, onButtonClick}) {

  function onInputChange(event) { // Меняем значение *value*. (Рендер)
    setValue(event.target.value);
  }

  return (
    <div>
      <input value={value} onChange={onInputChange} /> 
      <button onClick={onButtonClick}>Save</button>
    </div>
  );
}

export default Input;
