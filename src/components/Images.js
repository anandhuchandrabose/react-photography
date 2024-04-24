
import React from "react";
import BASE_URL, { GET_IMAGE_BY_ID } from "../configuration/config";

function Images(props) {
    const { data, onClick } = props;

    const handleClickImage = (id) => {
        onClick(id);
    };

    return (
        <div className="Images-container p-lg-4">
            {data.map((image) => (
                <div
                    onClick={() => handleClickImage(image.id)}
                    key={image.id}
                    className="image"
                >
                    <div className="image-wrapper p-2">
                        <img src={`${GET_IMAGE_BY_ID}/${image.id}`} alt={image.name} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Images;
