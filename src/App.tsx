import React from "react";
import * as style from "./App.module.css";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className={style.style}>
      <SearchBar />
    </div>
  );
}

export default App;
