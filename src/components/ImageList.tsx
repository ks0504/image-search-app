import React, { FC } from "react";
import { Hits } from "../model/images";

type Props = {
  images: Hits[];
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
