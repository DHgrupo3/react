import React from "react";
import "../../src/App.css";
import foto from "../assets/images/hidro.webp";

function ImgBody() {
  return (
    <React.Fragment>
      <div>
        <img src={foto} className="img" alt="Imagen de body" />
      </div>
    </React.Fragment>
  );
}

export default ImgBody;
