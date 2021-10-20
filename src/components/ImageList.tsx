import React, { FC } from "react";
import { Hits } from "../model/images";
import * as styles from "../styles/styles.module.css";

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
      >
        <img
          className={styles.images_size}
          src={image.webformatURL}
          alt={image.tags}
        />
      </a>
    );
  });
  return <div>{getList}</div>;
};
