import React from "react";
import Modal from "react-modal";
import Image from "../../types/imageType";

type ImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
};

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  if (!image) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="modal-content">
        <img src={image.urls.regular} alt={image.alt_description || "Image"} />
        <p>
          {image.description ||
            image.alt_description ||
            "No description available."}
        </p>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
