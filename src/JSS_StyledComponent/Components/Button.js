import styled from 'styled-components';


export const Button = styled.button`
    background: ${props => props.primary ? 'blue' : 'orange'};
    color: #fff;
    font-size: ${props => props.fontSize2x ? '2rem' : '1rem'};
    border-radius: 5px;
    font-weight: bold;
    padding: 1rem;
    opacity: 1;
    border: none;
        &hover:{
            opacity: 0.7;
            transition: all .5s;
        }
`