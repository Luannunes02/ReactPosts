import React from 'react';
import styled from 'styled-components'


const Nav = styled.nav`
    padding: 10px 0;
`;

const Img = styled.img`
    height: 50px;  
    width: 120px; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const Title = styled.h2`
    font-weight: bold;
`

const Span = styled.span`

`



export default function Header() {
    return (
        <Nav className='container-fluid bg-dark gx-0 text-center'>
            <Title><Span style={{ color: '#71bb00' }}>React</Span>Posts</Title>
        </Nav>
    )
}