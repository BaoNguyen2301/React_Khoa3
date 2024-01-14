import styled from "styled-components";
import React from "react";

export const Link = (props) =>{
    return <a className={props.className}>
        {props.children}
    </a>
}

export const StyledLink = styled(Link)`
    color: pink;
    font-size: 1.5rem;
`