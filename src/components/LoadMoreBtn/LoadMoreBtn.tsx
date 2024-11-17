import React from "react";

type LoadMoreBtnProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button className="load-more-btn" onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
