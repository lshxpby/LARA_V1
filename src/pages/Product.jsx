import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
   padding: 50px;
   display: flex;
   ${mobile({ padding: "10px", flexDirection:"column" })}
`;
const ImageContainer = styled.div`
   flex: 1;
`;
const Image = styled.img`
   width: 100%;
   height: 90vh;
   object-fit: cover;
   ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px" })}
   
`;
const Title = styled.h1`
   font-weight: 200;
`;
const Desc = styled.p`
   margin: 20px 0px;
`;
const Price = styled.span`
   font-weight: 100;
   font-size: 40px;
`;

const FilterContainer = styled.div`
   width: 50%;   
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   ${mobile({ width: "100%" })}
   
`;
const Filter = styled.div`
   display: flex;
   align-items: center;
`;
const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`;
const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props=>props.color};
   margin: 0px 5px;
   cursor: pointer;
`;
const FilterSize = styled.select`
   margin-left: 10px;
   padding: 5px;
`;
const FilterSizeOption = styled.option`
   
`;
const AddContainer = styled.div`
   width: 50%;   
   display: flex;
   align-items: center;
   justify-content: space-between;
   ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
`;
const Amount = styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 5px;
`;
const Button = styled.button`
   padding: 15px;
   border: 2px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 500;

   &:hover{
    background-color: #f8f4f4;
   }
`;


const Product = () => {
  return (
   <Container>
    
    <Navbar/>
    <Announcement/>
    <Wrapper>
        <ImageContainer>
            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
        </ImageContainer>
        <InfoContainer>
            <Title>Jessie Thunder Shoes</Title>
            <Desc>Made from 100% recycyled fabric, our Thunder Shoes are our most comfortable footwear to date. The charm of these shoes lie in their flexibility to be paired with any outfit.</Desc>
            <Price>$200</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color ="black"/>
                    <FilterColor color ="darkblue"/>
                    <FilterColor color ="gray"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>37</FilterSizeOption>
                        <FilterSizeOption>38</FilterSizeOption>
                        <FilterSizeOption>39</FilterSizeOption>
                        <FilterSizeOption>40</FilterSizeOption>
                        <FilterSizeOption>41</FilterSizeOption>
                        <FilterSizeOption>42</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
    </Wrapper>

    <Newsletter/>
    <Footer/>
   </Container>
  )
}

export default Product