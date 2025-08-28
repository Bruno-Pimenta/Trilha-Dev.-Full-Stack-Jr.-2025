import React, { useState } from "react";
import Filmes from "./Filmes";
import SearchField from "./SearchField";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SearchField onSearch={setSearchTerm} />
      <Filmes term={searchTerm} />
    </>
  );
};

export default App;
