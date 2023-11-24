import Carousel from "./Carousel/Carousel.jsx"
import React, { forwardRef } from "react";
import "./Garrery.sass";

const Gallery = forwardRef((props, ref) => {
    return(
        <Carousel ref={ref}>
            <div className="item item-1">item-1</div>
            <div className="item item-2">item-2</div>
            <div className="item item-3">item-3</div>
        </Carousel>
    )
});


Gallery.displayName = 'Gallery';
export default Gallery;