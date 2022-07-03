import React from "react";
import "./directory-item.component.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (

      <div className="directory-item-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        {/* <img src={imageUrl} alt={title}/> */}
        <div className="directory-item-body">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
   
  );
};

export default DirectoryItem;
