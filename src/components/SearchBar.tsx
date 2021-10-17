import React, { useState, FC } from "react";

// export type Word = {
//   word: string;
//   setWord: React.Dispatch<React.SetStateAction<string>>;
// };

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputWord: string;
  setInputWord: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar: FC<Props> = ({ onSubmit, inputWord, setInputWord }) => {
  //   const [word, setWord] = useState("");

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // defaultで用意されている動作をやめる
    e.preventDefault();
    // console.log(searchWord);
    onSubmit(e);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value);
  };

  return (
    <form onSubmit={onFormSubmit} className="ui form">
      <div className="field">
        <label>Image Search</label>
        <input
          type="text"
          name="search"
          placeholder=""
          value={inputWord}
          onChange={handleInput}
        />
      </div>

      <button className="ui button" type="submit">
        search
      </button>
    </form>
  );
};
