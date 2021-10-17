import React, { useEffect, useState } from "react";
import axios from "axios";
import * as style from "./styles/styles.module.css";
import { SearchBar } from "./components/SearchBar";
import { ImageList } from "./components/ImageList";
import logo from "./logo.png";

// type Hits = {
//   id: number;
//   pageURL: string;
//   tags: string;
//   webformatURL: string;
// };

// type State = {
//   inputWord: string;
//   setInputWord: React.Dispatch<React.SetStateAction<string>>;
//   searchWord: string;
//   setSearchWord: React.Dispatch<React.SetStateAction<string>>;
//   // any型をやめたい
//   images: any[];
//   setImages: React.Dispatch<React.SetStateAction<string>>;
// };

type Params = {
  key: string | undefined;
  q: string;
};

type Response = {
  hits: [];
  total: number;
  totalHits: number;
};

const App: React.FC = () => {
  const [inputWord, setInputWord] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [images, setImages] = useState([]);

  const APIKEY = process.env.REACT_APP_PIXABAY_APIKEY;

  const onSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log("inputWord : " + inputWord);
    //TODO: searchWordに上手くセットされない
    setSearchWord(inputWord);
    console.log("searchWord : " + searchWord);
    try {
      const params: Params = {
        key: APIKEY,
        //TODO: q: searchWordにしたい
        q: inputWord,
      };

      const res = await axios.get<Response>("https://pixabay.com/api/", {
        params,
      });
      setImages(res.data.hits);
      console.log(res.data);
      if (res.data.total === 0) {
        alert("画像はありません。");
      }
    } catch {
      alert("画像の取得に失敗しました。");
    }
  };

  // await axios
  //   .get<Response>(`https://pixabay.com/api/?key=${APIKEY}&q=${inputWord}`)
  //   .then((results) => {
  //     console.log(results.data.hits);
  //     setImages(results.data.hits);
  //     if (results.data.total === 0) {
  //       alert("画像はありません。");
  //     }
  //   })
  //   .catch((error) => {
  //     alert("画像の取得に失敗しました。");
  //     console.log(error.status);
  //   });
  // };

  return (
    <div className={style.style}>
      <img src={logo} alt="logo" className={style.logo} />
      <SearchBar
        onSubmit={onSearch}
        inputWord={inputWord}
        setInputWord={setInputWord}
      />
      <p>{searchWord}</p>
      <ImageList images={images} />
    </div>
  );
};

export default App;
