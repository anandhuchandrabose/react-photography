import { FC } from "react";

interface ImagesProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: Number) => void;
}

const Images: FC<ImagesProps> = (props) => {
  const { data, onClick } = props;

  const handleClickImage = (index: Number) => {
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
};

export default Images;
