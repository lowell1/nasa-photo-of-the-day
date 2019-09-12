import React from "react";

const Image = (props) => {
    var imgAlt = "";
    if(props.data.url) {
        imgAlt = props.data.url.slice(
            props.data.url.lastIndexOf("/") + 1,
            props.data.url.indexOf(".jpg")
        ).split("_").join(" ");
    }

    return (
        <div className="imageContainer">
            <p>{props.data.date}</p>
            <a href={props.data.url}><img src={props.data.url} alt={imgAlt}/></a>
            <h4>{props.data.title}</h4>
            <h4>Image Credit &amp; Copyright: {props.data.copyright}</h4>
            <p><span style={{fontWeight: "bold"}}>Explanation:</span> {props.data.explanation}</p>
            {/* <p><span style={{fontWeight: "bold"}}>Tomorrow's picture:</span> {props.data.tomorrow}</p> */}
        </div>
    );
}

export default Image