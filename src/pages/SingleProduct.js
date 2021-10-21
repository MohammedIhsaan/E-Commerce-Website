
import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../component/Announcement'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import NewsLetter from '../component/NewsLetter'
import shirt from '../images/shirt.png'

const Conatiner = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImageContainer = styled.div`
flex:1;
`
const Image = styled.img`
width: 70%;
height: 90vh;
object-fit:cover;
`
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-size: 40px;
font-weight: 100;
`

const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 50%;
   margin: 30px 0px;
`

const Filter = styled.div`
display: flex;
align-items: center;
`



const FilterTitle = styled.h1`
font-size:20px;
margin: 0 10px;
`
const FilterColor = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;    
`

const Select = styled.select``
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 50% ;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;

`
const Amount = styled.span`
width: 40px;
height: 40px;
border-radius: 10px;
border: 1px solid gray;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button` 
padding: 10px;
border:  ipx solid gray;
cursor: pointer; 
`




export default function SingleProduct() { 
    return (
        <Conatiner>
            <Announcement/>
            <NavBar/>
            <Wrapper>
                <ImageContainer>
                    <Image src={shirt} alt='not availble at this moment'/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Shirt</Title>
                    <Desc> njhgedyf jhebfunekwrjf v ebfgyubg ehe khewtgrujc hejk ujhujen k iuher cnjk 
                        jnieufhdew u uiwherc  joihrcn e lijoehrkc  loiejrmc  loirjc  
                        uieh ujne 
                        ioejwf iojhefio mj
                         </Desc>
                    <Price>1000 RS</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="Black"/>
                            <FilterColor color="red"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <Select>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </Select>
                            
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter/>
            <Footer/> 

        </Conatiner>
    )
}
