import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import Image from "../../types/imageType";
import css from "./ImageGallery.module.css";

type ImageGalleryProps = {
  images: Image[];
  onImageClick: (image: Image) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={css.imageGallery}>
      {images.map((image) => (
        <li className={css.listImage} key={image.id}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
