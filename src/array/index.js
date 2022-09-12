const Array = () => {
  const arr = [1, 2, 4, 3, 6, 1, 2, 66, 3, 2, 8, 7];

  //arr.push добавляет элемент в конец массива
  //   arr.push("posledniy element");

  //arr.pop убирает элемент с конца массива
  //   console.log(arr.pop());

  //arr.unshift добавляет элемент в начало массива
  //   arr.unshift("perviy element");

  //arr.shift извлекает элемент с начала массива
  //   console.log(arr.shift());

  //arr.forEach  мутабельный метод перебора массива
  //   console.log(
  //     "forEach",
  //     arr.forEach((elem) => {
  //       if (typeof elem === "object") {
  //         elem.push(2);
  //       }
  //     })
  //   );

  //arr.map создает копию массива не трогая основной массив
  //   console.log(
  //     arr.map((elem) => {
  //       return elem + 1;
  //     })
  //   );

  //arr.includes проверяет, есть ли элемент в массиве
  //   console.log("includes", arr.includes(999));

  //arr.find находит первый элемент, соответствующий выражению
  //   console.log(
  //     "find",
  //     arr.find((elem) => elem === 2)
  //   );

  //arr.findIndex находит индекс первого элемент, соответствующий выражению
  //   console.log(
  //     "findIndex",
  //     arr.findIndex((elem) => elem === 2)
  //   );

  //arr.some возвращает true\false если в массиве есть хотябы один элемент, соответствующий выражению
  //   console.log(
  //     "some",
  //     arr.some((elem) => elem === 999)
  //   );

  //arr.every возвращает true\false если в массиве есть все элементы, соответствуют выражению
  //   console.log(
  //     "every",
  //     arr.every((elem) => typeof elem === "number")
  //   );

  //arr.filter возвращает копию массива, с элементами, которые соответстуют выражению
  //   console.log(
  //     "filter",
  //     arr.filter((elem) => typeof elem === "string")
  //   );

  //arr.sort сортирует элементы массива и мутирует ваш объект
  //   const newArr = { ...arr };
  //   console.log("newArr", newArr);
  //   arr.sort((a, b) => {
  //     if (a > b) return 1;
  //     if (a < b) return -1;
  //     return 0;
  //   });

  //arr.slice возвращает новый массив с ограниченными по индексу элементами
  //   console.log("slice", arr.slice(0, -1));

  //arr.splice изменяет массив, удаляя из него элементы
  //   arr.splice(2);

  //arr.reduce возвращает новую переменную исходя из перебора массива
  console.log(
    "reduce",
    arr.reduce((accum, elem, index) => {
      accum[`element-${index}`] = elem;
      return accum;
    }, {})
  );

  console.log("array", arr);

  return (
    <div>
      {arr.map((elem) => (
        <p>{elem}</p>
      ))}
    </div>
  );
};

export default Array;
