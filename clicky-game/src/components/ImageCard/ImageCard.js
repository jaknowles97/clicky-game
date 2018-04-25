import React from "react";
import "./ImageCard.css";



const ImageCard = props => (

            <div className="col-3">
                <div className="img-container imgSize" key={props.id} onClick={() => props.handleClick(props.id)}>
                    <img alt={props.name} src={props.src} />
                </div>
            </div>

        
);

export default ImageCard;

