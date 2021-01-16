import React from "react";

const ImageList = (props) => {
  const Images = props.images.map((image) => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.regular} />
    );
  });

  return <div>{Images}</div>;
};

export default ImageList;
