import React from "react";

const ImageList = (props) => {
  const Images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });

  return <div>{Images}</div>;
};

export default ImageList;
