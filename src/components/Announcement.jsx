import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    height: 30px;
    background-color: #fcf5f5;
    color: dark-gray;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`;

const Announcement = () => {
  return (
    <Container>
    Super Deal !  Free Shipping on Orders above $50
    </Container>
  )
}

export default Announcement