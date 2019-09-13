import React from "react"
import styled from "styled-components"

const Button = styled.button`
    width: 5rem;
    height: 3rem;

    ${props => props.danger && `background-color: red; color: blue`};
    ${props => props.safe && `background-color: green; color: red`}
`;
 
// const onBtnClick = () => {
    // console.log(document.querySelector(".funButtons button").style);
   //document.querySelector(".funButtons button").animation="flashAnim 1s infinite";
//    document.querySelector(".funButtons button").style.setProperty("animation", "flashAnim 1s infinte");
// }

const randomDate = () => {
    var date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random()*500));
    console.log(`${date.getFullYear()}`);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

const FunButtons = props => {
    return (
        <div className="funButtons">
            <Button danger>Danger!</Button>
            <Button safe onClick={e => props.setUrlDate(randomDate())}>Random date</Button>
        </div>
    );
}
//document.querySelector("funButtons button").style={animation: "flashAnim 2s"}

export default FunButtons