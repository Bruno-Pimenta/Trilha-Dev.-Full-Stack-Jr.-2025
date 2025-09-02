import React, { useState, useMemo } from "react";

const SearchField = ({ onSearch }) => {
  const [texto, setTexto] = useState("");

  function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  // Memoriza a função debounce para não recriar em cada renderização
  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        onSearch(value);
      }, 1000), // delay de 1s
    [onSearch]
  );

  const handleChange = (event) => {
    const value = event.target.value;
    setTexto(value);
    debouncedSearch(value);// Se mudar alguma coisa no termo de busca, após 2000s ele será usado para a busca
  };

  return (
    <>
        <label for="searchID">
            Realize sua busca aqui
            <input
                type="text"
                value={texto}
                onChange={handleChange}
                placeholder="Digite o nome do filme"
                id="searchID"
            />
        </label>
    </>
  );

}

export default SearchField;