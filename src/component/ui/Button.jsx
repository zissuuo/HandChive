import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 7px 7px;
    font-size: 12px;
    border-width: 0px;
    border-radius: 15px;
    display: flex;
    width: 100%;
    cursor: pointer;
    align-items: center;
    background-color: white;
    color: black;
    justify-content: center;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    font-family: 'NanumNeo', sans-serif; /* NanumNeo 폰트를 적용 */
`;





function Button(props) {
    const { title, onClick } = props;
    
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
