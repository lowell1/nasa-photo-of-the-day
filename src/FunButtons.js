import React from "react"
import styled from "styled-components"

const Button = styled.button`
    width: 5rem;
    height: 3rem;

    ${props => props.danger && `background-color: red; color: blue`};
    ${props => props.safe && `background-color: green; color: red`}
`;

const onBtnClick = () => {
    console.log(document.querySelector("funButtons button"));
}

const FunButtons = () => {
    return (
        <div className="funButtons">
            <Button danger onclick={e => onBtnClick()}>Danger!</Button>
            <Button safe>Random date</Button>
        </div>
    );
}
//document.querySelector("funButtons button").style={animation: "flashAnim 2s"}

export default FunButtons