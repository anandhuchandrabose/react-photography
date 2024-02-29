import React from "react";

function Images(props) {
  const { data, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="Images-container">
      {data.map((slide, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className="image"
        >
          <div className="image-wrapper">
            <img src={slide.src} alt={slide.description} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Images;
