import React from 'react'
import styled from 'styled-components'
import Announcement from '../component/Announcement'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import NewsLetter from '../component/NewsLetter'
import Products from '../component/Products'
import { Mobile } from '../Responsive'

const Container = styled.div``
const Title = styled.h1`
margin: 20px;`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
${Mobile({display:'flex',flexDirection:'column',alignItem:'center'})}
flex: ${props=>props.type==='filter'&& '2'};
flex: ${props=>props.type==='sort'&& '1'}
`
const FilterText = styled.span`
font-size:20px;
font-weight: 600;
margin-right: 20px;
padding: 10px;
`

const Select = styled.select`
margin-right:20px;
padding: 10px;
${Mobile({margin:'8px 0px',})}

`
const Option = styled.option``

export default function PorductList() {
    return (
        <Container>
            <Announcement/>
            <NavBar/> 
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter type='filter'>
                    <FilterText> Filter Products:</FilterText>
                    <Select>
                        <Option disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option> 
                        <Option>XL</Option>
                        
                    </Select>
                </Filter>
                <Filter type='sort'>
                    <FilterText> Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price : Low to High</Option>
                        <Option>Price : High to Low</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}
