import React, { FC } from "react";

// type Hits = {
//   id: number;
//   pageURL: string;
//   tags: string;
//   webformatURL: string;
// };

export type Props = {
  //TODO: any型をやめる
  images: any[];
};

export const ImageList: FC<Props> = ({ images }) => {
  const getList = images.map((image) => {
    return (
      <a
        href={image.pageURL}
        key={image.id}
        target="_blank"
        rel="noopener noreferrer"
        className="image"
      >
        <img src={image.webformatURL} alt={image.tags} />
      </a>
    );
  });
  return <div>{getList}</div>;
};
